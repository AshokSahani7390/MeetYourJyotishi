"use client";

import React, { useEffect, useRef } from "react";
import { RiveAnimation } from "./RiveAnimation";
import { candleFlameStore, FlameId } from "@/store/useCandleFlameStore";

interface FlameItemProps {
  id: FlameId;
  width: string;
  className?: string;
  isLit: boolean;
}

export function FlameItem({ id, width, className, isLit }: FlameItemProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    candleFlameStore.registerFlame(id);
    return () => candleFlameStore.unregisterFlame(id);
  }, [id]);

  // Procedural burning flame animation loop as fallback / enhancement
  useEffect(() => {
    if (!isLit) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let time = Math.random() * 100;

    const render = () => {
      time += 0.12;
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Flickering offsets
      const flickerX = Math.sin(time * 2.5) * 1.5 + Math.cos(time * 4) * 0.8;
      const flickerH = Math.sin(time * 3) * 2;
      const cx = w / 2 + flickerX;
      const baseCy = h * 0.85;

      // 1. Outer ambient radial aura
      const auraGrad = ctx.createRadialGradient(cx, baseCy - 15, 2, cx, baseCy - 15, w * 0.45);
      auraGrad.addColorStop(0, "rgba(255, 170, 50, 0.45)");
      auraGrad.addColorStop(0.5, "rgba(255, 100, 20, 0.2)");
      auraGrad.addColorStop(1, "rgba(255, 80, 0, 0)");
      ctx.fillStyle = auraGrad;
      ctx.beginPath();
      ctx.arc(cx, baseCy - 15, w * 0.45, 0, Math.PI * 2);
      ctx.fill();

      // 2. Outer flame shape (Amber/Orange)
      ctx.beginPath();
      ctx.moveTo(cx, baseCy - 28 - flickerH); // Tip
      ctx.bezierCurveTo(cx + 8, baseCy - 18, cx + 11, baseCy - 4, cx, baseCy + 2); // Right belly
      ctx.bezierCurveTo(cx - 11, baseCy - 4, cx - 8, baseCy - 18, cx, baseCy - 28 - flickerH); // Left belly
      const outerGrad = ctx.createLinearGradient(cx, baseCy + 2, cx, baseCy - 28 - flickerH);
      outerGrad.addColorStop(0, "rgba(60, 100, 255, 0.7)"); // Blue flame base
      outerGrad.addColorStop(0.2, "rgba(255, 120, 20, 0.95)");
      outerGrad.addColorStop(0.7, "rgba(255, 200, 40, 0.95)");
      outerGrad.addColorStop(1, "rgba(255, 240, 160, 0.9)");
      ctx.fillStyle = outerGrad;
      ctx.fill();

      // 3. Inner intensely hot flame core (White/Pale Yellow)
      ctx.beginPath();
      ctx.moveTo(cx, baseCy - 18 - flickerH * 0.6);
      ctx.bezierCurveTo(cx + 4, baseCy - 10, cx + 5, baseCy - 2, cx, baseCy);
      ctx.bezierCurveTo(cx - 5, baseCy - 2, cx - 4, baseCy - 10, cx, baseCy - 18 - flickerH * 0.6);
      const innerGrad = ctx.createLinearGradient(cx, baseCy, cx, baseCy - 18);
      innerGrad.addColorStop(0, "rgba(255, 255, 255, 0.95)");
      innerGrad.addColorStop(0.6, "rgba(255, 245, 180, 0.95)");
      innerGrad.addColorStop(1, "rgba(255, 210, 80, 0.6)");
      ctx.fillStyle = innerGrad;
      ctx.fill();

      animId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animId);
  }, [isLit]);

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
        // First click: extinguishes flame. Second click: reignites flame!
        candleFlameStore.toggleFlame(id);
      }}
      className={className}
      style={{ width }}
      title={isLit ? "Click flame to extinguish" : "Click wick to reignite flame"}
    >
      <div
        className="w-full h-full relative cursor-pointer select-none transition-all duration-300"
        style={{
          opacity: isLit ? 1 : 0,
          transform: isLit ? "scale(1)" : "scale(0.3) translateY(10px)",
        }}
      >
        <RiveAnimation
          src="/sites/tarot-meetyourpsychic-com-85989e91/root-8a5edab2/rive/candle-flame.riv"
          stateMachines="State Machine 1"
          fallback={
            <canvas
              ref={canvasRef}
              width={70}
              height={70}
              id={id}
              className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,160,40,0.8)]"
            />
          }
        />
      </div>

      {/* Extinguished Smoke / Ember Wisp */}
      {!isLit && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-ping opacity-60 shadow-[0_0_6px_red]" />
        </div>
      )}
    </div>
  );
}
