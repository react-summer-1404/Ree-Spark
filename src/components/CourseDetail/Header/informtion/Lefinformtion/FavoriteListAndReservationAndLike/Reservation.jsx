import { Fullscreen } from "lucide-react";
import React from "react";
import { FiBook } from "react-icons/fi";

const Reservation = () => {
  return (
    <button
      className="w-[160px] h-[56px] hidden justify-center bg-[#3772FF] rounded-full
                        text-white md:w-[194px] md:flex
                        items-center gap-3 "
    >
      <div className="cursor-pointer text-[15px] xl:text-[19px] lg:text-[17px] ">
        رزرو دوره
      </div>
      <div className="w-[19px] h-[19px] xl:w-[24px] xl:h-[24px] ">
        <FiBook size={Fullscreen} />
      </div>
    </button>
  );
};

export default Reservation;
