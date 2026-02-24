import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FiArchive } from "react-icons/fi";
import AddCourseFavoriteapi from "../../../../../../core/services/api/CourseDetail.api/AddFavorite.api";
import { getItem } from "../../../../../../core/services/storage/storage.api"; 

const AddFavorite = ({ courseId, isUserFavorite }) => {
  const [favorite, setFavorite] = useState(() => {
    const saved = localStorage.getItem(`favorite_${courseId}`);
    return saved === "true" ? true : isUserFavorite;
  });

  // useEffect(() => {
  //   // هر بار تغییر کرد، در localStorage ذخیره کن
  //   localStorage.setItem(`favorite_${courseId}`, favorite ? "true" : "false");
  // }, [favorite, courseId]);

  const handleClick = async () => {
    try {
      const token = getItem("token"); 
      if (!token) {
        toast.error("برای اضافه کردن به لیست مورد علاقه باید وارد حساب شوید");
        return;
      }

      if (favorite) {
        toast.error("دوره قبلا به لیست موردعلاقه اضافه شده");
        return;
      }

      const res = await AddCourseFavoriteapi(courseId);
      setFavorite(true);
      toast.success(res.data?.message || "عملیات با موفقیت انجام شد");
    } catch (err) {
      toast.error(err.response?.data?.message || "خطا در ارتباط با سرور");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="sm:w-[280px] w-[200px] h-[56px] bg-[#2F2F2F] flex justify-center items-center
                gap-3 text-white rounded-full text-[15px] xl:text-[19px] lg:text-[16px] md:w-[332px]"
    >
      <div className="cursor-pointer">
        {favorite ? "قبلا اضافه شده" : "اضافه به لیست موردعلاقه"}
      </div>
      <div className="w-[18px] h-[18px] sm:flex hidden xl:w-[24px] xl:h-[24px]">
        <FiArchive size={20} />
      </div>
    </button>
  );
};

export default AddFavorite;
