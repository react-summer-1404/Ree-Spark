import React, { useState, useRef, useEffect } from "react";
import GetProfileInfoApi from "../../../core/services/api/User/GetProfileInfo.api";


const CircularRange = () => {
  const [value, setValue] = useState(0); // درصد تکمیل پروفایل
  const circleRef = useRef(null);

  const size = 150;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

  // دریافت داده از API
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await GetProfileInfoApi();
        setValue(data.profileCompletionPercentage || 0);
      } catch (err) {
        console.error("Error fetching profile:", err);
      }
    };
    fetchProfile();
  }, []);

  // تابع برای انتخاب رنگ بر اساس درصد
  const getStrokeColor = (val) => {
    if (val >= 90) return "#16a34a"; // سبز پر رنگ
    if (val >= 80) return "#4ade80"; // سبز کمرنگ
    if (val >= 70) return "#facc15"; // زرد
    return "#fbbf24"; // زیر 70 هم زرد کم رنگ
  };

  const offset = circumference - (value / 100) * circumference;
  const angle = (value / 100) * 360;
  const knobX = size / 2 + radius * Math.sin((angle * Math.PI) / 180);
  const knobY = size / 2 - radius * Math.cos((angle * Math.PI) / 180);

  return (
    <div className="flex flex-col items-center justify-center mt-9 select-none">
      <svg ref={circleRef} width={size} height={size}>
        {/* دایره خاکستری */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}  
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* دایره رنگی بر اساس درصد */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={getStrokeColor(value)}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* دایره کوچک روی مسیر */}
        <circle cx={knobX} cy={knobY} r="8" fill={getStrokeColor(value)} />
        {/* متن درصد وسط دایره */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-2xl font-bold fill-gray-800 dark:fill-slate-200"
        >
          {value}%
        </text>
      </svg>
    </div>
  );
};

export default CircularRange;


