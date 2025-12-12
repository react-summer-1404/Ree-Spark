import React, { useEffect, useState } from "react";
import { CourseReserve } from "./components/CourseReserve";
import { Link } from "react-router-dom";
import Loading from "../common/Loading";
import MyCourseRes from "../../core/services/api/User/MyReserve.api";
import { FaAngleLeft } from "react-icons/fa6";
import moment from "moment-jalaali";
const MyReserve = () => {
  const [courseReserve, setCourseReserve] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const data = await MyCourseRes();
      setCourseReserve(data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h5 className="h-5 absolute top-2 left-[603px] font-semibold text-sm">
        رزرو من
      </h5>

      <div className="w-[630px] h-11 absolute top-10 left-4 rounded-2xl bg-[#F1F1F1]">
        <h6 className="absolute top-3 left-[607px] text-[#707070] text-sm font-semibold">
          #
        </h6>
        <h6 className="absolute top-3 left-[490px] text-[#707070] text-sm font-semibold">
          نام
        </h6>
        <h6 className="absolute top-3 left-[341px] text-[#707070] text-sm font-semibold">
          مدرس
        </h6>
        <h6 className="absolute top-3 left-[151px] text-[#707070] text-sm font-semibold">
          وضعیت
        </h6>
      </div>

      <div className="w-[95%] mx-auto h-[320px] mt-24 ">
        {loading && (
          <div className="w-full h-full flex items-center justify-center">
            <Loading />
          </div>
        )}
        {!loading && courseReserve.length === 0 && (
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="text-blue-500 dark:text-white text-xl font-bold">
              رزروی وجود ندارد
            </h2>
          </div>
        )}
        {!loading && courseReserve.length > 0 && (
          <>
            {courseReserve.map((course) => (
              <div className="w-[95%] mx-auto">
                <CourseReserve
                  key={course.id}
                  title={course.courseName}
                  MyReservePublisher={course.teacher}
                  startDate={moment(course.startDate).format("jYYYY jMMMM jDD")}
                  endDate={moment(course.endDate).format("jYYYY jMMMM jDD")}
                  AcceptReserve={course.accept ? "تایید شده" : "تایید نشده"}
                  ReserveImg={course.image}
                  AcceptBg={course.accept ? "bg-[#3772FF]" : "bg-red-500"}
                />
              </div>
            ))}
          </>
        )}
      </div>

      <div className="w-[106px] h-5 absolute top-2 left-4 flex justify-between">
        <Link
          to={"/dashboard/myReserve"}
          className="h-5 text-[#3772FF] text-sm flex gap-1 text-right leading-4 cursor-pointer"
        >
          <FaAngleLeft className="text-blue-500 mt-[2px]" /> مشاهده بیشتر
        </Link>
      </div>
    </div>
  );
};

export { MyReserve };
