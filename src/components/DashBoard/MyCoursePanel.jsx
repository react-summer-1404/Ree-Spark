import React, { useEffect, useState } from "react";
import { MyCourses } from "./components/MyCourses";
import { Link } from "react-router-dom";
import GetMyCourse from "../../core/services/api/User/GetMyCourse.api";
import Loading from "../common/Loading";
import { FaAngleLeft } from "react-icons/fa6";
import moment from "moment-jalaali";
const MyCoursePanel = () => {
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
        const list =
          data?.result ||
          data?.items ||
          data?.data ||
          data.listOfMyCourses ||
          [];

        setCourses(list);
      }

      setLoading(false);
    };

    load();
  }, []);
  return (
    <div>
      <h6 className="h-5 absolute top-[7px] left-[738px] text-sm font-semibold">
        دوره من
      </h6>
      <div className="w-[106px] h-5 absolute top-2 left-4 flex justify-between">
        <Link
          to={"/dashboard/myCourse"}
          className="h-5 text-[#3772FF] text-sm flex gap-1 text-right leading-4 cursor-pointer"
        >
          <FaAngleLeft className="text-blue-500 mt-[2px]" /> مشاهده بیشتر
        </Link>
      </div>
      <div className="w-[769px] h-11 absolute top-10 left-4 bg-[#F1F1F1] rounded-2xl">
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[747px]">
          #
        </h6>
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[629px]">
          نام
        </h6>
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[480px]">
          مدرس
        </h6>
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[265px]">
          تاریخ برگزاری
        </h6>
        <h6 className="text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[130px]">
          سطح
        </h6>
      </div>
      <div className=" w-[95%] h-[130px] mx-auto mt-[85px] overflow-y-hidden ">
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
            <MyCourses
              key={course.id || index}
              MyCourseName={course?.courseTitle || "بدون عنوان"}
              MyCoursePublisher={course?.fullName || "نامشخص"}
              MyCourseLevel={course.course.courseLvlId || "نامشخص"}
              MyCourseBg={"bg-[#F0DB4F]"}
              ImageAddress={
                course?.tumbImageAddress || "/public/AuthImage/react.png"
              }
              startDate={moment(course.course.startTime).format(
                "jYYYY jMMMM jDD"
              )}
            />
          ))}
      </div>
    </div>
  );
};

export default MyCoursePanel;
