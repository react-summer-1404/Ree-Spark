import React from "react";
import { Link } from "react-router-dom";

const ButtonResponsive = () => {
  return (
    <div>
      <Link to={"/course"}
        className="lg:w-[125px] hidden lg:block lg:h-[39px] lg:gap-2 lg:rounded-[40px] lg:bg-[#2F2F2F] 
        lg:text-white lg:mt-[90px] lg:mb-10 lg:pt-2 lg:pr-4 lg:pb-2 lg:pl-4 lg:absolute lg:left-[600px] "
      >
        <button className="lg:w-[95px] lg:h-[23px]  lg:text-base lg:font-sans lg:font-medium lgtext-gray-50">
          مشاهده بیشتر
        </button>
      </Link>
    </div>
  );
};

export default ButtonResponsive;