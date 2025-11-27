import React, { useState } from "react";
import { Command } from "./components/Command";
import { motion, AnimatePresence } from "framer-motion";
import CommandMore from "./components/CommandMore";

const CommedPanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="mt-2 ml-5 w-[90%] text-sm flex justify-between">
        <button className="text-[#3772FF]" onClick={() => setIsOpen(true)}>
          مشاهده بیشتر
        </button>
        <h6>نظرات شما</h6>
      </div>

      <div className="flex items-center justify-center my-2 w-[90%] mx-auto">
        <div className="flex-1 border-t border-gray-300"></div>
        <span className="px-4 text-gray-600 dark:text-gray-300 text-sm">
          دوره‌ها و بلاگ‌ها
        </span>
        <div className="flex-1 border-t border-gray-300"></div>
      </div>

      <div className="mx-auto w-[90%] h-[390px]">
        <Command />
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-lg p-6 w-[90%] max-w-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <button
                className="absolute top-2 right-2 text-red-500 hover:text-gray-800 dark:hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
              <CommandMore/>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { CommedPanel };
