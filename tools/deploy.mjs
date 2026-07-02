/**
 * One-command deploy: build, then push dist/ onto the gh-pages branch INCREMENTALLY
 * (via a linked worktree, normal commit + push) rather than force-pushing a fresh
 * orphan history every time. GitHub Pages' deploy pipeline appears to choke when
 * consecutive gh-pages pushes share no common ancestry (observed: builds erroring
 * with a bare "Page build failed" / deployment "failure" on every disconnected-
 * history force-push, even with .nojekyll present) — this keeps one continuous history.
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

const REMOTE = 'https://github.com/leoneonGit/wizard-td.git';
const WORKTREE = '.gh-pages-worktree';
const DEPLOY_BRANCH = 'gh-pages-deploy'; // local tracking branch for the fetch

const sh = (cmd, cwd) => execSync(cmd, { stdio: 'inherit', cwd });
const tryRun = (cmd, cwd) => {
  try {
    execSync(cmd, { stdio: 'pipe', cwd });
    return true;
  } catch {
    return false;
  }
};

sh('npx vite build');

// clean up any leftovers from a previous interrupted run
tryRun(`git worktree remove --force ${WORKTREE}`);
fs.rmSync(WORKTREE, { recursive: true, force: true });
tryRun(`git branch -D ${DEPLOY_BRANCH}`);

const hasRemoteBranch = tryRun(`git ls-remote --exit-code ${REMOTE} gh-pages`);

if (hasRemoteBranch) {
  sh(`git fetch ${REMOTE} gh-pages:${DEPLOY_BRANCH} --force`);
  sh(`git worktree add ${WORKTREE} ${DEPLOY_BRANCH}`);
} else {
  sh(`git worktree add --detach ${WORKTREE}`);
  sh('git checkout --orphan gh-pages', WORKTREE);
  tryRun('git rm -rf .', WORKTREE);
}

// replace worktree contents with the fresh build (keep .git)
for (const entry of fs.readdirSync(WORKTREE)) {
  if (entry === '.git') continue;
  fs.rmSync(path.join(WORKTREE, entry), { recursive: true, force: true });
}
fs.cpSync('dist', WORKTREE, { recursive: true });

sh('git add -A', WORKTREE);
const committed = tryRun('git -c user.name=deploy -c user.email=deploy@local commit -m deploy', WORKTREE);
if (!committed) {
  console.log('No changes since last deploy — nothing to push.');
} else {
  sh(`git push ${REMOTE} HEAD:gh-pages`, WORKTREE);
}

sh(`git worktree remove --force ${WORKTREE}`);
tryRun(`git branch -D ${DEPLOY_BRANCH}`);

console.log('\nDeployed! Live in ~1 min at https://leoneongit.github.io/wizard-td/');
