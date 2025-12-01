import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { FiCopy } from "react-icons/fi";

function CopyLink() {
  const handleCopyButton = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      toast.success("لینک صفحه کپی شد");
    } catch (err) {
      toast.error("خطا در کپی کردن لینک");
    }
  };
  return (
    <div className="sm:w-[216px] h-[39px] w-full flex justify-end">
      <button
        onClick={handleCopyButton}
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
