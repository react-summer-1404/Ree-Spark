import { Fullscreen } from "lucide-react";
import React from "react";
import { FiArchive } from "react-icons/fi";

const AddFavorite = () => {
  return (
    <button
      className="w-[280px] h-[56px] bg-[#2F2F2F] flex justify-center items-center
                            gap-3
                            text-white
                            rounded-full text-[13px] xl:text-[19px] lg:text-[16px] 
                              md:w-[332px]
                            "
    >
      <div className="cursor-pointer s ">اضافه به لیست موردعلاقه</div>
      <div className="w-[18px] h-[18px] xl:w-[24px] xl:h-[24px]">
        <FiArchive size={Fullscreen} />
      </div>
    </button>
  );
};

export default AddFavorite;
