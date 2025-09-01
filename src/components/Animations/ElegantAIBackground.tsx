import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const ElegantAIBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodes: Node[] = [];
  const numNodes = 50;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradientColors = ["#6D28D9", "#5B21B6", "#3B82F6", "#06B6D4"];

    // Initialize nodes
    for (let i = 0; i < numNodes; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1.5,
      });
    }

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw lines
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 180) {
            ctx.strokeStyle = `rgba(109,40,217,${1 - dist / 180})`;
            ctx.lineWidth = 0.7;
            // curved line
            ctx.beginPath();
            ctx.moveTo(n1.x, n1.y);
            ctx.quadraticCurveTo(
              (n1.x + n2.x) / 2 + Math.sin(dist) * 10,
              (n1.y + n2.y) / 2 + Math.cos(dist) * 10,
              n2.x,
              n2.y
            );
            ctx.stroke();
          }
        }
      }

      // Draw nodes
      nodes.forEach((n, idx) => {
        // attraction to mouse
        const dx = n.x - mouseX;
        const dy = n.y - mouseY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 150) {
          n.vx -= dx * 0.0005;
          n.vy -= dy * 0.0005;
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradientColors[idx % gradientColors.length];
        ctx.fill();

        // Update positions
        n.x += n.vx;
        n.y += n.vy;

        // wrap edges
        if (n.x < 0) n.x = canvas.width;
        if (n.x > canvas.width) n.x = 0;
        if (n.y < 0) n.y = canvas.height;
        if (n.y > canvas.height) n.y = 0;
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-50"
    />
  );
};

export default ElegantAIBackground;
