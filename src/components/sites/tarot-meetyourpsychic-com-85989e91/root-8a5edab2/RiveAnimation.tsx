"use client";

import React, { useSyncExternalStore } from "react";
import { useRive, Layout, Fit, Alignment } from "@rive-app/react-canvas";

interface RiveAnimationProps {
  src: string;
  artboard?: string;
  animation?: string;
  stateMachines?: string | string[];
  autoplay?: boolean;
  className?: string;
  fallback?: React.ReactNode;
}

const emptySubscribe = () => () => {};

export function RiveAnimation({
  src,
  artboard,
  animation,
  stateMachines,
  autoplay = true,
  className = "w-full h-full",
  fallback = null,
}: RiveAnimationProps) {
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const { RiveComponent } = useRive({
    src,
    artboard,
    animations: animation ? [animation] : undefined,
    stateMachines: stateMachines,
    autoplay,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });

  if (!isClient || !RiveComponent) {
    return <>{fallback}</>;
  }

  return <RiveComponent className={className} />;
}

export default RiveAnimation;
