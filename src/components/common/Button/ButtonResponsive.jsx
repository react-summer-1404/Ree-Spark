import React from "react";
import { Link } from "react-router-dom";

const ButtonResponsive = ({ buttonAdders }) => {
  return (
    <div className="flex justify-center mt-6 lg:hidden">
      <Link
        to={`/${buttonAdders}`}
        className="w-[125px] h-[47px] rounded-[40px] bg-[#2F2F2F]
        pt-2 px-4 dark:bg-slate-400 dark:text-black flex items-center justify-center"
      >
        <span className="text-base font-medium text-gray-50 whitespace-nowrap relative bottom-1">
          مشاهده بیشتر
        </span>
      </Link>
    </div>
  );
};


export default ButtonResponsive;