import { useEffect, useRef } from "react";

interface Drop {
  x: number;
  y: number;
  radius: number;
  dy: number;
}

const RainBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const drops: Drop[] = [];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Initialize drops
    for (let i = 0; i < 80; i++) {
      drops.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 3 + 2,
        dy: Math.random() * 1 + 1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drops.forEach((drop) => {
        ctx.beginPath();
        ctx.arc(drop.x, drop.y, drop.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(109,40,217,0.2)";
        ctx.fill();

        drop.y += drop.dy;
        if (drop.y > canvas.height) {
          drop.y = -drop.radius;
          drop.x = Math.random() * canvas.width;
        }
      });
      requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    return () => window.removeEventListener("resize", () => {});
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  );
};

export default RainBackground;
