import React from "react";

function HeroSection() {
  return (
    <div className="w-full  relative ">
      <div className=" ">
        <div className="lg:hidden absolute h-[700px]  bottom-[2770px] w-full flex flex-col items-center gap-[10px]  text-center p-4">
          <span className="font-bold text-xl ">آموزش مدرن</span>
          <span className="font-bold text-xl">پیشرفت سریع</span>
          <p className=" mt-4 text-sm font-light  text-[#707070] break-words w-[240px] relative bottom-[10px]">
            آکادمی آموزش تخصصی برنامه‌نویسی بحر
            از کودکان تا بزرگسال
           </p>
          

          <div className="w-full flex flex-col items-center relative right-[85px] space-y-6 mt-[50px]">
            <div className="flex flex-col items-center relative left-[50px]">
              <div className="text-base font-bold  absolute left-[123px] top-[-3px] ">
                   100  <span className="font-light relative left-[18px] bottom-[23px]">+</span>
              </div>
              <div className="text-sm">دانشجو فعال در دوره</div>
              <div className="flex space-x-[-10px] absolute  mt-[-10px] right-[-115px]">
                <img src="/AuthImage/w2.png" className="w-8 h-8 rounded-full bg-[#C9BA9C] border-[#FCFCFC] border-2 dark:border-slate-800 " />
                <img src="/AuthImage/w4.png" className="w-8 h-8 rounded-full bg-[#DBC0DD] border-[#FCFCFC] border-2 dark:border-slate-800 " />
                <img src="/AuthImage/w3.png" className="w-8 h-8 rounded-full bg-[#CFC3A7] border-[#FCFCFC] border-2 dark:border-slate-800   " />
              </div>
            </div>


            <div className="flex flex-col items-center absolute top-30px mr-[35px]">
              <div className="text-base font-bold left-[69px] top-[22px] relative">
                50     <span className="font-light">+</span>
              </div>
              <div className="text-sm">اساتید برتر جهان</div>
              <div className="flex space-x-[-10px] relative  mt-[-28px] right-[-125px]">
                <img src="/AuthImage/n2.png" className="w-8 h-8 rounded-full bg-[#B2AFD4] border-[#FCFCFC] border-2 dark:border-slate-800 " />
                <img src="/AuthImage/w1.png" className="w-8 h-8 rounded-full bg-[#FE8990] border-[#FCFCFC] border-2 dark:border-slate-800 z-10"/>
                <img src="/AuthImage/n1.png" className="w-[29px] h-[28px] relative  top-[2px] rounded-full bg-[#CDD4AF]  border-[#FCFCFC]  dark:border-slate-800 " />
              </div>
            </div>
          </div>

          <div className="relative bottom-[-130px] right-[450px] whitespace-nowrap ">
            <p className="absolute left-[414px] bottom-0.5">همین حالا</p>
            <div dir="rtl" className="absolute left-[375px]">
              شروع کن به یادگیری!
            </div>
            <div className="dark:bg-slate-400 bg-[#2F2F2F] dark:text-black w-36 lg:h-11 absolute left-[370px] top-10 rounded-3xl text-gray-50 text-center py-2">
              جدیدترین دوره‌ها
            </div>
          </div>
        </div>

      {/* {Desktop} */}
     
        <div className="hidden lg:block lg:h-48  lg:relative lg:bottom-[950px] lg:w-[1440px] lg:text-center lg:flex lg:flex-col lg:font-Isan">
          
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
    </div>


           {/* {desktop border} */}

      <div className="lg:relative hidden lg:block lg:bottom-[1350px] ">
        <div className="lg:w-full lg:absolute lg:top-[572px]  right-[-80px] lg:border-[4px] lg:"></div>
        <div className="lg:w-[290px] lg:absolute lg:top-[572px] left-[16px] lg:border-4 lg:border-[#3772FF] lg:rounded-r"></div>
        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[175px] lg:bg-[#3772FF] lg:rounded-full"></div>

        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[181px] lg:bg-[#FCFCFC] lg:rounded-full lg:dark:bg-[#242424]"></div>
        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[449px] lg:bg-[#D9D9D9] lg:rounded-full"></div>
        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[455px] lg:bg-[#FCFCFC] lg:rounded-full lg:dark:bg-[#242424]"></div>

        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[708px] lg:bg-[#D9D9D9] lg:rounded-full"></div>
        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[714px] lg:bg-[#FCFCFC] lg:rounded-full lg:dark:bg-[#242424]"></div>

        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[977px] lg:bg-[#D9D9D9] lg:rounded-full"></div>
        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[983px] lg:bg-[#FCFCFC] lg:rounded-full lg:dark:bg-[#242424]"></div>

        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[1258px] lg:bg-[#D9D9D9] lg:rounded-full"></div>
        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[1264px] lg:bg-[#FCFCFC] lg:rounded-full lg:dark:bg-[#242424]"></div>
      </div>
            
            {/* {mobile border} */}

      <div className="relative flex justify-center lg:hidden bottom-[3450px]">
        <div className="w-[393px] absolute top-[572px]  border-4 border-[#00000014]"></div>
        <div className="w-[150px] absolute top-[572px] right-[300px] border-4 border-[#3772FF] rounded-r"></div>
        <div className="w-6 h-6 absolute top-[562px]  right-[325px] bg-[#3772FF] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px]  right-[331px]  bg-[#FCFCFC] rounded-full dark:bg-[#242424]"></div>
        <div className="w-6 h-6 absolute top-[562px] right-[245px]  bg-[#D9D9D9] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px] right-[251px]  bg-[#FCFCFC] rounded-full dark:bg-[#242424]"></div>
        <div className="w-6 h-6 absolute top-[562px] left-[240px] bg-[#D9D9D9] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px] left-[246px] bg-[#FCFCFC] rounded-full dark:bg-[#242424]"></div>
        <div className="w-6 h-6 absolute top-[562px] left-[310px] bg-[#D9D9D9] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px] left-[316px] bg-[#FCFCFC] rounded-full dark:bg-[#242424]"></div>
        <div className="w-6 h-6 absolute top-[562px]  bg-[#D9D9D9] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px]  bg-[#FCFCFC] rounded-full dark:bg-[#242424]"></div>

      </div>
    </div>
  );
}

export default HeroSection;
