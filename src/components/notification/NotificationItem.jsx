/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import moment from "moment-jalaali";

const NotificationItem = ({ message, insertDate, seen, onSee }) => {
  return (
    <motion.div
    dir="rtl"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`
        group
        w-full p-4 rounded-xl shadow-sm flex items-start justify-between border relative
        ${seen ? "bg-white border-gray-200" : "bg-blue-50 border-blue-300"}
      `}
    >
      <div className="flex flex-col gap-1 w-full">
        <p
          className={`text-sm ${
            seen ? "text-gray-700" : "text-blue-700 font-semibold"
          }`}
        >
          {message}
        </p>
        <span className="text-xs text-gray-500">
          {moment(insertDate).format("jYYYY/jMM/jDD - HH:mm")}
        </span>
      </div>

      {/* دایره وضعیت */}
      <div
        className={`w-3 h-3 rounded-full mt-1 ${
          seen ? "bg-gray-300" : "bg-blue-500"
        }`}
      ></div>

      {/* دکمه خواندن → فقط در هاور نمایش داده می‌شود */}
      {!seen && (
        <button
          className="
            absolute left-4 top-14 -translate-y-1/2
            bg-blue-600 text-white text-xs px-3 py-1 rounded-lg
            opacity-0 group-hover:opacity-100 transition-opacity duration-200
          "
          onClick={onSee}
        >
          خواندن
        </button>
      )}
    </motion.div>
  );
};

export default NotificationItem;
