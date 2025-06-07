'use client';

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function TextParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.style.position = 'relative';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      1,
      5555
    );
    camera.position.z = 1400;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight, false);
    renderer.domElement.style.position = 'absolute';
    renderer.domElement.style.top = '0';
    renderer.domElement.style.left = '0';
    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    container.appendChild(renderer.domElement);

    const offCanvas = document.createElement('canvas');
    offCanvas.width = container.clientWidth;
    offCanvas.height = container.clientHeight;
    const ctx = offCanvas.getContext('2d');
    if (!ctx) return;

    const firstLineFontSize = Math.floor(container.clientHeight / 3);
    ctx.fillStyle = '#ffffff';
    ctx.font = `${firstLineFontSize}px lineseed`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('ITO MIRI', offCanvas.width / 2, offCanvas.height / 2 - firstLineFontSize / 2);
    const secondLineFontSize = Math.floor(container.clientHeight / 3 / 1.5);
    ctx.font = `${secondLineFontSize}px lineseed`;
    ctx.fillText('[NEXT]', offCanvas.width / 2, offCanvas.height / 2 + secondLineFontSize / 2);

    const imgData = ctx.getImageData(0, 0, offCanvas.width, offCanvas.height).data;
    const positions: number[] = [];
    const gap = 2;
    for (let y = 0; y < offCanvas.height; y += gap) {
      for (let x = 0; x < offCanvas.width; x += gap) {
        const idx = (y * offCanvas.width + x) * 4 + 3;
        if (imgData[idx] > 128) {
          const xPos = x - offCanvas.width / 2;
          const yPos = offCanvas.height / 2 - y;
          positions.push(xPos, yPos, 0);
        }
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      'position',
      new THREE.BufferAttribute(new Float32Array(positions), 3)
    );

    const material = new THREE.PointsMaterial({ size: 3, color: 0xef4444 });
    const points = new THREE.Points(geometry, material);
    scene.add(points);

    const animate = () => {
      requestAnimationFrame(animate);
      points.rotation.y += 0.004;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height, false);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="bg-transparent max-h-[calc(100svh_-_4rem)] mx-auto aspect-video pointer-events-none" />;
}
