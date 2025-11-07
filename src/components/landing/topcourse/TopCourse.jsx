import React, { useEffect, useState } from "react";
import { TopCourseBody } from "./TopCourseBody";
import Button from "../../common/Button";
import ButtonResponsive from "../../common/ButtonResponsive";
import getTopCoursesApi from "../../../core/services/api/getTopCourses.api";
import GetCoursesTopApi from "../../../core/services/api/getTopCourses.api";

const TopCourse = () => {
  const [courses, setCourses] = useState([]);
  const getTopCourses = async (Count = 4) => {
    try {
      const res = await GetCoursesTopApi({
        Count: Count,
      });
      console.log("🔥 API Response:", res);
      setCourses(res || []);
      if (res.totalCount) {
        setTotalPages(Math.ceil(res.totalCount / rowsPerPage));
      }
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت اخبار");
    }
  };

  useEffect(() => {
    getTopCourses();
  }, []);
  
  return (
    <div className="relative top-[500px]">
      <h2 className="hidden lg:block text-center text-3xl font-bold font-sans max-w-7xl mx-auto mb-8">
        دوره‌های برتر هفته
      </h2>
      <h2 className="lg:hidden  text-3xl font-bold font-sans text-center mb-8">
        دوره‌های برتر هفته
      </h2>
      
      <div className="mt-12 flex justify-center gap-4 ">
        {courses.map((item) => (
          <TopCourseBody
            key={item.id}
            courseName={item.title}
            teacherName={item.teacherName}
            coursePrice={item.cost}
            coding={item.statusName}
            imageAddress={item.imageAddress}
            level={item.levelName}
            bgcolor="bg-blue-400"
          />
        ))}

        

        <div className="hidden lg:block lg:absolute lg:top-[450px] lg:left-[1px]">
          <Button />
        </div>
        <div className="lg:hidden">
          <ButtonResponsive />
        </div>
      </div>
    </div>
  );
};
export { TopCourse };
