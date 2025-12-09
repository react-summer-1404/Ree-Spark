import React from "react";
import { Link } from "react-router-dom";

const TeacherCard = ({ name, userId, avatar }) => {
  return (
    <div className="w-[300px] dark:bg-slate-700 dark:text-white bg-[#fcfcfc] shadow-lg rounded-2xl p-9 flex flex-col items-center gap-4 transition-all duration-300 hover:shadow-xl">
      {/* Avatar */}
      <img
        src={avatar}
        alt={name}
        className="w-24 h-24 rounded-full object-cover border-2 border-gray-200"
      />

      {/* User Info */}
      <div className="text-center">
        <h2 className="text-xl font-semibold dark:text-white text-gray-800">
          {name}
        </h2>
        <p className="text-sm text-gray-500 mt-1 dark:text-white">
          User ID: {userId}
        </p>
      </div>

      {/* Details Button */}
      <Link
        to={`/TeacherDetail/${userId}`}
        className="w-full py-2 flex justify-center mt-2 bg-blue-600 shadow-lg text-white font-medium rounded-xl transition-all duration-300 hover:bg-blue-700 active:scale-95"
      >
        مشاهده جزئیات
      </Link>
    </div>
  );
};

export { TeacherCard };
