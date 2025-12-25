import { useEffect, useRef } from 'react';

export default function AnimatedGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gridSize = 50;
    const lines: { x1: number; y1: number; x2: number; y2: number; opacity: number }[] = [];

    for (let x = 0; x <= canvas.width; x += gridSize) {
      lines.push({
        x1: x,
        y1: 0,
        x2: x,
        y2: canvas.height,
        opacity: Math.random() * 0.3,
      });
    }

    for (let y = 0; y <= canvas.height; y += gridSize) {
      lines.push({
        x1: 0,
        y1: y,
        x2: canvas.width,
        y2: y,
        opacity: Math.random() * 0.3,
      });
    }

    let animationId: number;
    let time = 0;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.01;

      lines.forEach((line, index) => {
        const pulseOpacity = Math.sin(time + index * 0.1) * 0.15 + 0.15;
        ctx.strokeStyle = `rgba(0, 217, 255, ${pulseOpacity})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-30"
    />
  );
}
