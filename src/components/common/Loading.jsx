// Loading.jsx
import React from "react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-16 h-16">
        <div className="absolute inset-1 border-2 border-t-transparent border-blue-500 rounded-full animate-spin"></div>
        <div className="absolute inset-3 border-2 border-b-transparent border-blue-500 rounded-full animate-spin [animation-direction:reverse] [animation-duration:1.5s]"></div>
        <div className="absolute inset-5 border-2 border-b-transparent border-blue-500 rounded-full animate-spin [animation-duration:2s]"></div>
      </div>
      <span className="dark:text-blue-200">LOADING ...</span>
    </div>
  );
};

export default Loading;
