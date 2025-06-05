"use client";

import React, { useRef, useEffect } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
};

export default function FallingStars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const animationIdRef = useRef<number>(0);

  const initStars = (width: number, height: number) => {
    const stars: Star[] = [];
    for (let i = 0; i < Math.floor((width * height) / 45000); i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 15 + 5,
        speed: Math.random() * 1.5 + 0.5,
        opacity: Math.random() * 0.5 + 0.5,
      });
    }
    starsRef.current = stars;
  };

  // 描画ループ
  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    starsRef.current.forEach((star) => {
      ctx.save();
      ctx.globalAlpha = star.opacity;
      ctx.fillStyle = "#fff1f2";
      ctx.font = `${star.size}px sans-serif`;
      ctx.globalCompositeOperation = "lighter";
      ctx.fillText("→", star.x, star.y);
      ctx.restore();

      star.y += star.speed;

      // 再スポーン
      if (star.y > height + star.size) {
        star.y = -star.size;
        star.x = Math.random() * width;
        star.size = Math.random() * 15 + 5;
        star.speed = Math.random() * 1.5 + 0.5;
        star.opacity = Math.random() * 0.5 + 0.5;
      }
    });

    // 次フレームを予約
    animationIdRef.current = requestAnimationFrame(animate);
  };

  const resizeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;

    const ctx = canvas.getContext("2d");
    if (ctx) {
      ctx.scale(dpr, dpr);
    }

    initStars(width, height);
  };

  useEffect(() => {
    resizeCanvas();

    animationIdRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-svw h-svh z-[-1] pointer-events-none" />
  );
}
