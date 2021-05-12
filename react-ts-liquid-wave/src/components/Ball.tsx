import React from 'react';
import Canvas from './Canvas';

const Ball = () => {
  const draw = (ctx: { clearRect: (arg0: number, arg1: number, arg2: any, arg3: any) => void; beginPath: () => void; arc: (arg0: number, arg1: number, arg2: number, arg3: number, arg4: number) => void; fillStyle: string; fill: () => void; closePath: () => void; }, frameCount: number, stageWidth: number, stageHeight: number) => {
    ctx.clearRect(0, 0, stageWidth, stageHeight);
    ctx.beginPath();
    ctx.arc(stageWidth/2, stageHeight/2, 30*Math.sin(frameCount * 0.05)**2, 0, Math.PI * 2);
    ctx.fillStyle = 'pink';
    ctx.fill();
    ctx.closePath();
  }

  return <Canvas draw={draw} />
}

export default Ball;