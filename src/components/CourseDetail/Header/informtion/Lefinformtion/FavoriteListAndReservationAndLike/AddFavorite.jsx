import { Fullscreen } from "lucide-react";
import React from "react";
import toast from "react-hot-toast";
import { FiArchive } from "react-icons/fi";

const AddFavorite = () => {
  const handleClick = () => {
   try {
      toast.success("دوره به لیست علاقه مندی ها اضافه شد")
    } catch (err) {
      toast.error("عملیت انجام نشد")
   }
  }
  return (
    <button
      onClick={handleClick}
      className="sm:w-[280px] w-[200px] h-[56px] bg-[#2F2F2F] flex justify-center items-center
                            gap-3
                            text-white
                            rounded-full text-[15px] xl:text-[19px] lg:text-[16px] 
                              md:w-[332px]
                            "
    >
      <div className="cursor-pointer s ">اضافه به لیست موردعلاقه</div>
      <div className="w-[18px] h-[18px] sm:flex hidden xl:w-[24px] xl:h-[24px]">
        <FiArchive size={Fullscreen} />
      </div>
    </button>
  );
};

export default AddFavorite;
