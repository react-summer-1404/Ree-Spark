import React, { useEffect, useState } from "react";
import { TopCourseBody } from "./TopCourseBody";
import Button from "../../common/Button/Button";
import ButtonResponsive from "../../common/Button/ButtonResponsive";
import GetCoursesTopApi from "../../../core/services/api/GetTopCourses.api";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";

import toast from "react-hot-toast";


const TopCourse = () => {
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
    <div className=" relative right-8 lgg:right-8 xl:right-8 lg:right-[40px] top-[380px] xl:top-[520px] lgg:top-[520px] lg:top-[1100px]">
      <h2 className="hidden lg:block text-center lgg:mr-0 lg:mr-[150px]  text-3xl font-bold    mx-auto mb-[60px]">
        دوره‌های برتر هفته
      </h2>
      <h2 className="lg:hidden  text-3xl font-bold relative  left-[75px] top-[45px] text-center mb-8">
        دوره‌های برتر هفته
      </h2>

      <div className="mt-12 flex justify-center lgg:justify-start xl:w-[1460px] lg:gap-[30px] lgg:gap-[0] xl:gap-[30px] gap-[60px] lg:flex-wrap lg:w-[1000px] lg:relative  lgg:flex-nowrap lgg:relative lgg:left-[40px] lgg:w-[1200px]">
        {courses.map((item) => (
          <TopCourseBody
            key={item.id}
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

        <div className="hidden lg:block lg:absolute lgg:top-[300px] lg:top-[710px] lg:left-[-230px] xl:left-[-40px] lgg:left-[-130px]">
          <Button buttonAdders={"courses"}/>
        </div>
      </div>
    </div>
  );
};
export { TopCourse };
