import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/image/AuthImage/logo.png";
import sepehrTitle from "../../../assets/image/AuthImage/SepehrTitle.png";
import { IoIosLogOut } from "react-icons/io";
import { LuBookText } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router-dom";
import { removeItem } from "../../../core/services/storage/storage.api";
import { motion, AnimatePresence } from "framer-motion";
const RightSidePanel = () => {
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeItem("token");
    setShowModal(false);
    navigate("/auth/register");
  };
  return (
    <div>
      <img src={sepehrTitle} className="absolute top-7 right-[70px]" />
      <img src={logo} className="w-[42px] h-10 mt-1 absolute top-6 right-6 " />
      {/* dashbord */}
      <div className="absolute top-[119px] right-[35px] flex gap-2">
        {" "}
        <NavLink
          to={"panel"}
          className={({ isActive }) =>
            `${
              isActive && "border-b border-[#fcfcfc] font-medium"
            } dark:text-[#FCFCFC] text-black text-[18px] h-[26px] leading-3 cursor-pointer`
          }
        >
          داشبرد
        </NavLink>
        <img src="src/assets/images/activity-01.png" className="size-6  " />
      </div>

      {/* my course */}
      <div className="absolute top-[175px] right-[35px] flex gap-2">
        {" "}
        <NavLink
          to={"/MyCourse"}
          className={({ isActive }) =>
            `${
              isActive && "border-b border-[#fcfcfc] font-medium"
            } dark:text-[#FCFCFC] text-black text-[18px] h-[26px] leading-3`
          }
        >
          دوره من
        </NavLink>
        <LuBookText size={20} color="white" />
      </div>

      {/* my reserve */}
      <div className="absolute top-[231px] right-[35px] flex gap-2">
        {" "}
        <NavLink
          to={"/myReserve"}
          className={({ isActive }) =>
            `${
              isActive && "border-b border-[#fcfcfc] font-medium"
            } dark:text-[#FCFCFC] text-black text-[18px] h-[26px] leading-3`
          }
        >
          رزرو من
        </NavLink>
        <img src="src/assets/images/book-02.png" className="size-6 " />
      </div>

      {/* favorite course */}
      <div className="absolute top-[287px] right-[35px] flex gap-2">
        {" "}
        <NavLink
          to={"/favoriteCourse"}
          className={({ isActive }) =>
            `${
              isActive && "border-b border-[#fcfcfc] font-medium"
            } dark:text-[#FCFCFC] text-black text-[17px] h-[26px] leading-3`
          }
        >
          دوره های موردعلاقه
        </NavLink>
        <img src="src/assets/images/books-02.png" className="size-6 " />
      </div>

      {/* favorite blog */}
      <div className="absolute top-[343px] right-[35px] flex gap-2">
        {" "}
        <NavLink
          to={"/favoriteBlog"}
          className={({ isActive }) =>
            `${
              isActive && "border-b border-[#fcfcfc] font-medium"
            } dark:text-[#FCFCFC] text-black text-[17px] h-[26px] leading-3`
          }
        >
          بلاگ های موردعلاقه
        </NavLink>
        <img src="src/assets/images/library.png" className="size-6 " />
      </div>

      {/* profile */}
      <div className="absolute top-[399px] right-[35px] flex gap-2">
        {" "}
        <NavLink
          to={"/profile"}
          className={({ isActive }) =>
            `${
              isActive && "border-b border-[#fcfcfc] font-medium"
            } dark:text-[#FCFCFC] text-black text-[17px] h-[26px]  leading-3`
          }
        >
          پروفایل
        </NavLink>
        <CgProfile size={20} color="white" />
      </div>

      {/* pay money */}
      <div className="absolute top-[455px] right-[35px] flex gap-2">
        {" "}
        <div className="dark:text-[#FCFCFC] text-black text-[18px] h-[26px]  leading-3">
          پرداخت ها
        </div>
        <img
          src="src/assets/images/money-send-02-stroke-rounded1.png"
          className="size-6 "
        />
      </div>
      {/*  */}
      <div
        onClick={() => setShowModal(true)}
        className="text-center cursor-pointer w-7 xl:w-[258px] h-[58px] absolute bottom-12 right-2 rounded-[40px] border border-[#FF5353] py-4 pr-4 pl-[72px] flex gap-1"
      >
        <h4 className=" text-[#FF5353]">خروج از حساب کاربری</h4>
        <IoIosLogOut color="red" size={25} />
      </div>
      {/* modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-6 w-80 text-center"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            >
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                آیا مطمئنی می‌خوای خارج شی؟
              </h2>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={handleLogout}
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

export { RightSidePanel };
