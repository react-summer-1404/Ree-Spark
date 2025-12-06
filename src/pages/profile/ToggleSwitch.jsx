import React from "react";

const ToggleSwitch = ({ value, onChange }) => {
  return (
    <button
      onClick={() => onChange(!value)}
      className={`
        relative w-14 h-7 rounded-full mx-auto transition-colors duration-300
        ${value ? "bg-blue-500" : "bg-gray-400"}
      `}
    >
      <span
        className={`
          absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow-md
          transform transition-transform duration-300
          ${value ? "translate-x-7" : "translate-x-0"}
        `}
      ></span>
    </button>
  );
};
export default ToggleSwitch;