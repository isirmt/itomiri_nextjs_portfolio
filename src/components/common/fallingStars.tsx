"use client";

import React, { useRef, useEffect } from "react";

type Star = {
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  angle: number;
};

export default function FallingStars() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const starsRef = useRef<Star[]>([]);
  const animationIdRef = useRef<number>(0);
  const svgImageRef = useRef<HTMLImageElement | null>(null);

  const initStars = (width: number, height: number) => {
    const stars: Star[] = [];
    const count = Math.floor((width * height) / 100000);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 15 + 5,
        speed: Math.random() * 0.2 + 0.25,
        opacity: Math.random() * 0.1 + 0.05,
        angle: Math.random() * Math.PI * 2,
      });
    }
    starsRef.current = stars;
  };

  // 描画ループ
  const animate = () => {
    const canvas = canvasRef.current;
    const img = svgImageRef.current;
    if (!canvas || !img) {
      animationIdRef.current = requestAnimationFrame(animate);
      return;
    }
    if (!img.complete || img.naturalWidth === 0) {
      animationIdRef.current = requestAnimationFrame(animate);
      return;
    }

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);

    starsRef.current.forEach((star) => {
      ctx.save();
      ctx.globalAlpha = star.opacity;
      ctx.translate(star.x, star.y);
      ctx.rotate(star.angle);
      ctx.globalCompositeOperation = "lighter";
      ctx.drawImage(
        img,
        -star.size / 2,
        -star.size / 2,
        star.size,
        star.size
      );
      ctx.restore();

      star.y += star.speed;

      // 再スポーン
      if (star.y > height + star.size) {
        star.y = -star.size;
        star.x = Math.random() * width;
        star.size = Math.random() * 15 + 5;
        star.speed = Math.random() * 1.5 + 0.5;
        star.opacity = Math.random() * 0.1 + 0.05;
        star.angle = Math.random() * Math.PI * 2;
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
    // onload/onerror
    const img = new window.Image();
    img.src = "/rose_arrow.svg";
    img.onload = () => {
      svgImageRef.current = img;
    };
    img.onerror = () => {
      console.error("SVG の読み込みに失敗しました");
      svgImageRef.current = null;
    };

    resizeCanvas();

    animationIdRef.current = requestAnimationFrame(animate);

    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas ref={canvasRef} className="fixed top-0 left-0 w-svw h-svh z-[-1] pointer-events-none" />
  );
}
