import React from "react";

const CourseStatus = () => {
  return (
    <div>
      <div className="w-[1046px] h-11 bg-[#F1F1F1] rounded-2xl absolute top-4 left-4">
        <h5 className="absolute top-3 left-[1024px] text-[#707070] text-sm font-medium">
          #
        </h5>
        <h5 className="absolute top-3 left-[906px] text-[#707070] text-sm font-medium">
          نام
        </h5>
        <h5 className="absolute top-3 left-[685px] text-[#707070] text-sm font-medium">
          مدرس
        </h5>
        <h5 className="absolute top-3 left-[470px] text-[#707070] text-sm font-medium">
          تاریخ برگزاری
        </h5>
        <h5 className="absolute top-3 left-[305px] text-[#707070] text-sm font-medium">
          تاریخ اتمام
        </h5>
        <h5 className="absolute top-3 left-[159px] text-[#707070] text-sm font-medium">
          سطح
        </h5>
      </div>

      <div className="w-[83px] h-[52px] rounded-xl bg-[#FF6C6C] absolute top-[72px] left-[971px]">
        <img src="./images/figma.png" className="size-[33px] mx-auto mt-2" />
      </div>
      <h3 className="h-[23px] absolute top-[86px] left-[869px] font-bold">
        دوره فیگما
      </h3>
      <h3 className="h-[20px] absolute top-[86px] left-[620px] font-semibold text-sm">
        محمدحسین خلیل‌پور
      </h3>
      <h3 className="h-[20px] absolute top-[86px] left-[447px] font-semibold text-sm">
        29 اردیبهشت 1403
      </h3>
      <h3 className="h-[20px] absolute top-[86px] left-[274px] font-semibold text-sm">
        29 اردیبهشت 1403
      </h3>
      <div className="h-6 absolute top-[85px] left-[144px] bg-[#FF37F5] rounded-[32px] py-[2px] px-2 text-white text-sm">
        پیشرفته
      </div>
    </div>
  );
};

export { CourseStatus };
