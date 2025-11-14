import React from "react";
import { HeroSectionRespansive } from "./Respansive/HeroSectionRespansive";
import { BorderRespansive } from "./Respansive/BorderRespansive";
function HeroSection() {
  return (
    <>
 { /* {mobile}  */}
 
    <HeroSectionRespansive/>
      {/* {Desktop} */}
     
        <div className="hidden lg:block lg:h-48  lg:relative lg:bottom-[950px] lg:w-[1440px] lg:text-center  lgg:right-[80px] lg:right-[140px]  xl:right-[0] lg:flex lg:flex-col ">
          
          <span className="lg:font-bold lg:text-3xl lg:justify-center">
            آموزش مدرن
          </span>
          <span className="lg:font-bold lg:text-3xl relative top-[14px] lg:justify-center">
            پیشرفت سریع
          </span>

          <div className="lg:text-center lg:flex lg:justify-center ">
            <p className="lg:w-[240px] lg:relative lg:break-words lg:mt-[40px] lg:text-sm lg:font-light lg:text-[#707070]">
              آکادمی آموزش تخصصی برنامه‌نویسی بحر از کودکان تا بزرگسال
            </p>
          </div>

          <div className="lg:relative lg:bottom-[116px] lg:right-[120px] lg:whitespace-nowrap">
            <p className="lg:absolute lg:left-[452px] lg:bottom-0.5 lg:font-medium lg:text-[18px]">
              همین حالا
            </p>
            <div dir="rtl" className="lg:absolute lg:font-medium lg:text-[18px] lg:left-[375px] ">
              شروع کن به یادگیری!
            </div>
            <div className="dark:bg-slate-400 lg:bg-[#2F2F2F] lg:w-[150px] lg:h-[47px] lg:absolute lg:left-[377px] lg:top-[40px] lg:rounded-[40px] lg:font-medium lg:text-[16px] leading-[50px] dark:text-black lg:text-gray-50 lg:text-center ">
              جدیدترین دوره‌ها
            </div>
          </div>

          <div className="lg:relative lg:right-[80px] lg:bottom-[70px]  lg:whitespace-nowrap">
            <div className="lg:absolute lg:right-[240px] lg:bottom-[-10px]">
              <div className="lg:w-[38px] lg:h-[28px] lg:font-normal lg:absolute lg:left-[143px] lg:text-[20px] lg:bottom-[31px]">100
                <span className="lg:text-[19px] lg:font-medium lg:relative lg:bottom-[-1px] lg:left-[4px]">+</span></div>
              دانشجو فعال در دوره
                 <div className="lg:left-[179px] lg:bottom-[30px] lg:relative lg:w-[80px] lg:h-[32px] ">
      

                <img
                  src="/AuthImage/w3.png"
                  className="lg:absolute lg:left-[53px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px] lg:bg-[#CFC3A7] lg:border-[#FCFCFC] dark:lg:border-slate-800 "
                />
                <img
                  src="/AuthImage/w2.png"
                  className="lg:absolute lg:left-[10px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px] lg:bg-[#C9BA9C] lg:border-[#FCFCFC] lg:border-[2px] lg:z-10 dark:lg:border-slate-800 "
                />
                <img
                  src="/AuthImage/w4.png"
                  className="lg:absolute lg:left-[32px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px] lg:bg-[#DBC0DD] lg:border-[#FCFCFC] lg:border-[2px] dark:lg:border-slate-800"/>
              
            </div>
            </div>
            <div className="lg:absolute lg:right-64 ">
              <div className="lg:text-[20px] lg:absolute bottom-[-3px] lg:left-[131px]">50<span className="lg:text-[19px] lg:font-medium lg:relative lg:bottom-[-1px] lg:left-[5px]">+</span></div>
              <div className="right-[-13px] relative">اساتید برتر جهان</div>
           <div className="lg:relative lg:left-[165px] lg:bottom-[30px]">
                <img
                  src="/AuthImage/n1.png"
                  className="lg:absolute lg:left-[53px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px] lg:bg-[#CDD4AF] dark:lg:border-slate-800 "
                
                />
                <img
                  src="/AuthImage/n2.png"
                  className="lg:absolute lg:left-[10px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px] lg:bg-[#B2AFD4] lg:border-[#FCFCFC] lg:border-[2px] lg:z-10 dark:lg:border-slate-800"
              
                />
                <img
                  src="/AuthImage/w1.png"
                  className="lg:absolute lg:left-[32px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px] lg:bg-[#FE8990] lg:border-[#FCFCFC]  lg:border-[2px] dark:lg:border-slate-800"
                />  

              </div>
          </div>
        </div>
      </div>


           {/* {desktop border} */}
            {/* {XL Desktop} */}
            {/* {mobile border} */}
              <BorderRespansive/>
    </>
  );
}

export default HeroSection;
