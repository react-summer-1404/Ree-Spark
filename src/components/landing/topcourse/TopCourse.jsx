import React from "react";
import { TopCourseBody } from "./TopCourseBody";
import Button from "../../common/Button";
const TopCourse = () => {
  return (
    <div>
      <div className="w-[1361px] h-[547px] absolute  top-[1646px] gap-12  lg:dark:text-white dark:text-white">
        

        <div className="lg:w-[1361px]  lg:h-[46px] lg:text-center lg:text-3xl lg:font-sans lg:font-bold  hidden lg:block  ">
          دوره‌های برتر هفته
        </div>


        <div className=" absolute left-[55px] top-[2500px] text-3xl font-sans  font-bold lg:hidden ">

          دوره‌های برتر هفته
        </div>

        <div className=" w-[1361px] h-[366px] gap-6 mt-8 flex ">
          {/* html css */}

          <TopCourseBody
            level="پیشرفته"
            courseName="دوره طراحی سایت"
            coursePrice="500.000تومان"
            imageAddress="html2"
            teachername="محمدحسین بحرالعلومی"
            bgcolor="bg-[#675CFF]"
            teacherName="محمدحسین بحرالعلومی"

          />

          {/* java */}

          <TopCourseBody
            courseName="دوره جاوااسکریپت"
            teacherName="محمدحسین بحرالعلومی"
            level="پیشرفته"
            imageAddress="java"
            coursePrice="تومان2.500.000"
            bgcolor="bg-[#F0DB4F]"
          />
          {/* figma */}

          <TopCourseBody
            courseName="دوره فیگما"
            teacherName="محمدحسین خلیل‌پور"
            level="پیشرفته"
            imageAddress="figma"
            coursePrice="1.000.000تومان"
            bgcolor="bg-[#FF6C6C]"
          />

          {/* react */}

          <TopCourseBody
            courseName="دوره ری‌اکت جی‌اس"
            teacherName="محسن اسفندیاری"
            level="مقدماتی"
            imageAddress="react"
            bgcolor="bg-[#87DFFF]"
            coursePrice="4.500.000تومان"
          />


        </div>
        <Button/>
      </div>
       
    </div>

   
  );
};
export { TopCourse };
