import React from "react";
import { Link } from "react-router-dom";

const ButtonResponsive = () => {
  return (
    <div>
      <Link
         to={""}
       className="w-[125px] h-[39px] lg:hidden  rounded-[40px] bg-[#2F2F2F]  mt-[90px] mb-10 pt-2 pr-4 pb-2 pl-4 absolute left-[820px]"
      >
        <button className="w-[95px] h-[23px]  text-base font-sans font-medium text-gray-50">
          مشاهده بیشتر
        </button>
      </Link>
    </div>
  );
};

export default ButtonResponsive;