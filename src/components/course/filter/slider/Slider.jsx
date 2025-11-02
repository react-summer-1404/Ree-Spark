import React, { useState } from "react";
import "../slider/Slider.css"; 

const Slider = () => {
  const [minValue, setMinValue] = useState(100000);
  const [maxValue, setMaxValue] = useState(1000000);

  const min = 0;
  const max = 3000000;

  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), maxValue - 1);
    setMinValue(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), minValue + 1);
    setMaxValue(value);
  };

  return (
    <div className="lg:w-[258px] h-[87px] w-[345px] ">
      <div className="flex justify-between text-sm text-gray-700 font-medium mt-7  w-[172px] dark:text-white">
        <span>
          تا <span className="">{maxValue}</span>
        </span>
        <span>
        از <span className="">{minValue}</span>
        </span>
      </div>

      <div className="relative ">
        <input
          step="100000"
          type="range"
          min={min}
          max={max}
          value={minValue}
          onChange={handleMinChange}
          className="range-thumb range-thumb-left z-10"
        />
        
        <input
          step="100000"
          type="range"
          min={min}
          max={max}
          value={maxValue}
          onChange={handleMaxChange}
          className="range-thumb range-thumb-right appearance-none z-10"
        />

        <div
          className=" h-2 bg-[#707070] rounded appearance-none opacity-[10%] w-full mt-8 dark:bg-white"
          style={{
            left: `${(minValue / max) * 100}%`,
            top: "30%",
            transform: "translateY(-70%)",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
