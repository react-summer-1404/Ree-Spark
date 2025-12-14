import React, { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import toast from "react-hot-toast";
import CourseLikeapi from "../../../../../../core/services/api/CourseDetail.api/LikeAndDisLike/CourseLike.api";
import CourseDisLikeapi from "../../../../../../core/services/api/CourseDetail.api/LikeAndDisLike/CourseDisLike.api";
import { getItem } from "../../../../../../core/services/storage/storage.api"; 

const LikeAndDisLike = ({ courseId }) => {
  const [active, setActive] = useState(""); // فقط در state نگه می‌داریم

  const handleLike = async () => {
    const token = getItem("token");
    if (!token) {
      toast.error("برای ثبت لایک باید وارد حساب شوید");
      return;
    }

    if (active === "like") {
      toast("قبلاً نظرتان ثبت شده");
      return;
    }

    try {
      await CourseLikeapi(courseId);
      setActive("like"); // فقط state تغییر می‌کنه
      toast.success("دوره لایک شد");
    } catch (err) {
      toast.error("خطا در ثبت لایک");
    }
  };

  const handleDislike = async () => {
    const token = getItem("token");
    if (!token) {
      toast.error("برای ثبت دیس‌لایک باید وارد حساب شوید");
      return;
    }

    if (active === "dislike") {
      toast("قبلاً نظرتان ثبت شده");
      return;
    }

    try {
      await CourseDisLikeapi(courseId);
      setActive("dislike"); // فقط state تغییر می‌کنه
      toast.success("دوره دیس‌لایک شد");
    } catch (err) {
      toast.error("خطا در ثبت دیس‌لایک");
    }
  };

  const getButtonClass = (type) => {
    return `sm:min-w-[56px] min-w-[48px] h-[48px] sm:h-[56px]
            cursor-pointer flex justify-center items-center rounded-full border-2
            ${active === type ? "bg-[#3772FF]" : "bg-transparent"}`;
  };

  return (
    <div className="flex items-center md:gap-4 gap-1 ">
      <div onClick={handleDislike} className={getButtonClass("dislike")}>
        <AiFillDislike size={25} className="dark:text-white" />
      </div>
      <div onClick={handleLike} className={getButtonClass("like")}>
        <AiFillLike size={25} className="dark:text-white" />
      </div>
    </div>
  );
};

export default LikeAndDisLike;
