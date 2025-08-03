'use client';

import React, { useEffect } from 'react';

interface FollowCursorProps {
  color?: string;
}

const FollowCursor: React.FC<FollowCursorProps> = ({ color = '#ffeac2ff' }) => {
  useEffect(() => {
    let canvas: HTMLCanvasElement;
    let context: CanvasRenderingContext2D | null;
    let animationFrame: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    let cursor = { x: width / 2, y: height / 2 };
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    );

    class Dot {
      position: { x: number; y: number };
      width: number;
      lag: number;
      color: string;
      height: number;

      constructor(x: number, y: number, width: number, lag: number, color: string) {
        this.position = { x, y };
        this.width = width;
        this.height = height;
        this.lag = lag;
        this.color = color;
      }

      moveTowards(x: number, y: number, context: CanvasRenderingContext2D) {
        this.position.x += (x - this.position.x) / this.lag;
        this.position.y += (y - this.position.y) / this.lag;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(
          this.position.x,
          this.position.y,
          this.width,
          0,
          2 * Math.PI
        );
        context.fill();
        context.closePath();
      }
    }

    const dot = new Dot(width / 2, height / 2, 10, 10, color);

    const onMouseMove = (e: MouseEvent) => {
      cursor.x = e.clientX;
      cursor.y = e.clientY;
    };

    const onWindowResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      if (canvas) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    const updateDot = () => {
      if (context) {
        context.clearRect(0, 0, width, height);
        dot.moveTowards(cursor.x, cursor.y, context);
      }
    };

    const loop = () => {
      updateDot();
      animationFrame = requestAnimationFrame(loop);
    };

    const onPointerCheck = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (target) {
        const style = getComputedStyle(target);
        if (style.cursor === 'pointer') {
          dot.color = '#1a1a1a83';
          dot.width = 20;
        } else {
          dot.color = color;
          dot.width = 10
        }
      }
    };

    const init = () => {
      if (prefersReducedMotion.matches) {
        console.log('Reduced motion enabled, cursor effect skipped.');
        return;
      }

      canvas = document.createElement('canvas');
      context = canvas.getContext('2d');
      canvas.style.position = 'fixed';
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.pointerEvents = 'none';
      canvas.width = width;
      canvas.height = height;
      document.body.appendChild(canvas);

      document.addEventListener('mousemove', onPointerCheck);
      window.addEventListener('mousemove', onMouseMove);
      window.addEventListener('resize', onWindowResize);

      loop();
    };

    const destroy = () => {
      if (canvas) canvas.remove();
      cancelAnimationFrame(animationFrame);
      document.removeEventListener('mousemove', onPointerCheck);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onWindowResize);
    };

    prefersReducedMotion.onchange = () => {
      if (prefersReducedMotion.matches) {
        destroy();
      } else {
        init();
      }
    };

    init();

    return () => {
      destroy();
    };
  }, [color]);

  return null;
};

export default FollowCursor;
