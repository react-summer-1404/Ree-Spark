import React from "react";
import TopBlogInfo from "./TopBlogInfo";

function TopBlogs() {
  return (
    <div>
      <div className="  h-[365px] flex justify-center flex-col relative top-[1083px] lg:dark:text-white ">
        <div className="text-center text-3xl bottom-8 relative right-[-10px] top-[320px] lg:hidden font-bold ">
          بلاگ های برتر هفته
        </div>

        <div className="h-[366px] lg:hidden  flex">
          {/*  java   */}
          <TopBlogInfo
            titel="زبان جاوا اسکریپت در چه حوزه ای به کار میره؟ "
            Teacher="محمد حسین بحرالعلومی"
            img="java"
            blogBg="bg-[#F0DB4F]"
            Date="22 1403 اردیبهشت"
            icDate="Date"
            view="49"
            icView="view"
          />

          {/*  figma */}
          <TopBlogInfo
            titel="فیگما یا ادوبی ایکس‌دی؟"
            Teacher="محمدحسین خلیل‌پور"
            img="figma"
            blogBg="bg-[#FF6C6C]"
            Date="29 1403 فروردین"
            icDate="Date"
            view="122"
            icView="view"
          />

          {/*  react */}
          <TopBlogInfo
            titel="فرق ری‌اکت با نکست جی‌اس چیست؟"
            Teacher=" محسن اسفندیاری"
            img="react"
            blogBg="bg-[#87DFFF]"
            Date="29 1403 فروردین"
            view="234"
            icView="view"
            icDate="Date"
          />
        </div>

        <div className="lg:text-center lg:text-3xl lg:bottom-8 lg:relative lg:right-[20px] lg:top-[-40px] lg:font-bold lg:block hidden lg:dark:text-white lg:text-black">
          بلاگ‌های برتر هفته
        </div>

        <div className="lg:w-[1361px] lg:h-[366] lg:gap-8 lg:flex hidden  ">
          {/*  java   */}
          <TopBlogInfo
            titel="زبان جاوا اسکریپت در چه حوزه ای به کار میره؟ "
            Teacher="محمد حسین بحرالعلومی"
            img="java"
            blogBg="bg-[#F0DB4F]"
            Date="22 1403 اردیبهشت"
            icDate="Date"
            view="49"
            icView="view"
          />

          {/*  figma */}
          <TopBlogInfo
            titel="فیگما یا ادوبی ایکس‌دی؟"
            Teacher="محمدحسین خلیل‌پور"
            img="figma"
            blogBg="bg-[#FF6C6C]"
            Date="29 1403 فروردین"
            icDate="Date"
            view="122"
            icView="view"
          />

          {/*  react */}
          <TopBlogInfo
            titel="فرق ری‌اکت با نکست جی‌اس چیست؟"
            Teacher=" محسن اسفندیاری"
            img="react"
            blogBg="bg-[#87DFFF]"
            Date="29 1403 فروردین"
            view="234"
            icView="view"
            icDate="Date"
          />
        </div>
      </div>
    </div>
  );
}

export default TopBlogs;
