import React, { useState, useEffect } from "react";
import "../slider/Slider.css";

const Slider = ({ minValue, maxValue, setMinValue, setMaxValue }) => {
  const min = 0;
  const max = 10000;

  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= maxValue) {
      setMinValue(value);
    } else {
      setMinValue(maxValue);
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= minValue) {
      setMaxValue(value);
    } else {
      setMaxValue(minValue);
    }
  };

  return (
    <>


      <div className="lg:w-[258px] h-[87px] w-[345px] relative top-[60px] left-[20px]">
        <div className="flex justify-between relative text-sm text-gray-700 font-medium top-[10px] w-[172px] dark:text-white">
          <span className="absolute bottom-[4px] whitespace-nowrap">
            تا {maxValue}
          </span>
          <span className="absolute left-[110px] bottom-[4px] whitespace-nowrap">
            از {minValue}
          </span>
        </div>

        <div className="relative">
          <input
            step="100"
            type="range"
            min={min}
            max={max}
            value={maxValue}
            onChange={handleMaxChange}
            className="range-thumb range-thumb-right z-10"
          />

          <input
            step="100"
            type="range"
            min={min}
            max={max}
            value={minValue}
            onChange={handleMinChange}
            className="range-thumb range-thumb-left z-10 "
          />

          <div
            className="h-2 bg-[#707070] rounded opacity-[10%]  mt-8"
            style={{
              left: `${(minValue / max) * 100}%`,
              width: `${((maxValue - minValue) / max) * 100}%`,
              top: "30%",
              transform: "translateY(-70%)",
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
