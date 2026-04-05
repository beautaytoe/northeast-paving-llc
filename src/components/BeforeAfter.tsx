"use client";

import { useState } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  beforeAlt: string;
  afterAlt: string;
}

export default function BeforeAfter({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterProps) {
  const [position, setPosition] = useState(50);

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg select-none bg-gray-200">
      {/* After image (full background) */}
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Before image (clipped) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ width: `${10000 / position}%`, maxWidth: "none" }}
        />
      </div>

      {/* Slider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${position}%` }}
      >
        {/* Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center cursor-ew-resize">
          <div className="flex gap-0.5">
            <div className="w-0.5 h-4 bg-gray-400 rounded" />
            <div className="w-0.5 h-4 bg-gray-400 rounded" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-charcoal/80 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide z-10">
        Before
      </div>
      <div className="absolute top-3 right-3 bg-blue/90 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wide z-10">
        After
      </div>

      {/* Slider input */}
      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-20"
        aria-label="Before and after comparison slider"
      />
    </div>
  );
}
