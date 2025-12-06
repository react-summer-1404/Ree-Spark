// Loading.jsx
import React from "react";

const Loading = ({ size = 80, label = "در حال بارگذاری…", className = "" }) => {
  const s = Number(size);
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        role="status"
        aria-live="polite"
        className="flex flex-col items-center gap-3"
      >
        <svg
          width={s}
          height={s}
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="animate-spin"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="gBlueComp" x1="0" x2="1">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>

          <circle
            cx="25"
            cy="25"
            r="20"
            stroke="rgba(255,255,255,0.06)"
            strokeWidth="6"
          />
          <path
            d="M25 5 A20 20 0 0 1 45 25"
            stroke="url(#gBlueComp)"
            strokeWidth="6"
            strokeLinecap="round"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              from="0 25 25"
              to="360 25 25"
              dur="1s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        {label && (
          <span className="text-sm text-black font-medium">{label}</span>
        )}
      </div>
    </div>
  );
};

export default Loading;
