import React from "react";

const BlogRelated = () => {
  return (
    <div className="flex w-[100%] justify-end flex-wrap gap-7 ">
      <div className="text-[#707070] w-[100%] text-right text-[20px] font-bold ">
        بلاگ های مربوط
      </div>
      <div className="flex gap-3 w-[100%] justify-center md:justify-between flex-wrap md:flex-nowrap ">
        <div className="min-w-[30%] h-[366px]">
          <div
            className="w-full h-[293px] rounded-[32px]
                        bg-blue-300 flex flex-wrap p-2 justify-center "
          >
            <div className="flex justify-end gap-2 w-[100%] h-[28px]">
              <div className="h-[24px] rounded-[32px] bg-[#3772FF] ">
                <div className=" mr-1 ml-1">برنامه نویسی</div>
              </div>
              <div className="w-[65px] h-[24px] rounded-[32px] bg-[#FF37F5] ">
                <div className="mr-1 ml-1 ">مقدماتی</div>
              </div>
            </div>
            {/* <img src="" alt="" /> */}
          </div>
          <div className="w-[100%] h-[61px] flex flex-wrap justify-end gap-y-4 ">
            <div
              className="w-[200px] h-[32px] text-right text-[24px] font-bold dark:text-white line-clamp-1"
              dir="rtl"
            >
              فرق ری‌اکت با نکست جی‌اس چیست؟
            </div>
            <div className="w-[100%] h-[23px] flex justify-between ">
              <div className="flex gap-1 font-bold dark:text-white ">
                <div className="font-thin ">تومان</div>2,500,000{" "}
              </div>
              <div className="text-[#a7a7a7] ">محسن اسفندیاری</div>
            </div>
          </div>
        </div>
        <div className="min-w-[30%] h-[366px] ">
          <div
            className="w-full h-[293px] rounded-[32px]
                        bg-blue-300 flex flex-wrap p-2 justify-center "
          >
            <div className="flex justify-end gap-2 w-[100%] h-[28px]">
              <div className="h-[24px] rounded-[32px] bg-[#3772FF] ">
                <div className=" mr-1 ml-1">برنامه نویسی</div>
              </div>
              <div className="w-[65px] h-[24px] rounded-[32px] bg-[#FF37F5] ">
                <div className="mr-1 ml-1 ">مقدماتی</div>
              </div>
            </div>
            {/* <img src="" alt="" /> */}
          </div>
          <div className="w-[100%] h-[61px] flex flex-wrap justify-end gap-y-4 ">
            <div
              className="w-[200px] h-[32px] text-right text-[24px] font-bold dark:text-white line-clamp-1"
              dir="rtl"
            >
              فیگما یا ادوبی ایکس‌دی؟
            </div>
            <div className="w-[100%] h-[23px] flex justify-between ">
              <div className="flex gap-1 font-bold dark:text-white ">
                <div className="font-thin ">تومان</div>2,500,000
              </div>
              <div className="text-[#a7a7a7] ">محسن اسفندیاری</div>
            </div>
          </div>
        </div>
        <div className="min-w-[30%] h-[366px] ">
          <div
            className="w-full h-[293px] rounded-[32px]
                        bg-blue-300 flex flex-wrap p-2 justify-center "
          >
            <div className="flex justify-end gap-2 w-[100%] h-[28px]">
              <div className="h-[24px] rounded-[32px] bg-[#3772FF] ">
                <div className=" mr-1 ml-1">برنامه نویسی</div>
              </div>
              <div className="w-[65px] h-[24px] rounded-[32px] bg-[#FF37F5] ">
                <div className="mr-1 ml-1 ">مقدماتی</div>
              </div>
            </div>
            <img src="" alt="" />
          </div>
          <div className="w-[100%] h-[61px] flex flex-wrap justify-end gap-y-4 ">
            <div
              className="w-[200px] h-[32px] text-right text-[24px] font-bold dark:text-white line-clamp-1"
              dir="rtl"
            >
              زبان جاوا اسکریپت در چه حوزه ای به کار میره؟
            </div>
            <div className="w-[100%] h-[23px] flex justify-between ">
              <div className="flex gap-1 font-bold dark:text-white ">
                <div className="font-thin ">تومان</div>2,500,000
              </div>
              <div className="text-[#a7a7a7] ">محسن اسفندیاری</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogRelated;
