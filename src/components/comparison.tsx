"use client";
import { useState } from "react";
export default function Comparison() {
  const [value, setValue] = useState(50);
  return (
    <div className="comparison">
      <div className="comparison-scene before-scene">
        <Room finished={false} />
      </div>
      <div
        className="comparison-scene after-scene"
        style={{ clipPath: `inset(0 ${100 - value}% 0 0)` }}
      >
        <Room finished />
      </div>
      <div className="comparison-line" style={{ left: `${value}%` }}>
        <span>↔</span>
      </div>
      <div className="comparison-labels">
        <span>Depois · conceito</span>
        <span>Antes · conceito</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
        aria-label="Comparar antes e depois, estudo conceitual"
      />
      <p>Estudo gráfico do mesmo ambiente · Não representa obra da Silvestre</p>
    </div>
  );
}
function Room({ finished }: { finished: boolean }) {
  return (
    <svg
      viewBox="0 0 1000 600"
      role="img"
      aria-label={
        finished
          ? "Ambiente conceitual com acabamento"
          : "Mesmo ambiente conceitual sem acabamento"
      }
    >
      <defs>
        <linearGradient id={finished ? "wall-f" : "wall-b"} x2="1" y2="1">
          <stop stopColor={finished ? "#ded6c9" : "#777775"} />
          <stop offset="1" stopColor={finished ? "#f5f0e8" : "#a3a19b"} />
        </linearGradient>
      </defs>
      <rect width="1000" height="600" fill={finished ? "#b99875" : "#7b7a76"} />
      <path
        d="M0 0H1000L830 130H190Z"
        fill={finished ? "#f8f6ed" : "#aaa9a2"}
      />
      <path
        d="M190 130H830V450H190Z"
        fill={`url(#${finished ? "wall-f" : "wall-b"})`}
      />
      <path
        d="M0 0L190 130V450L0 600Z"
        fill={finished ? "#cfc4b5" : "#7c7d79"}
      />
      <path
        d="M1000 0L830 130V450L1000 600Z"
        fill={finished ? "#eee9df" : "#979791"}
      />
      <path
        d="M0 600L190 450H830L1000 600"
        fill={finished ? "#b99a76" : "#72736e"}
      />
      <rect x="235" y="170" width="170" height="220" fill="#324740" />
      <path d="M240 175H400V385H240Z" fill="#a2b9ba" />
      <path d="M320 175V385M240 280H400" stroke="#323b36" strokeWidth="6" />
      {finished ? (
        <>
          <rect
            x="490"
            y="340"
            width="280"
            height="105"
            rx="8"
            fill="#948674"
          />
          <rect
            x="510"
            y="310"
            width="110"
            height="95"
            rx="12"
            fill="#a69886"
          />
          <rect
            x="630"
            y="310"
            width="120"
            height="95"
            rx="12"
            fill="#aa9b89"
          />
          <ellipse cx="520" cy="490" rx="170" ry="35" fill="#d6cabb" />
          <ellipse cx="535" cy="465" rx="74" ry="20" fill="#493e32" />
          <path d="M495 465V505M570 465V505" stroke="#493e32" strokeWidth="7" />
          <rect x="535" y="190" width="145" height="90" fill="#a98962" />
          <path d="M700 0V135" stroke="#332d26" strokeWidth="3" />
          <path d="M650 160L700 120L750 160Z" fill="#4d453a" />
          <path d="M145 405V500" stroke="#6c7953" strokeWidth="7" />
          <ellipse cx="145" cy="390" rx="40" ry="65" fill="#5d6b44" />
          <path d="M120 460H170L163 510H128Z" fill="#b98456" />
        </>
      ) : (
        <>
          <path
            d="M190 240H830M190 350H830M400 130V450M610 130V450"
            stroke="#8a8983"
            strokeWidth="2"
          />
          <rect x="490" y="390" width="120" height="60" fill="#9b8c72" />
          <path d="M700 0V170" stroke="#3d3d37" strokeWidth="3" />
          <circle cx="700" cy="177" r="9" fill="#ddd3a8" />
        </>
      )}
    </svg>
  );
}
