import React, { useState, useEffect } from "react";
import { FiBook } from "react-icons/fi";
import toast from "react-hot-toast";
import { AddResevre } from "../../../../../../core/services/api/CourseDetail.api/Reservetion/AddReserve.api";

const Reservation = ({ courseData }) => {
  const [loading, setLoading] = useState(false);
  const [isReserved, setIsReserved] = useState(false);

  const token = localStorage.getItem("token");


  useEffect(() => {
      if (courseData?.isReserved) {
          setIsReserved(true);  
      }
  }, [courseData])
  


  const handleClickMess = async () => {
    if (!token) {
      toast.error("ابتدا لاگین کنید ");
      return;
    }

    if (isReserved) {
        toast.error("این دوره قبلا رزرو شده")
    }

    try {
      setLoading(true);
      await AddResevre(courseData.courseId, token);

      toast.success("رزرو دوره با موفقیت انجام شد");
      setIsReserved(true); 
    } catch (error) {
      if (
        error?.response?.status === 409 ||
        error?.response?.data?.message?.includes("رزرو کردین  قبلا")
      ) {
        toast.error("این دوره قبلاً رزرو شده است");
        setIsReserved(true);
      } else {
        toast.error("خطا در رزرو دوره");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClickMess}
      disabled={loading || isReserved}
      className={`w-[160px] h-[56px] md:flex hidden justify-center rounded-full
        text-white md:w-[194px] items-center gap-3
        ${
          isReserved
            ? "bg-gray-500 cursor-not-allowed"
            : loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-[#3772FF]"
        }`}
    >
      {isReserved
        ? "رزرو شده"
        : loading
        ? "در حال رزرو..."
        : (
          <>
            <span className="text-[15px] xl:text-[19px] lg:text-[17px]">
              رزرو دوره
            </span>
            <FiBook size={20} />
          </>
        )}
    </button>
  );
};

export default Reservation;
