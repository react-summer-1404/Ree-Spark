import React, { useState, useRef } from "react";

const CircularRange = () => {
  const [value, setValue] = useState(40);
  const circleRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  const size = 150; // اندازه دایره
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  const handleMove = (e) => {
    if (!isDragging || !circleRef.current) return;

    const rect = circleRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    const angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
    const normalizedAngle = (angle + 360) % 360;
    const newValue = Math.round((normalizedAngle / 360) * 100);
    setValue(newValue);
  };

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  React.useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  const offset = circumference - (value / 100) * circumference;
  const angle = (value / 100) * 360;
  const knobX =
    size / 2 + radius * Math.sin((angle * Math.PI) / 180);
  const knobY =
    size / 2 - radius * Math.cos((angle * Math.PI) / 180);

  return (
    <div className="flex flex-col  items-center justify-center mt-9  select-none">
      <svg
        ref={circleRef}
        width={size}
        height={size}
        onMouseDown={handleMouseDown}
        className="cursor-pointer"
      >
        {/* دایره خاکستری */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#e5e7eb"
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* دایره زرد */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#facc15"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* دایره کوچک روی مسیر */}
        <circle cx={knobX} cy={knobY} r="8" fill="#facc15" />
        {/* متن درصد وسط دایره */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-2xl font-bold fill-gray-800"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
};

export default CircularRange;
