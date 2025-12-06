import React from "react";
import { SearchPanelBox } from "../components/MyCourse/SearchPanelBox";
import { CourseStatus } from "../components/MyCourse/CourseStatus";
import { LucideCalendarRange } from "lucide-react";

const MyCourse = () => {
  return (
    <div className="relative">
      <h1 className="h-9 absolute top-[16px] left-[1015px] text-2xl font-bold ">
        دوره من
      </h1>

      <div className="w-[258px] h-20 absolute top-[72px] right-6 flex gap-2">
        <SearchPanelBox />
      </div>

      <div className="w-[258px] h-20 absolute top-[72px] left-[556px] flex gap-2">
        <div className="w-[258px] h-[80px] gap-2 relative ">
          <div className="w-[157px] h-[24px] gap-2  float-right flex ">
            <h3 className="w-[125px] h-[23px]  text-[15px] font-medium leading-5 text-right ">
              تاریخ برگزاری - اتمام
            </h3>
            <LucideCalendarRange />
          </div>
          <div className="w-[258px] h-[48px] rounded-[16px] bg-[#F1F1F1] absolute top-8 text-black font-medium text-[14px] p-4 text-right">
            29 اردیبهشت 1403 - 5 خرداد 1403
          </div>
        </div>
      </div>

      {/* course status */}
      <div className="bg-[#F6F6F6] dark:bg-gray-700 w-[95%] h-[710px] absolute top-[170px] left-7 rounded-[24px]">
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
        <CourseStatus
          MyCourseName={"فیگما دوره"}
          MyCoursePublisher={"محمد حسین خلیلی"}
          MyCourseLevel={"hard"}
          MyCourseBg={"bg-[#F0DB4F]"}
        />
        
      </div>
    </div>
  );
};

export { MyCourse };
