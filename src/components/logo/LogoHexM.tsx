import React from "react";
import styles from "./logoHexM.module.scss";

interface LogoHexMProps {
  size?: number;
  className?: string;
}

export function LogoHexM({ size = 42, className = "" }: LogoHexMProps) {
  return (
    <span
      className={`${styles.logoHexM} logo-hex-m ${className}`.trim()}
      style={{ width: size, height: size }}
      aria-label="Matías Stefanutti Logo"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        fill="none"
        role="img"
      >
        {/* Hexágono Original Abierto en la Base */}
        <path
          className="svg-hex-shell"
          d="M 22 50.1 L 10 43 L 10 19 L 32 6 L 54 19 L 54 43 L 42 50.1"
          stroke="#E07A5F"
          strokeWidth="3.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 3 Líneas Verticales (Barra del medio más corta y centrada en altura) */}
        <line
          className="svg-bar-outer svg-bar-left"
          x1="22.5"
          y1="18"
          x2="22.5"
          y2="41"
          stroke="#F2CC8F"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        <line
          className={`${styles.svgBarMid} svg-bar-mid`}
          x1="32"
          y1="23.5"
          x2="32"
          y2="35.5"
          stroke="#F2CC8F"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        <line
          className="svg-bar-outer svg-bar-right"
          x1="41.5"
          y1="18"
          x2="41.5"
          y2="41"
          stroke="#F2CC8F"
          strokeWidth="3.8"
          strokeLinecap="round"
        />
        {/* Propulsión Activa (Afterburner) */}
        <g className="svg-thrust-group">
          <line
            className={`${styles.svgThrustPrimary} svg-thrust-primary`}
            x1="32"
            y1="41"
            x2="32"
            y2="53"
            stroke="#E07A5F"
            strokeWidth="3.8"
            strokeLinecap="round"
          />
          <line
            className={`${styles.svgThrustSecondary} svg-thrust-secondary`}
            x1="32"
            y1="43"
            x2="32"
            y2="55.5"
            stroke="#F2CC8F"
            strokeWidth="2.1"
            strokeLinecap="round"
            opacity="0.85"
          />
        </g>
      </svg>
    </span>
  );
}

export default LogoHexM;
