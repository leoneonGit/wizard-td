/** One-command deploy: build + force-push dist/ to the gh-pages branch. */
import { execSync } from 'node:child_process';

const run = (cmd, cwd) => execSync(cmd, { stdio: 'inherit', cwd });

run('npx vite build');
run('git init -b gh-pages', 'dist');
run('git add -A', 'dist');
run('git -c user.name=deploy -c user.email=deploy@local commit -m deploy', 'dist');
run('git push -f https://github.com/leoneonGit/wizard-td.git gh-pages', 'dist');
execSync(process.platform === 'win32' ? 'rmdir /s /q dist\\.git' : 'rm -rf dist/.git', {
  stdio: 'inherit',
  shell: true,
});
console.log('\nDeployed! Live in ~1 min at https://leoneongit.github.io/wizard-td/');
