import React from "react";
import { MobileCourseStyle } from "../CoursePage/MobileCourseStyle";

const MobileCourseBody = () => {
  return (
    <div>
    

          
      <div className="lg:hidden xs:left-[5px] flex flex-col relative ml-[10px] mt-[] justify-center  gap-[50px] ">


          {/* html css */}

          <MobileCourseStyle
            id="1"
            level="پیشرفته"
            courseName="دوره طراحی سایت"
            coursePrice="500.000تومان"
            imageAddress="html2"
            bgcolor="bg-[#675CFF]"
            teacherName="محمدحسین بحرالعلومی"

          />

          {/* java */}

          <MobileCourseStyle
            id="2"
            courseName="دوره جاوااسکریپت"
            teacherName="محمدحسین بحرالعلومی"
            level="پیشرفته"
            imageAddress="java"
            coursePrice="تومان2.500.000"
            bgcolor="bg-[#F0DB4F]"
          />
          {/* figma */}

          <MobileCourseStyle
            id="3"
            courseName="دوره فیگما"
            teacherName="محمدحسین خلیل‌پور"
            level="پیشرفته"
            imageAddress="figma"
            coursePrice="1.000.000تومان"
            bgcolor="bg-[#FF6C6C]"
          />

          {/* react */}

          <MobileCourseStyle
            id="4"
            courseName="دوره ری‌اکت جی‌اس"
            teacherName="محسن اسفندیاری"
            level="مقدماتی"
            imageAddress="react"
            bgcolor="bg-[#87DFFF]"
            coursePrice="4.500.000تومان"
          />

           
        </div>
        
      </div>

   
  );
};
export { MobileCourseBody };
