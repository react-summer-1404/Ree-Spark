import React from "react";
import { FiCopy } from "react-icons/fi";

function CopyLink() {
  return (
    <div className="sm:w-[216px] h-[39px] w-full flex justify-end">
      <button
        className="w-[216px] h-[39px] flex justify-center items-center
                                  rounded-[48px] border-2 border-[#3772FF] gap-2 "
      >
        <div className="text-[#3772FF] ">کپی کردن لینک صفحه</div>
        <FiCopy className="text-[#3772FF] " />
      </button>
    </div>
  );
}

export default CopyLink;
