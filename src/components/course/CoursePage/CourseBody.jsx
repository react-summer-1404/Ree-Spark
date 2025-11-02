import React from "react";
import {MobileCourseBody} from "./MobileCourseBody"
import { CourseStyle } from "./CourseStyle";

const CourseBody = () => {
  return (
    <div>
      <div className=" hidden lg:block">
        <div className=" xl:w-[1061px] lg:w-[961px] lg:h-[366px] lg:relative xl:left-[-120px]  lg:right-[170px] lg:top-[300px] lg:justify-center  lg:flex-wrap lg:gap-6  lg:flex ">
          {/* html css */}

          <CourseStyle
            id="1"
            level="پیشرفته"
            courseName="دوره طراحی سایت"
            coursePrice="500.000تومان"
            imageAddress="html2"
            teacherName="محمدحسین بحرالعلومی"
            bgcolor="bg-[#675CFF]"
          />

          {/* java */}

          <CourseStyle
            id="2"
            courseName="دوره جاوااسکریپت"
            teacherName="محمدحسین بحرالعلومی"
            level="پیشرفته"
            imageAddress="java"
            coursePrice="تومان2.500.000"
            bgcolor="bg-[#F0DB4F]"
          />
          {/* figma */}

          <CourseStyle
            id="3"
            courseName="دوره فیگما"
            teacherName="محمدحسین خلیل‌پور"
            level="پیشرفته"
            imageAddress="figma"
            coursePrice="1.000.000تومان"
            bgcolor="bg-[#FF6C6C]"
          />

          {/* react */}

          <CourseStyle
            id="4"
            courseName="دوره ری‌اکت جی‌اس"
            teacherName="محسن اسفندیاری"
            level="مقدماتی"
            imageAddress="react"
            bgcolor="bg-[#87DFFF]"
            coursePrice="4.500.000تومان"
          />

          {/* html css */}

          <CourseStyle
            id="5"
            level="پیشرفته"
            courseName="دوره طراحی سایت"
            coursePrice="500.000تومان"
            imageAddress="html2"
            bgcolor="bg-[#675CFF]"
            teacherName="محمدحسین بحرالعلومی"
          />

          {/* java */}

          <CourseStyle
            id="6"
            courseName="دوره جاوااسکریپت"
            teacherName="محمدحسین بحرالعلومی"
            level="پیشرفته"
            imageAddress="java"
            coursePrice="تومان2.500.000"
            bgcolor="bg-[#F0DB4F]"
          />
          {/* figma */}

          <CourseStyle
            id="7"
            courseName="دوره فیگما"
            teacherName="محمدحسین خلیل‌پور"
            level="پیشرفته"
            imageAddress="figma"
            coursePrice="1.000.000تومان"
            bgcolor="bg-[#FF6C6C]"
          />

          {/* react */}

          <CourseStyle
            id="8"
            courseName="دوره ری‌اکت جی‌اس"
            teacherName="محسن اسفندیاری"
            level="مقدماتی"
            imageAddress="react"
            bgcolor="bg-[#87DFFF]"
            coursePrice="4.500.000تومان"
          />
          {/* html css */}

          <CourseStyle
            id="9"
            level="پیشرفته"
            courseName="دوره طراحی سایت"
            coursePrice="500.000تومان"
            imageAddress="html2"
            teacherName="محمدحسین بحرالعلومی"
            bgcolor="bg-[#675CFF]"
          />

          {/* java */}

          <CourseStyle
            id="10"
            courseName="دوره جاوااسکریپت"
            teacherName="محمدحسین بحرالعلومی"
            level="پیشرفته"
            imageAddress="java"
            coursePrice="تومان2.500.000"
            bgcolor="bg-[#F0DB4F]"
          />
          {/* figma */}

          <CourseStyle
            id="11"
            courseName="دوره فیگما"
            teacherName="محمدحسین خلیل‌پور"
            level="پیشرفته"
            imageAddress="figma"
            coursePrice="1.000.000تومان"
            bgcolor="bg-[#FF6C6C]"
          />

          {/* react */}

          <CourseStyle
            id="12"
            courseName="دوره ری‌اکت جی‌اس"
            teacherName="محسن اسفندیاری"
            level="مقدماتی"
            imageAddress="react"
            bgcolor="bg-[#87DFFF]"
            coursePrice="4.500.000تومان"
          />
        </div>
      </div>
      <div className="lg:hidden">
        <MobileCourseBody />
      </div>
    </div>
  );
};
export { CourseBody };
