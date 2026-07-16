/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import GetProfileInfoApi from "../../../core/services/api/User/GetProfileInfo.api";

const CircularRange = () => {
  const [value, setValue] = useState(0);

  const size = 150;
  const strokeWidth = 14;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;

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

  const motionValue = useMotionValue(0);
  const animatedValue = useSpring(motionValue, { stiffness: 80, damping: 20 });

  useEffect(() => {
    motionValue.set(value);
  }, [value, motionValue]);

  const strokeDashoffset = useTransform(
    animatedValue,
    (val) => circumference - (val / 100) * circumference
  );
  const knobX = useTransform(
    animatedValue,
    (val) => size / 2 + radius * Math.sin((val / 100) * 2 * Math.PI)
  );
  const knobY = useTransform(
    animatedValue,
    (val) => size / 2 - radius * Math.cos((val / 100) * 2 * Math.PI)
  );
  const textValue = useTransform(animatedValue, (val) => Math.round(val));

  const getStrokeColor = (val) => {
    if (val >= 90) return "#16a34a";
    if (val >= 80) return "#4ade80";
    if (val >= 70) return "#facc15";
    return "#fbbf24";
  };

  return (
    <div className="flex flex-col items-center justify-center mt-9 select-none">
      <svg width={size} height={size}>
        {/* دایره خاکستری */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* دایره رنگی */}
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={strokeWidth}
          fill="none"
          strokeLinecap="round"
          stroke={getStrokeColor(value)}
          strokeDasharray={circumference}
          style={{ strokeDashoffset }}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
        {/* knob روی مسیر */}
        <motion.circle
          r="8"
          fill={getStrokeColor(value)}
          style={{ cx: knobX, cy: knobY }}
        />
        {/* متن درصد وسط */}
        <motion.text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          className="text-2xl font-bold fill-gray-800 dark:fill-slate-200"
        >
          <motion.tspan>{textValue}</motion.tspan>%
        </motion.text>
      </svg>
    </div>
  );
};

export default CircularRange;
