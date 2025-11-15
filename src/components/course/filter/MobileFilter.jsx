
import React from 'react'
import Slider from "./slider/Slider"
const MobileFilter = ({onClose}) => {
  return (
    <div>
       
      <div className="w-[393px]  flex justify-center  h-[705px] bg-[#FCFCFC] border-2 border-[#DCDCDC]  dark:text-white border-Gray-400 dark:bg-slate-700 rounded-[32px] ">
       <div className="w-[56px] h-[8px] border-[2px] border-gray-400 rounded-[4px] absolute mt-[10px] ml-[265px]"></div>

        <div className="relative ">
               <h1 className='font-bold text-2xl w-[278px] h-[34px] absolute top-[20px] ml-[105px] text-right text-[24px]'>فیلتر</h1>

               <button 
               onClick={onClose}
               className="w-[101px] h-[40px] rounded-[34px] relative mt-[15px] ml-[20px]
               border-[#FF5353] border-[1px] text-[#FF5353] font-medium font-[18px] leading-[20px] "
               
               ><img 
               className='absolute ml-[70px] mt-[2px]'
               src="../../../../public/AuthImage/cancel-01.png" />
               
               بستن</button>


              <div className="w-[258px] h-[80px] gap-2  mt-4 relative">
                 <div className="w-[90px] h-[24px]   flex absolute left-[290px] gap-[20px]">
                  <h3 className='font-medium text-[16px] w-[278px] h-[34px] absolute top-[50px] '> جستجو</h3>

         
            
            <img
              src="../../../../public/AuthImage/icons8-search-64.png"
              className="w-[24px] h-[24px] absolute ml-[50px] top-[53px] "
            />
          </div>

          <div className="w-[345px] h-[45px] gap-2  absolute left-[20px] top-[80px]">
            <input dir='rtl'
              type="search"
              placeholder="دوره مورد نظر را جست‌جو کنید..."
              className="w-[345px] h-[48px] rounded-[16px] font-sans text-[12px] font-medium text-right bg-[#F1F1F1] outline-blue-500 dark:text-black"
            />
            <button className="w-12 h-12 bg-[#3772FF] absolute left-0 rounded-[16px]">
              <img
                src="../../../../public/AuthImage/search.png"
                className="w-8 h-8 ml-2"
              />
            </button>
          </div>
        </div>

      
       
      </div>


    {/* {category} */}
        <div className="w-[258px] h-[80px] gap-2  ml-[20px] mt-[70px] relative">

          <div className="w-[102px] h-[24px] gap-2 ml-[240px] absolute  float-right flex ">
            <h3 className="w-[70px] h-[23px] font-sans text-[16px] font-medium leading-5 ">
              دسته بندی
            </h3>
            <img
              src="../../../../public/AuthImage/cells-stroke-rounded.png"
              className="w-[24px] h-[24px]  "
            />
          </div>
            
            <img src="../../../../public/AuthImage/arrow-down-01.png"
            className='absolute mt-[45px] ml-[10px] z-10'
            />

          <input 
            type='text'
            placeholder="دسته مورد نظر را انتخاب کنید"
            className="  dark:text-black w-[345px] h-[48px]  absolute top-8 rounded-[16px] bg-[#F1F1F1]  text-[11px] font-medium text-right pr-2 outline-none"
          >
          
                        </input>
        </div>

      {/* {Level training} */}


       <div className="w-[258px] h-[80px] gap-2 ml-[20px] mt-4 relative">
          <div className="w-[119px] h-[24px] gap-2  float-right flex absolute ml-[220px]">
            <h3 className="w-[87px] h-[23px] font-sans text-[15px] font-medium leading-5 text-right ">
              سطح آموزشی
            </h3>
            <img
              src="../../../../public/AuthImage/layers-01-stroke-rounded.png"
              className="w-[24px] h-[24px]  "
            />
          </div>

           <img src="../../../../public/AuthImage/arrow-down-01.png"
            className='absolute mt-[45px] ml-[10px] z-10'
            />
          <input
            type="text"
            placeholder="دسته مورد نظر را انتخاب کنید"
            className="  dark:text-black w-[345px] h-[48px]  absolute top-8 rounded-[16px] bg-[#F1F1F1]  text-[11px] font-medium text-right pr-2 outline-none"
          ></input>
        </div>

      {/* {Teachers} */}

          <div className="w-[258px] h-[80px] gap-2 ml-[20px]  mt-4 relative">
          <div className="w-[75px] h-[24px] gap-2  float-right flex absolute ml-[260px]">
            <h3 className="w-[43px] h-[23px] font-sans text-[15px] font-medium leading-5 text-right ">
              اساتید
            </h3>
            <img
              src="../../../../public/AuthImage/teacher-stroke-rounded 1.png"
              className="w-[24px] h-[24px]  "
            />
          </div>

  <img src="../../../../public/AuthImage/arrow-down-01.png"
            className='absolute mt-[45px] ml-[10px] z-10'
            />
          <input
            type="text"
            placeholder="دسته مورد نظر را انتخاب کنید"
            className="  dark:text-black w-[345px] h-[48px]  absolute top-8 rounded-[16px] bg-[#F1F1F1] text-[11px] font-medium text-right pr-2 outline-none"
          ></input>
        </div>


    {/* {price} */}

      <div className='absolute ml-[20px]'>

                 <div className="w-[75px] h-[24px] gap-2 top-[10px] relative right-[14px] float-right flex ">
                   <h3 className="w-[43px] h-[23px] font-sans text-[15px] font-medium leading-5 text-right ">
                     قیمت
                   </h3>
                   <img
                     src="../../../../public/AuthImage/money-04-stroke-rounded 2.png"
                     className="w-[24px] h-[24px]  "
                   />
                 </div>
                 <Slider />
               </div>


               {/* {time} */}
     
                    <div className="w-[258px] h-[80px] top-[100px] left-[20px] gap-2 mt-4 relative ">
          <div className="w-[157px] h-[24px] gap-2 absolute float-right flex ml-[176px]">
            <h3 className="w-[125px] h-[23px] font-sans text-[15px] font-medium leading-5 text-right ">
              تاریخ برگزاری - اتمام
            </h3>
            <img
              src="../../../../public/AuthImage/calendar-02-stroke-rounded 2.png"
              className="w-[24px] h-[24px]  "
            />
          </div>
          <input
            placeholder="29 اردیبهشت 1403 - 5 خرداد 1403"
            className="w-[345px] h-[48px] rounded-[16px] bg-[#F1F1F1] absolute top-8 text-[#707070] font-medium text-[14px] p-4 text-right"
          />
        </div>

    </div>
    </div>
  )
}

export {MobileFilter}
