import { distance } from './utils.js';
export class Ripple {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.radius = 0;
    this.maxRadius = 0;
    this.speed = 10;
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;
  }

  start(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.maxRadius = this.getMax(x, y);
  }

  animate(ctx) {
    if (this.radius < this.maxRadius) {
      this.radius += this.speed;
    }
  }

  getMax(x, y) {
    return Math.max(
      distance(0, 0, x, y),
      distance(0, this.stageHeight, x, y),
      distance(this.stageWidth, 0, x, y),
      distance(this.stageWidth, this.stageHeight, x, y)
    );
  }
}