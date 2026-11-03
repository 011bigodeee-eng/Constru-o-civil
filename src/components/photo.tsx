"use client";
import Image from "next/image";
import { useState } from "react";
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
  return (
    <div
      className={`photo ${className}`}
      style={
        {
          "--focus": asset.focalDesktop,
          "--focus-mobile": asset.focalMobile,
        } as React.CSSProperties
      }
    >
      <Image
        src={fallback ? asset.path.replace(/\.webp$/, ".jpg") : asset.path}
        alt={alt}
        fill
        sizes={
          priority
            ? "(max-width: 900px) 1800px, 100vw"
            : "(max-width: 650px) 100vw, 50vw"
        }
        priority={priority}
        quality={85}
        onError={() => setFallback(true)}
      />
    </div>
  );
}
