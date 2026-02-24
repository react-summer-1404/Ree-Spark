import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import GetCoursesTopApi from "../../../../core/services/api/GetTopCourses.api";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
// import { TopCourseBody } from "../../../landing/topcourse/TopCourseBody";
import TopCorusesStyle from "./TopCorusesStyle";

const CourseRelated = () => {
  const [courses, setCourses] = useState([]);
  const getTopCourses = async (Count = 4) => {
    try {
      const res = await GetCoursesTopApi({
        Count: Count,
      });
      console.log("🔥 API Response:", res);
      setCourses(res || []);
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت اخبار");
    }
  };

  useEffect(() => {
    getTopCourses();
  }, []);
  return (
    <div className="flex w-[100%] justify-around flex-wrap gap-7">
      <div className="text-[#707070] w-[100%] text-right text-[20px] font-bold ">
        دوره های مرتبط
      </div>

      {courses.slice(0, 3).map((item) => (
        <TopCorusesStyle
          key={item.courseId}
          courseId={item.courseId}
          courseName={item.title}
          teacherName={item.teacherName}
          coursePrice={digitsEnToFa(addCommas(item.cost))}
          coursePriceDub={digitsEnToFa(addCommas(item.cost))}
          coding={item.statusName}
          imageAddress={item.imageAddress}
          level={item.levelName}
          bgcolor="bg-black"
        />
      ))}
    </div>
  );
};

export default CourseRelated;
