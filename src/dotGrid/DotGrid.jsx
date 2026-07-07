import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./DotGrid.css";

export default function DotGrid({
  dotSize = 3,
  gap = 10,
  baseColor = "#000000",
  activeColor = "#000000",
  proximity = 12,
}) {
  const canvasRef = useRef(null);
  const wrapperRef = useRef(null);
  const dots = useRef([]);
  const mouse = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrapper = wrapperRef.current;

    const ctx = canvas.getContext("2d");

    function createGrid() {
      const { width, height } = wrapper.getBoundingClientRect();

      canvas.width = width;
      canvas.height = height;

      dots.current = [];

      for (let y = gap; y < height; y += gap) {
        for (let x = gap; x < width; x += gap) {
          dots.current.push({
            x,
            y,
            ox: x,
            oy: y,
          });
        }
      }
    }

    createGrid();

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      dots.current.forEach((dot) => {
        const dx = mouse.current.x - dot.x;
        const dy = mouse.current.y - dot.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < proximity) {
          const force = (proximity - dist) / proximity;

          gsap.to(dot, {
            x: dot.ox - dx * force * 0.2,
            y: dot.oy - dy * force * 0.2,
            duration: 0.2,
          });
        } else {
          gsap.to(dot, {
            x: dot.ox,
            y: dot.oy,
            duration: 0.5,
          });
        }

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dotSize, 0, Math.PI * 2);

        ctx.fillStyle =
          dist < proximity ? activeColor : baseColor;

        ctx.fill();
      });

      requestAnimationFrame(draw);
    }

    draw();

    function move(e) {
      const rect = canvas.getBoundingClientRect();

      mouse.current.x = e.clientX - rect.left;
      mouse.current.y = e.clientY - rect.top;
    }

    function leave() {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", leave);
    window.addEventListener("resize", createGrid);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseleave", leave);
      window.removeEventListener("resize", createGrid);
    };
  }, [gap, dotSize, proximity, activeColor, baseColor]);

  return (
    <div ref={wrapperRef} className="dot-grid ">
      <canvas ref={canvasRef}></canvas>
      
    </div>
    
  );
}