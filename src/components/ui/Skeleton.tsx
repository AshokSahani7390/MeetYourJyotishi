"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white/5 border border-white/5 animate-shimmer relative overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

export function CardSkeleton() {
  return (
    <div className="flex flex-col items-center p-4 rounded-3xl bg-white/5 border border-white/10 w-full max-w-xs space-y-3">
      <Skeleton className="w-full aspect-[2/3] rounded-2xl" />
      <Skeleton className="h-5 w-3/4 rounded-md" />
      <Skeleton className="h-3.5 w-1/2 rounded-md" />
      <div className="flex gap-2 w-full pt-2">
        <Skeleton className="h-8 flex-1 rounded-full" />
        <Skeleton className="h-8 flex-1 rounded-full" />
      </div>
    </div>
  );
}

export function AdvisorSkeleton() {
  return (
    <div className="flex items-center gap-4 p-5 rounded-3xl bg-white/5 border border-white/10 w-full">
      <Skeleton className="size-16 rounded-full shrink-0" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-1/3 rounded-md" />
        <Skeleton className="h-3.5 w-1/2 rounded-md" />
        <Skeleton className="h-3 w-4/5 rounded-md" />
      </div>
      <Skeleton className="h-10 w-28 rounded-full shrink-0" />
    </div>
  );
}

export default Skeleton;
