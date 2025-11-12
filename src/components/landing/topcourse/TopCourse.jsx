
import React, { useEffect, useState } from "react";
import { TopCourseBody } from "./TopCourseBody";
import Button from "../../common/Button/Button";
import ButtonResponsive from "../../common/Button/ButtonResponsive";
import GetCoursesTopApi from "../../../core/services/api/GetTopCourses.api";

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
    <div className="lg:relative relative lg:right-[0] right-[70px] top-[380px] xl:top-[720px] lgg:top-[600px] lg:top-[720px]">
      <h2 className="hidden lg:block text-center  text-3xl font-bold max-w-7xl mx-auto mb-[60px]">
        دوره‌های برتر هفته
      </h2>
      <h2 className="lg:hidden  text-3xl font-bold relative left-[75px] top-[45px] text-center mb-8">
        دوره‌های برتر هفته
      </h2>
      
      <div className="mt-12 flex justify-center lgg:justify-start xl:w-[1460px] lg:gap-[30px] lgg:gap-[0] xl:gap-[30px] gap-[60px] lgg:relative lgg:left-[40px] lgg:w-[1200px]">
        {courses.map((item) => (
          <TopCourseBody
            key={item.id}
            courseName={item.title}
            teacherName={item.teacherName}
            coursePrice={item.cost}
            coding={item.statusName}
            imageAddress={item.imageAddress}
            level={item.levelName}
            bgcolor="bg-black"
          />
        ))}

        

        <div className="hidden lg:block lg:absolute lg:top-[300px] lg:left-[-40px] xl:left-[-40px] lgg:left-[-130px]">
          <Button />
        </div>
     
      </div>
    </div>
  );
};
export { TopCourse };
