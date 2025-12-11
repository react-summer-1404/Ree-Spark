import React, { useEffect, useState } from "react";
import { Command } from "./components/Command";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import CommandMore from "./components/CommandMore";
import { FaAngleLeft } from "react-icons/fa6";
import { getMyCoursesComments } from "../../core/services/api/User/GetMyCoursesComments.api";
import Loading from "../common/Loading";
const CommedPanel = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getMyCoursesComments();

      if (res.success) {
        setData(res.data);
      } else {
        setError(res.error);
      }

      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      <div className="mt-2 ml-5 w-[90%] text-sm flex justify-between">
        <button
          className="text-[#3772FF] gap-1 flex"
          onClick={() => setIsOpen(true)}
        >
          <FaAngleLeft className="text-blue-500 mt-1" /> مشاهده بیشتر
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

      <div className="mx-auto flex-col w-[90%] h-[390px] overflow-hidden">
        {loading && (
          <div className="text-center text-sm text-gray-500 mt-4">
            <Loading />
          </div>
        )}

        {error && (
          <div className="text-center text-sm text-red-500 mt-4">{error}</div>
        )}

        {!loading && !error && data.length === 0 && (
          <div className="text-center text-sm text-gray-500 mt-4">
            نظری ثبت نشده است
          </div>
        )}

        {!loading && !error && data.length > 0 && <Command comments={data} />}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            onClick={() => setIsOpen(false)}
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
              <div className=" w-[98%] flex justify-between h-9 mx-auto">
                <button
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-3 w-[100px] h-[40px] border-black hover:border-red-600 border-2 rounded-full text-black hover:text-red-600 dark:text-white"
                >
                  <div>بستن</div>
                  <div className="mt-1">✕</div>
                </button>

                <header className="w-[170px] h-10 bg-[#F1F1F1] flex justify-between rounded-[20px]">
                  <button className="w-[83px] h-[40px] rounded-[20px] text-[#707070]">
                    بلاگ‌ها
                  </button>
                  <button className="w-[83px] h-[40px] rounded-[20px] bg-[#3772FF] text-white">
                    دوره‌ها
                  </button>
                </header>

                <h2 className="font-bold text-[24px]">نظرات شما</h2>
              </div>
              <CommandMore />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export { CommedPanel };
