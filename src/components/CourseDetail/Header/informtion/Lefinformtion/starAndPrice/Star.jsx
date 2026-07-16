import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaRegStar, FaStar } from "react-icons/fa";
import CourseRatingApi from "../../../../../../core/services/api/CourseDetail.api/CourseRating.api";
import { getItem } from "../../../../../../core/services/storage/storage.api";

const CourseStar = ({ id, int = 0 }) => {
  const [rating, setRating] = useState(int);
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = async (value) => {
    if (!id) {
      toast.error("شناسه دوره نامعتبر است");
      return;
    }

    const token = getItem("token");
    if (!token) {
      toast.error("برای ثبت امتیاز باید وارد حساب شوید");
      return;
    }

    setRating(value);

    try {
      await CourseRatingApi(id, Number(value));
      toast.success("امتیاز شما ثبت شد");
    } catch (err) {
      const message = err?.response?.data?.message;
      if (message?.includes("قبلا") || message?.includes("ثبت")) {
        toast.error("شما قبلاً امتیاز داده‌اید ");
      } else {
        setRating(int); // برگردوندن به مقدار اولیه
        toast.error(message || "خطا در ثبت امتیاز");
      }
    }
  };

  const current = hoverRating || rating || 0;

  return (
    <div className="flex justify-between gap-3 items-center dark:text-white">
      <div className="flex gap-1 mr-4">
        <div>نظرات شما</div>
        <div>(100+)</div>
      </div>

      <div className="h-[28px] flex text-yellow-400">
        {[1, 2, 3, 4, 5].map((item) => (
          <span
            key={item}
            className="cursor-pointer"
            onClick={() => handleClick(item)}
            onMouseEnter={() => setHoverRating(item)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {item <= current ? <FaStar size={25} /> : <FaRegStar size={25} />}
          </span>
        ))}
      </div>

      <div>({rating ?? "—"})</div>
    </div>
  );
};

export default CourseStar;
