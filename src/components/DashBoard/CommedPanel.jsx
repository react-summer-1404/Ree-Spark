import React, { useState } from "react";
import { Command } from "./components/Command";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import CommandMore from "./components/CommandMore";
import { FaAngleLeft } from "react-icons/fa6";
const CommedPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="mt-2 ml-5 w-[90%] text-sm flex justify-between">
        <button className="text-[#3772FF] gap-1 flex" onClick={() => setIsOpen(true)}>
       <FaAngleLeft className="text-blue-500 mt-1" />   مشاهده بیشتر  
        </button>
        <h6 className="font-semibold">نظرات شما</h6>
      </div>

      <div className="flex items-center justify-center my-2 w-[90%] mx-auto">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-600 dark:text-gray-300 text-sm">
          دوره‌ها و بلاگ‌ها
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <div className="mx-auto flex-col w-[90%] h-[390px]">
        <Command />
        <Command />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 w-[1000px] rounded-lg p-6 relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-3 w-[100px] h-[40px] border-red-600 border-2 rounded-full text-red-600 dark:text-white"
              >
                <div>بستن</div>
                <div className="mt-1">✕</div>
              </button>
              <CommandMore />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { CommedPanel };
