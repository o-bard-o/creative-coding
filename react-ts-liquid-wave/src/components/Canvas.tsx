import useCanvas from '../Hooks/useCanvas';

interface drawFunction {
  (
      ctx: any,
      frameCount: number,
      stageWidth: number,
      stageHeight: number,
  ): void
}

const Canvas = (draw: drawFunction) => {
  const canvasRef = useCanvas(draw);
  
  return <canvas ref={canvasRef}/>
}

export default Canvas;