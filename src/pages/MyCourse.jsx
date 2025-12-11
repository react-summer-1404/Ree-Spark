import React, { useEffect, useState } from "react";
import { SearchPanelBox } from "../components/MyCourse/SearchPanelBox";
import { CourseStatus } from "../components/MyCourse/CourseStatus";
import { LucideCalendarRange } from "lucide-react";
import GetMyCourse from "../core/services/api/User/GetMyCourse.api";
import Loading from "../components/common/Loading";

const MyCourse = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      const data = await GetMyCourse({
        PageNumber: 1,
        RowsOfPage: 10,
        SortingCol: "id",
        SortType: "DESC",
        Query: "",
        NewsCategoryId: null,
      });

      if (!data) {
        setCourses([]);
      } else {
        const list = data?.result || data?.items || data?.data || data || [];

        setCourses(list);
      }

      setLoading(false);
    };

    load();
  }, []);
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
      <div className="bg-[#F6F6F6] shadow-lg dark:bg-gray-700 w-[95%] h-[710px] absolute top-[170px] left-7 rounded-[24px]">
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
        {loading && (
          <div className="w-full h-full flex items-center justify-center">
            <Loading />
          </div>
        )}

        {!loading && courses.length === 0 && (
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="text-blue-500 dark:text-white text-xl font-bold">
              دوره ای وجود ندارد
            </h2>
          </div>
        )}

        {!loading &&
          courses.length > 0 &&
          courses.map((course, index) => (
            <CourseStatus
              key={course.id || index}
              MyCourseName={course?.title || "بدون عنوان"}
              MyCoursePublisher={course?.teacherName || "نامشخص"}
              MyCourseLevel={course?.level || "نامشخص"}
              MyCourseBg={"bg-[#F0DB4F]"} 
            />
          ))}
      </div>
    </div>
  );
};

export { MyCourse };
