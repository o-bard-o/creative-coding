import React from 'react';
import Canvas from './Canvas';

interface drawFunction {
  (
    ctx: any,
    frameCount: number,
    stageWidth: number,
    stageHeight: number,
  ): void
}

function Circle(){
  const startGradientLeftColor = 0xf15f23;
  const startGradientRightColor = 0x96298b;
  const endGradientLeftColor = 0xffff00;
  const endGradientRightColor = 0xf15a24;

  const Draw:drawFunction = (ctx, stageWidth, stageHeight, frameCount) => {
    const currGradientLeftColor = '#'+(startGradientLeftColor*0.5+endGradientLeftColor*0.5).toString(16);
    const currGradientRightColor ='#'+(startGradientRightColor*0.5+endGradientRightColor*0.5).toString(16);

    if(ctx) {
      const radius = 30 * Math.sin(frameCount * 0.05) ** 2;
      let gradient = ctx.createLinearGradient(stageWidth / 2 - radius, 0, stageWidth/2 + radius, 0);
      gradient.addColorStop(0, currGradientLeftColor);
      gradient.addColorStop(1, currGradientRightColor);

      ctx.clearRect(0, 0, stageWidth, stageHeight);
      ctx.beginPath();
      ctx.arc(stageWidth / 2, stageHeight / 2, radius, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();
      ctx.closePath();
    }
  }

  // @ts-ignore
  return <Canvas draw={Draw} />;
}

export default Circle;