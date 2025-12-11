import { Calendar } from "lucide-react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AccessCode from "./AccessCode";
import moment from "moment-jalaali";
import { updateProfileInfo } from "../../core/services/api/User/UpdateProfileInfo.api";
import toast from "react-hot-toast";
const fName = localStorage.getItem("fName");
const lName = localStorage.getItem("lName");
const gmail = localStorage.getItem("gmail");
const birthDay = localStorage.getItem("birthDay");
const phoneNumber = localStorage.getItem("phoneNumber");
const Information = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FORM SUBMITTED!");
    const form = new FormData(e.target);
    let payload = {};

    for (let [key, value] of form.entries()) {
      if (value !== "" && value !== null && value !== undefined) {
        if (key === "ReceiveMessageEvent") {
          payload[key] = true;
        } else if (key === "Gender") {
          payload[key] = value === "male";
        } else {
          payload[key] = value;
        }
      }
    }

    console.log("FINAL PAYLOAD:", payload);

    try {
      const res = await updateProfileInfo(payload);
      console.log("UPDATED:", res);

      toast.success(
        res?.data?.message || res?.message || "اطلاعات با موفقیت ذخیره شد"
      );
    } catch (err) {
      console.log("API ERROR:", err);

      toast.error(
        err?.response?.data?.message ||
          err?.message ||
          "خطا در ذخیره‌سازی اطلاعات"
      );
    }
  };

  return (
    <div dir="rtl" className="max-w-xl mx-auto ">
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        {/* نام و نام خانوادگی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2 text-right">نام</label>
            <input
              name="FName"
              type="text"
              placeholder="نام خود را وارد کنید"
              defaultValue={fName || ""}
              className="w-full rounded-full border dark:bg-slate-300 text-black border-[#DCDCDC] py-2 px-4 text-right focus:outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-right">
              نام خانوادگی
            </label>
            <input
              name="LName"
              type="text"
              defaultValue={lName || ""}
              placeholder="نام خانوادگی خود را وارد کنید"
              className="w-full rounded-full border text-black dark:bg-slate-300 border-[#DCDCDC] py-2 px-4 text-right focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* درباره من */}
        <div>
          <label className="block font-semibold mb-2 text-right">
            درباره من
          </label>
          <textarea
            name="UserAbout"
            rows="4"
            placeholder="متن درباره خود را وارد کنید"
            className="w-full rounded-2xl border text-black dark:bg-slate-300 border-[#DCDCDC] py-2 px-4 text-right resize-none focus:outline-none focus:border-blue-400"
          ></textarea>
        </div>

        {/* شماره همراه و کد ملی */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-semibold mb-2 text-right">
              شماره همراه
            </label>
            <input
              name="PhoneNumber"
              defaultValue={phoneNumber}
              type="text"
              placeholder="شماره همراه خود را وارد کنید"
              className="w-full rounded-full border text-black dark:bg-slate-300 border-[#DCDCDC] py-2 px-4 text-right focus:outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2 text-right">
              کد ملی
            </label>
            <input
              name="NationalCode"
              type="text"
              placeholder="کد ملی خود را وارد کنید"
              className="w-full rounded-full border text-black dark:bg-slate-300 border-[#DCDCDC] py-2 px-4 text-right focus:outline-none focus:border-blue-400"
            />
          </div>
        </div>

        {/* تاریخ تولد */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
          <div>
            <label className="block font-semibold mb-2 text-right">
              تاریخ تولد
            </label>
            <div className="relative">
              <input
                name="BirthDay"
                type="text"
                defaultValue={
                  birthDay ? moment(birthDay).format("jYYYY/jMM/jDD") : ""
                }
                placeholder="تاریخ تولد خود را وارد کنید"
                className="w-full rounded-full border text-black dark:bg-slate-300 border-[#DCDCDC] py-2 px-4 text-right focus:outline-none focus:border-blue-400"
              />
              <Calendar
                className="absolute left-4 top-2.5 text-gray-400"
                size={20}
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold mb-2 text-right">جنسیت</label>
            <div className="flex items-center gap-3">
              <label className="flex items-center gap-1">
                <input type="radio" name="Gender" value="male" />
                <span>مرد</span>
              </label>

              <label className="flex items-center gap-1">
                <input type="radio" name="Gender" value="female" />
                <span>زن</span>
              </label>
            </div>
          </div>
        </div>

        {/* ایمیل */}
        <div>
          <label className="block font-semibold mb-2 text-right">ایمیل</label>
          <input
            name="Gmail"
            defaultValue={gmail}
            type="text"
            placeholder="ایمیل خود را وارد کنید"
            className="w-full rounded-full border text-black dark:bg-slate-300 border-[#DCDCDC] py-2 px-4 text-right focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* آدرس سکونت */}
        <div>
          <label className="block font-semibold mb-2 text-right">
            آدرس سکونت
          </label>
          <input
            name="HomeAdderess"
            type="text"
            placeholder="آدرس محل سکونت خود را وارد کنید"
            className="w-full rounded-full border text-black dark:bg-slate-300 border-[#DCDCDC] py-2 px-4 text-right focus:outline-none focus:border-blue-400"
          />
        </div>

        {/* دکمه */}
        <div className="flex mt-6 justify-between">
          <button
            type="submit"
            className="bg-[#3772FF] text-white rounded-full py-3 px-4 hover:bg-blue-700 transition"
          >
            اعمال تغییرات
          </button>

          <div
            className="bg-[#3772FF] text-white rounded-full py-3 px-4 hover:bg-blue-700 transition"
            onClick={() => setIsOpen(true)}
          >
            تایید کد دو مرحله ای
          </div>
        </div>
      </form>
      <AnimatePresence> 
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 flex rounded-lg p-6 w-[90%] max-w-lg relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-800 hover:text-red-500 dark:text-slate-400 dark:hover:text-red-500 font-bold"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>

              <AccessCode />
            </motion.div>
          </motion.div>           
        )}
      </AnimatePresence>
    </div>
  );
};

export default Information;
