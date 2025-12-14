import { Fullscreen } from "lucide-react";
import React, { useRef, useState } from "react";
import { FiBook } from "react-icons/fi";
import ModalRes from "./ModalRes";
import toast from "react-hot-toast";

const Reservation = () => {

  // const OpenModal = () => setisOpenModalRes(true);
  // const CloseModal = () => setisOpenModalRes(false);
  const handleClickMess = () => {
    toast.success("ثبت رزرو");
  }

  return (
    <div>
      <button
      onClick={handleClickMess}
        className="w-[160px] h-[56px] md:flex hidden justify-center bg-[#3772FF] rounded-full
                        text-white md:w-[194px] 
                        items-center gap-3 "
      >
        <div className="cursor-pointer text-[15px] xl:text-[19px] lg:text-[17px] ">
          رزرو دوره
        </div>
        <div className="w-[19px] h-[19px] xl:w-[24px] xl:h-[24px] ">
          <FiBook size={Fullscreen} />
        </div>
      </button>
      {/* {isOpenModalRes && (
        <ModalRes CloseModal={CloseModal} />
      )} */}
    </div>
  );
};

export default Reservation;
