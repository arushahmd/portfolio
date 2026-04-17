import { useEffect, useRef } from "react";
// import { motion } from "framer-motion";

interface RobotRunnerProps {
  enabled?: boolean;
}

const RobotRunner: React.FC<RobotRunnerProps> = ({ enabled = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!enabled) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 150; // fixed height at bottom

    let x = 0;
    const y = 100;
    const speed = 2;
    const trail: { x: number; y: number }[] = [];

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update robot position
      x += speed;
      if (x > canvas.width + 50) x = -50;

      // Add to trail
      trail.push({ x, y });
      if (trail.length > 200) trail.shift();

      // Draw trail line
      ctx.beginPath();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "rgba(109,40,217,0.5)";
      ctx.moveTo(trail[0].x, trail[0].y);
      for (let i = 1; i < trail.length; i++) {
        ctx.lineTo(trail[i].x, trail[i].y);
      }
      ctx.stroke();

      // Draw robot (simple circle as placeholder, replace with SVG for detailed robot)
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fillStyle = "#6D28D9";
      ctx.fill();
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = 2;
      ctx.stroke();

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 150;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute bottom-0 left-0 w-full h-36 pointer-events-none"
    />
  );
};

export default RobotRunner;
