import React, { useEffect, useState } from "react";
import { TopCourseBody } from "./TopCourseBody";
import Button from "../../common/Button/Button";
import GetCoursesTopApi from "../../../core/services/api/GetTopCourses.api";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";

import toast from "react-hot-toast";
import { MobileTopCourse } from "../lanBody/Respansive/MobileTopCourse";


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
    <>
    <div className="block relative top-[400px] right-[75px] ">
          <MobileTopCourse/>
    </div>
     <div className="lg:block lgg:block xl:block hidden">
    <div className=" relative right-[70px] lgg:right-[-75px] xl:right-8 lg:right-[-210px] top-[380px] xl:top-[620px] lgg:top-[560px] lg:top-[1240px]">
      <h2 className=" lg:block text-center lg:mr-[400px] lgg:mr-[120px]  text-3xl font-bold  xl:mr-[-61px]  mb-[40px]">
        دوره‌های برتر هفته
      </h2>
      <h2 className="lg:hidden  text-3xl font-bold relative  left-[75px] top-[45px] text-center mb-8">
        دوره‌های برتر هفته
      </h2>
    
      <div className="mt-12   flex justify-center lgg:justify-start xl:w-[1460px] lg:gap-[30px] lgg:gap-[0] xl:gap-[30px] gap-[60px] lg:flex-wrap lg:w-[1000px] lg:relative  lgg:flex-nowrap lgg:relative lgg:left-[40px] lgg:w-[1200px]">
        {courses.map((item) => (
          <TopCourseBody
            key={item.courseId}
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
        <div className=" hidden lg:block lg:absolute lgg:top-[380px] lg:top-[780px] lg:left-[-230px] xl:top-[380px] xl:left-[1px] lgg:left-[-100px]">
          <Button buttonAdders={"courses"}/>
        </div>
      </div>
    </div>
    </>
  );
};
export { TopCourse };
