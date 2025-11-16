import React from "react";
import Slider from "../filter/slider/Slider";
import {Order} from "./Order";
const Filter = () => {
  return (
    <div>
      {/* {Order Desktop} */}
      <div className="lg:block hidden absolute xl:left-[400px] xl:left-[] lg:left-[110px]">
        <div className="lg:w-[535px]  lg:h-[40px] lg:gap-[16px] lg:flex lg:justify-center lg:relative lg:bottom-[120px] lg:flex-row lg:z-10 lg:dark:border-[#FCFCFC] lg:dark:text-white lg:font-medium ">
          <div
            className="relative group lg:w-[100px] lg:h-[40px] lg:rounded-[34px] lg:border-[1px] lg:text-center lg:leading-[40px] lg:font-medium lg:transition-all lg:duration-300 lg:ease-in-out 
            hover:lg:w-[133px] hover:lg:border-[#FF5353] hover:lg:text-[#FF5353] cursor-pointer overflow-hidden"
          >
            <span className="transition-all duration-300 ml-2">گرانترین</span>

            <img
              className="w-[20px] h-[20px] absolute right-[4px] top-[10px] lg:opacity-0 lg:transition-opacity lg:duration-300 group-hover:opacity-100"
              src="../../../../public/AuthImage/cancel-01.png"
            />
          </div>
          <div
            className="relative group lg:w-[100px] lg:h-[40px] lg:rounded-[34px] lg:border-[1px] lg:text-center lg:leading-[40px] lg:font-medium lg:transition-all lg:duration-300 lg:ease-in-out 
            hover:lg:w-[133px] hover:lg:border-[#FF5353] hover:lg:text-[#FF5353] cursor-pointer overflow-hidden"
          >
            <span className="transition-all duration-300 ml-2">ارزان ترین</span>

            <img
              className="w-[20px] h-[20px] absolute right-[4px] top-[10px] lg:opacity-0 lg:transition-opacity lg:duration-300 group-hover:opacity-100"
              src="../../../../public/AuthImage/cancel-01.png"
            />
          </div>

          <div
            className="relative group lg:w-[100px] lg:h-[40px] lg:rounded-[34px] lg:border-[1px] lg:text-center lg:leading-[40px] lg:font-medium lg:transition-all lg:duration-300 lg:ease-in-out 
            hover:lg:w-[133px] hover:lg:border-[#FF5353] hover:lg:text-[#FF5353] cursor-pointer overflow-hidden"
          >
            <span className="transition-all duration-300 ml-2">محبوب ترین</span>

            <img
              className="w-[20px] h-[20px] absolute right-[4px] top-[10px] lg:opacity-0 lg:transition-opacity lg:duration-300 group-hover:opacity-100"
              src="../../../../public/AuthImage/cancel-01.png"
            />
          </div>

          <div
            className="relative group lg:w-[100px] lg:h-[40px] lg:rounded-[34px] lg:border-[1px] lg:text-center lg:leading-[40px] lg:font-medium lg:transition-all lg:duration-300 lg:ease-in-out 
            hover:lg:w-[133px] hover:lg:border-[#FF5353] hover:lg:text-[#FF5353] cursor-pointer overflow-hidden"
          >
            <span className="transition-all duration-300 ml-2">جدیدترین</span>

            <img
              className="w-[20px] h-[20px] absolute right-[4px] top-[10px] lg:opacity-0 lg:transition-opacity lg:duration-300 group-hover:opacity-100"
              src="../../../../public/AuthImage/cancel-01.png"
            />
          </div>

          <h1 className="lg:font-bold lg:font-[20px] lg:relative lg:top-[5px]">
            ترتیب
          </h1>
        </div>
      </div>

    {/* {ترتیب} */}


      {/* {filter} */}
        <div className="flex justify-end ">
      <div className="hidden  lg:block lg:w-[298px] lg:relative xl:left-[50px] lg:left-[80px] lgg:left-[-20px]  lg:bottom-[70px] lg:h-[665px] lg:bg-[#FCFCFC] lg:border-2 lg:border-[#DCDCDC] dark:text-white lg:border-Gray-400 dark:bg-slate-700 lg:rounded-[32px] font-sans ">
        <h1 className="lg:font-bold lg:text-2xl lg:w-[278px] lg:h-[34px] lg:absolute lg:top-[10px] lg:text-right">
          فیلتر
        </h1>
        <div className="lg:relative lg:right-[20px]">
          <div className="lg:w-[258px] lg:h-[80px] lg:gap-2 lg:mt-4 lg:relative">
            <h3 className="lg:font-medium lg:text-[16px] lg:w-[278px] lg:h-[34px] lg:absolute lg:top-[50px] lg:right-[-15px] lg:text-right">
              جستجو
            </h3>

            <div className="lg:w-[90px] lg:h-[24px] lg:gap-2 lg:float-right lg:flex">
              <img
                src="../../../../public/AuthImage/icons8-search-64.png"
                className="lg:w-[24px] lg:h-[24px] lg:absolute lg:top-[53px] lg:left-[275px]"
              />
            </div>

            <div className="lg:w-[258px] lg:h-[48px] lg:gap-2 lg:absolute lg:left-[40px] lg:top-[80px]">
              <input
                type="search"
                placeholder="دوره مورد نظر را جست‌جو کنید"
                className="lg:w-[258px] lg:h-[48px] lg:rounded-[16px] font-sans lg:text-[12px] lg:font-medium lg:text-right lg:bg-[#F1F1F1] outline-blue-500 dark:text-black"
              />
              <button className="lg:w-12 lg:h-12 lg:bg-[#3772FF] lg:absolute lg:left-0 lg:rounded-[16px]">
                <img
                  src="../../../../public/AuthImage/search.png"
                  className="lg:w-8 lg:h-8 lg:ml-2"
                />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:w-[258px] lg:h-[80px] lg:gap-2 lg:ml-[20px] lg:mt-[70px] lg:relative">
          <div className="lg:w-[102px] lg:h-[24px] lg:gap-2 lg:float-right lg:flex">
            <h3 className="lg:w-[70px] lg:h-[23px] font-sans lg:text-[16px] lg:font-medium lg:leading-5">
              دسته بندی
            </h3>
            <img
              src="../../../../public/AuthImage/cells-stroke-rounded.png"
              className="lg:w-[24px] lg:h-[24px]"
            />
          </div>
          <img
            src="../../../../public/AuthImage/arrow-down-01.png"
            className="lg:absolute lg:mt-[45px] lg:ml-[10px] lg:z-10"
          />

          <input
            type="text"
            placeholder="دسته مورد نظر را انتخاب کنید"
            className="dark:text-black lg:w-[258px] lg:h-[48px] lg:absolute lg:top-8 lg:rounded-[16px] lg:bg-[#F1F1F1] lg:text-[11px] lg:font-medium lg:text-right lg:pr-2 outline-none"
          />
        </div>

        <div className="lg:w-[258px] lg:h-[80px] lg:gap-2 lg:ml-[20px] lg:mt-4 lg:relative">
          <div className="lg:w-[119px] lg:h-[24px] lg:gap-2 lg:float-right lg:flex">
            <h3 className="lg:w-[87px] lg:h-[23px] font-sans lg:text-[15px] lg:font-medium lg:leading-5 lg:text-right">
              سطح آموزشی
            </h3>
            <img
              src="../../../../public/AuthImage/layers-01-stroke-rounded.png"
              className="lg:w-[24px] lg:h-[24px]"
            />
          </div>
          <img
            src="../../../../public/AuthImage/arrow-down-01.png"
            className="lg:absolute lg:mt-[45px] lg:ml-[10px] lg:z-10"
          />
          <input
            type="text"
            placeholder="دسته مورد نظر را انتخاب کنید"
            className="dark:text-black lg:w-[258px] lg:h-[48px] lg:absolute lg:top-8 lg:rounded-[16px] lg:bg-[#F1F1F1] lg:text-[11px] lg:font-medium lg:text-right lg:pr-2 outline-none"
          />
        </div>

        <div className="lg:w-[258px] lg:h-[80px] lg:gap-2 lg:ml-[20px] lg:mt-4 lg:relative">
          <div className="lg:w-[75px] lg:h-[24px] lg:gap-2 lg:float-right lg:flex">
            <h3 className="lg:w-[43px] lg:h-[23px] font-sans lg:text-[15px] lg:font-medium lg:leading-5 lg:text-right">
              اساتید
            </h3>
            <img
              src="../../../../public/AuthImage/teacher-stroke-rounded 1.png"
              className="lg:w-[24px] lg:h-[24px]"
            />
          </div>
          <img
            src="../../../../public/AuthImage/arrow-down-01.png"
            className="lg:absolute lg:mt-[45px] lg:ml-[10px] lg:z-10"
          />
          <input
            type="text"
            placeholder="دسته مورد نظر را انتخاب کنید"
            className="dark:text-black lg:w-[258px] lg:h-[48px] lg:absolute lg:top-8 lg:rounded-[16px] lg:bg-[#F1F1F1] lg:text-[11px] lg:font-medium lg:text-right lg:pr-2 outline-none"
          />
        </div>

        <div className="lg:absolute lg:ml-[30px]">
          <div className="lg:w-[75px] lg:h-[24px] lg:gap-2 lg:top-[10px] lg:relative lg:right-[10px] lg:float-right lg:flex">
            <h3 className="lg:w-[43px] lg:h-[23px] font-sans lg:text-[15px] lg:font-medium lg:leading-5 lg:text-right">
              قیمت
            </h3>
            <img
              src="../../../../public/AuthImage/money-04-stroke-rounded 2.png"
              className="lg:w-[24px] lg:h-[24px]"
            />
          </div>
          <Slider />
        </div>

        <div className="lg:w-[258px] lg:h-[80px] lg:top-[100px] lg:right-[-15px] lg:gap-2 lg:mt-4 lg:relative">
          <div className="lg:w-[157px] lg:h-[24px] lg:gap-2 lg:float-right lg:flex">
            <h3 className="lg:w-[125px] lg:h-[23px] font-sans lg:text-[15px] lg:font-medium lg:leading-5 lg:text-right">
              تاریخ برگزاری - اتمام
            </h3>
            <img
              src="../../../../public/AuthImage/calendar-02-stroke-rounded 2.png"
              className="lg:w-[24px] lg:h-[24px]"
            />
          </div>
          <input
            placeholder="29 اردیبهشت 1403 - 5 خرداد 1403"
            className="lg:w-[258px] lg:h-[48px] lg:rounded-[16px] lg:bg-[#F1F1F1] lg:absolute lg:top-8 lg:text-[#707070] lg:font-medium lg:text-[14px] lg:p-4 lg:text-right"
          />
        </div>
      </div>
      <div className="flex justify-center lg:hidden"></div>
    </div>
    </div>
  );
};

export { Filter };
