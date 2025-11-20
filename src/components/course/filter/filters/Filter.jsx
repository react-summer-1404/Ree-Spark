import React from "react";
import Slider from "../slider/Slider";
import { SortResponsive } from "../Sort/SortResponsive";
import { Sort } from "../Sort/Sort";
const Filter = ({
Search,
  openCategories,
  selectedCategory,
  categories,
  select,
  toggle
}) => {
  return (
    <div>
      {/* {Order Desktop} */}
      <div className="lg:block hidden absolute xl:left-[400px] xl:left-[] lg:left-[110px]">
        <Sort />
      </div>


      {/* {ترتیب} */}

      {/* {filter} */}
      <div className="flex justify-end ">
        <div className="hidden  lg:block lg:w-[298px] absolute  bottom-[-302px] lgg:left-[865px] lg:left-[845px] xl:left-[1065px] lg:h-[665px] lg:bg-[#FCFCFC] lg:border-2 lg:border-[#DCDCDC] dark:text-white lg:border-Gray-400 dark:bg-slate-700 lg:rounded-[32px] font-sans ">
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
                  onChange={(e) => Search(e.target.value)}
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

      <div className="relative mt-16 ml-[20px]">
  <h3 className="text-right text-[16px] font-medium mb-2 flex items-center relative right-[15px] justify-end gap-2">
    دسته بندی
    <img src="../../../../../public/AuthImage/cells-stroke-rounded.png" alt="" className="w-6 h-6" />
  </h3>


    <input
      readOnly
      value={selectedCategory}
      onClick={toggle}
      placeholder="دسته مورد نظر را انتخاب کنید   "
   className="lg:w-[258px] cursor-pointer lg:h-[48px] lg:rounded-[16px] font-sans lg:text-[12px] lg:font-medium lg:text-right lg:bg-[#F1F1F1] outline-blue-500 dark:text-black"    />

    <img
      src="../../../../../public/AuthImage/arrow-down-01.png"
      className="top-[45px] left-[8px] z-10 absolute"
      alt=""
    />
  </div>

  {openCategories && (
   <ul className="absolute top-[24px]  bg-[#F1F1F1] rounded-[13px] mt-2 w-full h-[100px] z-20 dark:bg-[#F1F1F1]">

     <img
                  src="../../../../public/AuthImage/arrow-down-01.png"
                  className="absolute mt-[26px] ml-[10px] z-20 border-8" 
                />
        {categories.map((cat) => (
          <li
            key={cat.id}
            onClick={() => select(cat.techName)}
            className="cursor-pointer text-slate-500 dark:text-white border-gray-200 hover:bg-slate-200 hover:rounded-[11px] dark:border-gray-500 border-b-2 last:rounded-b-[11px] text-center font-normal dark:hover:bg-gray-700 p-3 box-border"            
          >
            {cat.techName}
          </li>
        ))}
    </ul>
  )}

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
