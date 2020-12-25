import { BounceString } from "./bouncestring.js";
import {Ball} from './ball.js';

class App {
  constructor() {
    this.canvas = document.createElement("canvas");
    document.body.appendChild(this.canvas);
    this.ctx = this.canvas.getContext("2d");

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

    this.strings = [];
    this.moveX = -5000;
    this.moveY = -5000;
    this.isDown = false;

    window.addEventListener("resize", this.resize.bind(this), false);
    this.resize();

		this.ball = new Ball(this.stageWidth, this.stageHeight, 70, 4);

    document.addEventListener("pointerdown", this.onDown.bind(this), false);
    document.addEventListener("pointermove", this.onMove.bind(this), false);
    document.addEventListener("pointerup", this.onUp.bind(this), false);

    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);

		const xGap = 20;
		const yGap = 20;
		const y1 = xGap;
		const y2 = this.stageHeight - yGap;
		const total = Math.floor((this.stageWidth - xGap) / xGap);
		this.strings = [];
		for(let i=0;i<total;i++){
			this.strings[i] = new BounceString(
				{
					x1: i*xGap + xGap,
					y1: y1,
					x2: i*xGap + xGap,
					y2: y2,
				},
				"#eee2dc"
			)
		}
  }

  animate() {
    window.requestAnimationFrame(this.animate.bind(this));

    this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

    if (this.strings.length > 0) {
      for (let i = 0; i < this.strings.length; i++) {
        this.strings[i].animate(this.ctx, this.ball.x, this.ball.y);
      }
		}
		
		this.ball.animate(this.ctx, this.stageWidth, this.stageHeight);
  }

  onDown(e) {
    this.isDown = true;
    this.moveX = e.clientX;
    this.moveY = e.clientY;
  }

  onMove(e) {
    if (this.isDown) {
      this.moveX = e.clientX;
      this.moveY = e.clientY;
    }
  }

  onUp(e) {
    this.isDown = false;
    this.moveX = -5000;
    this.moveY = -5000;
  }
}

window.onload = () => {
	new App();
}