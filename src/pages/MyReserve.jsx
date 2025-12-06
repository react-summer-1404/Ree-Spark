import React from "react";
import { SearchPanelBox } from "../components/MyCourse/SearchPanelBox";
import { ReserveStatus } from "../components/MyReserve/ReserveStatus";

const MyReserve = () => {
  return (
    <div>
      <h1 className="h-9 absolute top-[96px] left-[1025px] text-2xl font-bold ">
        رزرو من
      </h1>

      <div className="w-[258px] h-20 absolute top-[142px] left-[848px] flex gap-2">
        <SearchPanelBox />
      </div>

      <div className="w-[258px] h-20 absolute top-[142px] left-[566px] flex gap-2">
        <div className="w-[258px] h-[80px] gap-2 relative ">
          <div className="w-[157px] h-[24px] gap-2  float-right flex ">
            <h3 className="w-[125px] h-[23px] font-sans text-[15px] font-medium leading-5 text-right ">
              تاریخ برگزاری - اتمام
            </h3>
            <img
              src="src/assets/images/calendar-02-stroke-rounded 2.png"
              className="w-[24px] h-[24px]  "
            />
          </div>
          <div className="w-[258px] h-[48px] rounded-[16px] bg-[#F1F1F1] absolute top-8 text-black font-medium text-[14px] p-4 text-right">
            29 اردیبهشت 1403 - 5 خرداد 1403
          </div>
        </div>
      </div>

      {/* course status */}
      <div className="bg-[#F6F6F6] dark:bg-gray-700 w-[1078px] h-[710px] absolute top-[236px] left-[24px] rounded-[24px]">
        <div className="w-[1046px] h-11 bg-[#F1F1F1] rounded-2xl absolute top-5 left-4">
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
          <h5 className="absolute top-3 left-[144px] text-[#707070] text-sm font-medium">
            وضعیت
          </h5>
        </div>
        <ReserveStatus
          title="دوره فیگما"
          AcceptReserve="تایید شده"
          ReserveImg="figma"
          reserveBg="bg-[#FF6C6C]"
          AcceptBg="bg-[#3772FF]"
          MyReservePublisher={"محمد حسین خلیل پور"}
        />
        <ReserveStatus
          title="دوره فیگما"
          AcceptReserve="تایید نشده"
          ReserveImg="figma"
          reserveBg="bg-[#FF6C6C]"
          AcceptBg="bg-[#FF5353]"
          MyReservePublisher={"محمد حسین بحرالعلوم"}
        />
      </div>
    </div>
  );
};

export { MyReserve };
