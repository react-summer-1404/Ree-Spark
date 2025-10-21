import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center">
      {/* انیمیشن دایره‌ای پس‌زمینه */}
      {/* <div className="absolute w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute w-40 h-40 bg-purple-500/20 rounded-full blur-2xl animate-ping" /> */}

      {/* عدد 404 با افکت */}
      <h1 className="text-[120px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 drop-shadow-lg select-none">
        404
      </h1>

      {/* متن توضیحی */}
      <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-6">
        صفحه‌ای که دنبالش بودی پیدا نشد 😕
      </p>

      {/* دکمه برگشت */}
      <Link
        to="/"
        className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300"
      >
        بازگشت به صفحه اصلی
      </Link>

      {/* انیمیشن پایین */}
      <div className="absolute bottom-10 flex gap-2">
        <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce [animation-delay:0ms]" />
        <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce [animation-delay:150ms]" />
        <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
};

export default NotFound;
