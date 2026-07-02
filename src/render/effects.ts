/** Procedural VFX: particles, floating text, lightning arcs. Purely cosmetic. */

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  life: number; maxLife: number;
  size: number;
  color: string;
  drag: number;
  gravity: number;
}

interface Floater {
  x: number; y: number;
  text: string;
  color: string;
  life: number; maxLife: number;
  size: number;
}

interface Arc {
  pts: { x: number; y: number }[];
  life: number; maxLife: number;
  color: string;
  width: number;
}

interface Ring {
  x: number; y: number;
  maxR: number;
  life: number; maxLife: number;
  color: string;
}

export const fx = {
  particles: [] as Particle[],
  floaters: [] as Floater[],
  arcs: [] as Arc[],
  rings: [] as Ring[],

  /** expanding shockwave ring (deaths, big impacts) */
  ring(x: number, y: number, color: string, maxR = 26) {
    this.rings.push({ x, y, maxR, life: 0.35, maxLife: 0.35, color });
  },

  burst(x: number, y: number, color: string, count: number, speed: number, size = 3, life = 0.45) {
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2;
      const v = speed * (0.4 + Math.random() * 0.6);
      this.particles.push({
        x, y,
        vx: Math.cos(a) * v, vy: Math.sin(a) * v,
        life, maxLife: life,
        size: size * (0.6 + Math.random() * 0.8),
        color, drag: 3.5, gravity: 0,
      });
    }
  },

  floater(x: number, y: number, text: string, color: string, size = 12) {
    this.floaters.push({
      x: x + (Math.random() - 0.5) * 10, y,
      text, color, life: 0.9, maxLife: 0.9, size,
    });
  },

  /** Jagged lightning arc between two points. */
  arc(x1: number, y1: number, x2: number, y2: number, color: string, width = 2.5) {
    const segs = 7;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.hypot(dx, dy) || 1;
    const nx = -dy / len; // perpendicular
    const ny = dx / len;
    const pts = [{ x: x1, y: y1 }];
    for (let i = 1; i < segs; i++) {
      const t = i / segs;
      const off = (Math.random() - 0.5) * len * 0.22;
      pts.push({ x: x1 + dx * t + nx * off, y: y1 + dy * t + ny * off });
    }
    pts.push({ x: x2, y: y2 });
    this.arcs.push({ pts, life: 0.18, maxLife: 0.18, color, width });
  },

  update(dt: number) {
    for (const p of this.particles) {
      p.life -= dt;
      const d = Math.max(0, 1 - p.drag * dt);
      p.vx *= d;
      p.vy = p.vy * d + p.gravity * dt;
      p.x += p.vx * dt;
      p.y += p.vy * dt;
    }
    this.particles = this.particles.filter((p) => p.life > 0);

    for (const f of this.floaters) {
      f.life -= dt;
      f.y -= 28 * dt;
    }
    this.floaters = this.floaters.filter((f) => f.life > 0);

    for (const a of this.arcs) a.life -= dt;
    this.arcs = this.arcs.filter((a) => a.life > 0);

    for (const g of this.rings) g.life -= dt;
    this.rings = this.rings.filter((g) => g.life > 0);
  },

  clear() {
    this.particles.length = 0;
    this.floaters.length = 0;
    this.arcs.length = 0;
    this.rings.length = 0;
  },

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    for (const g of this.rings) {
      const t = 1 - g.life / g.maxLife; // 0 -> 1
      ctx.globalAlpha = (1 - t) * 0.7;
      ctx.strokeStyle = g.color;
      ctx.lineWidth = 2.5 * (1 - t) + 0.5;
      ctx.beginPath();
      ctx.arc(g.x, g.y, g.maxR * t, 0, Math.PI * 2);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    for (const p of this.particles) {
      const t = p.life / p.maxLife;
      ctx.globalAlpha = t;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * t, 0, Math.PI * 2);
      ctx.fill();
    }
    for (const a of this.arcs) {
      const t = a.life / a.maxLife;
      ctx.globalAlpha = t;
      ctx.strokeStyle = a.color;
      ctx.lineWidth = a.width;
      ctx.shadowColor = a.color;
      ctx.shadowBlur = 8;
      ctx.beginPath();
      ctx.moveTo(a.pts[0].x, a.pts[0].y);
      for (let i = 1; i < a.pts.length; i++) ctx.lineTo(a.pts[i].x, a.pts[i].y);
      ctx.stroke();
      ctx.shadowBlur = 0;
    }
    ctx.globalAlpha = 1;
    ctx.textAlign = 'center';
    for (const f of this.floaters) {
      const t = f.life / f.maxLife;
      ctx.globalAlpha = Math.min(1, t * 2);
      ctx.font = `bold ${f.size}px 'Segoe UI', sans-serif`;
      ctx.lineWidth = 3;
      ctx.strokeStyle = 'rgba(0,0,0,0.6)';
      ctx.strokeText(f.text, f.x, f.y);
      ctx.fillStyle = f.color;
      ctx.fillText(f.text, f.x, f.y);
    }
    ctx.restore();
  },
};
