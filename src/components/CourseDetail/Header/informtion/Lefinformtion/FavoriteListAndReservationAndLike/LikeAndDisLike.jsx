import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const LikeAndDisLike = () => {
  return (
    <div className="flex items-center md:gap-4 gap-1 ">
      <div
        className="sm:min-w-[56px] min-w-[48px] h-[48px] sm:h-[56px] cursor-pointer flex justify-center 
                                items-center 
                                border-2 rounded-full 
                                dark:text-white
                                "
      >
        <AiFillDislike size={25} />
      </div>
      <div
        className="sm:min-w-[56px] min-w-[48px] h-[48px] sm:h-[56px] cursor-pointer flex justify-center 
                                items-center rounded-full
                                bg-[#3772FF]
                                dark:text-white
                                "
      >
        <AiFillLike size={25} />
      </div>
    </div>
  );
};

export default LikeAndDisLike;
