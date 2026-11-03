"use client";
import Image from "next/image";
import { useLayoutEffect, useRef, useState } from "react";
import { imageById } from "@/data/images";
export default function Photo({
  id,
  alt,
  className = "",
  priority = false,
}: {
  id: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const [fallback, setFallback] = useState(false);
  const asset = imageById[id];
  const container = useRef<HTMLDivElement>(null);
  const [displayWidth, setDisplayWidth] = useState<number | null>(null);
  useLayoutEffect(() => {
    const element = container.current;
    if (!element) return;
    const measure = () => {
      const { width, height } = element.getBoundingClientRect();
      if (!width || !height) return;
      // A landscape source covering a tall card needs more pixels than the card width.
      const coverWidth = Math.max(width, height * asset.ratio);
      const dpr = window.devicePixelRatio || 1;
      setDisplayWidth(Math.ceil(Math.min(coverWidth, asset.width / dpr)));
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    window.addEventListener("resize", measure, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [asset.width, asset.ratio]);
  return (
    <div
      ref={container}
      data-image-id={id}
      className={`photo ${className}`}
      style={
        {
          "--focus": asset.focalDesktop,
          "--focus-mobile": asset.focalMobile,
        } as React.CSSProperties
      }
    >
      <Image
        src={fallback ? asset.fallbackPath : asset.path}
        alt={asset.alt || alt}
        fill
        sizes={`${displayWidth ?? asset.width}px`}
        priority={priority}
        quality={90}
        onError={() => setFallback(true)}
      />
    </div>
  );
}
