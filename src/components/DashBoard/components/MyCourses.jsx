import React from "react";

/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
const MyCourses = ({
  MyCourseName,
  MyCoursePublisher,
  MyCourseLevel,
  ImageAddress,
  startDate,
}) => {
  return (
    <>
      <motion.div
        dir="rtl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="h-16 flex relative"
      >
        {" "}
        <div className="w-[83px] h-[52px] absolute mt-3 right-0 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg rounded-xl bg-[#FF6C6C]">
          <img src={ImageAddress} className="w-full h-full mx-auto rounded-xl" />
        </div>
        <h3 className="absolute mt-6 left-[572px] font-bold">{MyCourseName}</h3>
        <h3 className="absolute mt-6 left-[390px] font-semibold text-sm">
          {MyCoursePublisher}
        </h3>
        <h3 className="absolute mt-6 left-[220px] font-semibold text-sm">
          {startDate}
        </h3>
        <div className="h-6 absolute mt-6 left-[100px] bg-[#FF37F5] rounded-[32px] py-[2px] px-2 text-sm text-white">
          {MyCourseLevel}
        </div>
      </motion.div>
    </>
  );
};

export { MyCourses };
