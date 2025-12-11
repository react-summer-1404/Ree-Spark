/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const BlogStatus = ({
  MyCourseName,
  MyCoursePublisher,
  MyCourseLevel,
  ImageAddress,

}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div dir="rtl" className="h-16 flex flex-col relative">
      <div
        className={`w-[83px] h-[52px] rounded-xl  bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg absolute  left-[971px]`}
      >
        <img src={ImageAddress} className="w-[100%] h-[100%] rounded-xl" />
      </div>
      <h3
        dir="rtl"
        className="h-[23px] w-[150px] text-right absolute mt-3 left-[800px] font-bold"
      >
        {MyCourseName}
      </h3>
      <h3 className="h-[20px] absolute mt-3 left-[660px] font-semibold text-sm">
        {MyCoursePublisher}
      </h3>
      <h3 className="h-[20px] absolute mt-3 left-[447px] font-semibold text-sm">
        29 اردیبهشت 1403
      </h3>
      <h3 className="h-[20px] absolute mt-3 left-[274px] font-semibold text-sm">
        29 اردیبهشت 1403
      </h3>
      <div className="h-6 absolute mt-3 left-[154px] bg-[#FF37F5] rounded-[32px] py-[2px] px-2 text-white text-sm">
        {MyCourseLevel}
      </div>
      <div
        onClick={() => setShowModal(true)}
        className="absolute mt-3 left-[54px] text-red-600 font-bold cursor-pointer"
      >
        ✕
      </div>
      {/* modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex backdrop-blur-sm items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
             آیا میخوای بلاگ رو حذف کنی؟
              </h2>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  
                  className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all"
                >
                  بله
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-300 transition-all"
                >
                  خیر
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { BlogStatus };
