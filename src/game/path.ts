import { CELL } from '../engine/grid';
import type { MapDef } from './types';

export interface TrackPoint {
  x: number;
  y: number;
  angle: number;
}

/** A track: waypoint polyline in pixels, with distance-along-path lookup. */
export class Track {
  points: { x: number; y: number }[];
  /** cumulative length at each point (cum[0] = 0) */
  cum: number[];
  total: number;

  constructor(map: MapDef) {
    this.points = map.waypoints.map(([cx, cy]) => ({
      x: cx * CELL + CELL / 2,
      y: cy * CELL + CELL / 2,
    }));
    this.cum = [0];
    for (let i = 1; i < this.points.length; i++) {
      const a = this.points[i - 1];
      const b = this.points[i];
      this.cum.push(this.cum[i - 1] + Math.hypot(b.x - a.x, b.y - a.y));
    }
    this.total = this.cum[this.cum.length - 1];
  }

  /** Position + heading at distance d along the track (clamped). */
  posAt(d: number): TrackPoint {
    if (d <= 0) {
      const a = this.points[0];
      const b = this.points[1];
      return { x: a.x, y: a.y, angle: Math.atan2(b.y - a.y, b.x - a.x) };
    }
    if (d >= this.total) {
      const a = this.points[this.points.length - 2];
      const b = this.points[this.points.length - 1];
      return { x: b.x, y: b.y, angle: Math.atan2(b.y - a.y, b.x - a.x) };
    }
    // binary search not needed at this scale; linear scan over ~10 segments
    let i = 1;
    while (this.cum[i] < d) i++;
    const a = this.points[i - 1];
    const b = this.points[i];
    const segLen = this.cum[i] - this.cum[i - 1];
    const t = (d - this.cum[i - 1]) / segLen;
    return {
      x: a.x + (b.x - a.x) * t,
      y: a.y + (b.y - a.y) * t,
      angle: Math.atan2(b.y - a.y, b.x - a.x),
    };
  }
}
