import React from "react";
import { BlogList } from "./components/blogList/BlogList";
import figma from "../../assets/image/BlogImage/figma.png";
import react from "../../assets/image/BlogImage/react.png";
import java from "../../assets/image/BlogImage/java.png";
import { BlogFilter } from "./components/BlogFilter/BlogFilter";
import { PageInationBlog } from "./components/blogPageinit/PageInationBlog";

const BlogBody = () => {
  return (
    <div className="w-[95%] h-[1555px] m-auto mt-52 flex justify-between flex-col-reverse sm:flex-row gap-2">
      <div className="w-full sm:w-[75%] h-[95%] sm:h-full flex flex-row gap-5 flex-wrap dark:text-white overflow-hidden">
        <BlogList
          BlogName={"فیگما یا ادوبی ایکس‌دی؟"}
          BlogTeacher={"محمدحسین خلیل‌پور"}
          BlogImage={figma}
          BlogBg={"bg-[#FF6C6C]"}
        />
        <BlogList
          BlogName={"فرق ری‌اکت با نکست جی‌اس چیست؟"}
          BlogTeacher={"محسن اسفندیاری"}
          BlogImage={react}
          BlogBg={"bg-[#87DFFF]"}
        />
        <BlogList
          BlogName={"زبان جاوا اسکریپت در چه حوزه ای به کار میره؟"}
          BlogTeacher={"محمدحسین بحرالعلومی"}
          BlogImage={java}
          BlogBg={"bg-[#F0DB4F]"}
        />
        <BlogList
          BlogName={"فیگما یا ادوبی ایکس‌دی؟"}
          BlogTeacher={"محمدحسین خلیل‌پور"}
          BlogImage={figma}
          BlogBg={"bg-[#FF6C6C]"}
        />
      </div>
      <div className="border-2 border-[#DCDCDC] rounded-[32px] w-[90px] sm:w-[298px] h-[50px] dark:bg-slate-800 sm:h-[370px] bg-[#2F2F2F] sm:bg-white overflow-hidden sm:overflow-auto  mt-24 sm:mt-0 ">
        <BlogFilter />
      </div>
      <PageInationBlog/>
    </div>
  );
};

export { BlogBody };
