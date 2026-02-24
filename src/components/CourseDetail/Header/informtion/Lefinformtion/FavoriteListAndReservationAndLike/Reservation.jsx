import { Fullscreen } from "lucide-react";
import React, { useRef, useState } from "react";
import { FiBook } from "react-icons/fi";
import ModalRes from "./ModalRes";
import toast from "react-hot-toast";
import { AddResevre } from "../../../../../../core/services/api/CourseDetail.api/Reservetion/AddReserve.api";

const Reservation = ({ courseData }) => {
  const [loading, setLoading] = useState(false);

  const handleClickMess = async () => {
    try {
      setLoading(true);
      await AddResevre(courseData.courseId);
      toast.success("رزرو دوره با موفقیت انجام شد");
    } catch (error) {
      toast.error("خطا در رزرو دوره");
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleClickMess}
      disabled={loading}
      className={`w-[160px] h-[56px] md:flex hidden justify-center rounded-full
        text-white md:w-[194px] items-center gap-3
        ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#3772FF]"}`}
    >
      {loading ? (
        "در حال رزرو..."
      ) : (
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