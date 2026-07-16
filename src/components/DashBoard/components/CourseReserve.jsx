/* eslint-disable no-unused-vars */
import React from "react";
import { CgClose } from "react-icons/cg";
import { motion } from "framer-motion";
const CourseReserve = ({title , MyReservePublisher ,AcceptReserve , AcceptBg , ReserveImg}) => {
  return (
    <motion.div
      dir="rtl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}>
      <div className="h-16 flex relative">
        <div className="w-[83px] h-[52px] absolute right-0 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg">
          <img src={ReserveImg} className="w-full h-full mx-auto rounded-xl" />
        </div>
        <div className="h-[23px] absolute right-[120px] top-3 font-bold text-base">
          {title}
        </div>
        <div className="h-[20px] absolute top-3 right-[250px] font-semibold text-sm">
          {MyReservePublisher}
        </div>
        <div className={`h-6 absolute top-3 right-[420px] ${AcceptBg} py-[2px] px-2 rounded-[32px] text-sm text-white`}>
          {AcceptReserve}
        </div>
        <button className="size-5 absolute top-3 right-[560px]">
          <CgClose size={20} color="red" />
        </button>
      </div>
    </motion.div>
  );
};

export { CourseReserve };
