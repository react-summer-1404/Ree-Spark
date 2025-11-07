import React from "react";

function HeroSection() {
  return (
    <div className="w-full  relative ">
      <div className="font-Isan  ">
        <div className="lg:hidden absolute h-[700px]  bottom-[2830px] w-full flex flex-col items-center  text-center p-4">
          <span className="font-bold text-xl ">آموزش مدرن</span>
          <span className="font-bold text-xl">پیشرفت سریع</span>
          <p className="w-11/12 mt-4 text-sm font-light ">
            آکادمی آموزش تخصصی برنامه‌نویسی بحر
          </p>
          <div className="w-11/12 mt-3 text-sm font-light">
            از کودکان تا بزرگسال
          </div>

          <div className="w-full flex flex-col items-center relative right-[85px] space-y-6 mt-[50px]">
            <div className="flex flex-col items-center relative left-[50px]">
              <div className="text-base font-bold  absolute left-[123px] top-[-3px] ">
                +100
              </div>
              <div className="text-sm">دانشجو فعال در دوره</div>
              <div className="flex space-x-[-10px] absolute  mt-[-10px] right-[-115px]">
                <img src="/AuthImage/n1.png" className="w-8 h-8 rounded-full" />
                <img src="/AuthImage/n2.png" className="w-8 h-8 rounded-full" />
                <img src="/AuthImage/w1.png" className="w-8 h-8 rounded-full" />
              </div>
            </div>

            <div className="flex flex-col items-center absolute top-30px mr-[20px]">
              <div className="text-base font-bold left-[69px] top-[22px] relative">
                +50
              </div>
              <div className="text-sm">اساتید برتر جهان</div>
              <div className="flex space-x-[-10px] relative  mt-[-28px] right-[-125px]">
                <img src="/AuthImage/w2.png" className="w-8 h-8 rounded-full" />
                <img src="/AuthImage/w3.png" className="w-8 h-8 rounded-full" />
                <img src="/AuthImage/w4.png" className="w-8 h-8 rounded-full" />
              </div>
            </div>
          </div>

          <div className="relative bottom-[-130px] right-[450px] whitespace-nowrap ">
            <p className="absolute left-[444px] bottom-0.5">همین حالا</p>
            <div dir="rtl" className="absolute left-[375px]">
              شروع کن به یادگیری!
            </div>
            <div className="dark:bg-slate-400 bg-[#2F2F2F] dark:text-black w-36 lg:h-11 absolute left-[370px] top-10 rounded-3xl text-gray-50 text-center py-2">
              جدیدترین دوره‌ها
            </div>
          </div>
        </div>



        <div className="hidden lg:block lg:h-48  lg:relative lg:bottom-[1020px] lg:w-[1440px] lg:text-center lg:flex lg:flex-col lg:font-Isan">
          <span className="lg:font-bold lg:text-3xl lg:justify-center">
            آموزش مدرن
          </span>
          <span className="lg:font-bold lg:text-3xl lg:justify-center">
            پیشرفت سریع
          </span>

          <div className="lg:text-center lg:flex lg:justify-center">
            <p className="lg:w-[280px] lg:break-words lg:mt-5 lg:text-sm lg:font-light">
              آکادمی آموزش تخصصی برنامه‌نویسی بحر از کودکان تا بزرگسال
            </p>
          </div>

          <div className="lg:relative lg:bottom-20 lg:right-[200px] lg:whitespace-nowrap">
            <p className="lg:absolute lg:left-[447px] lg:bottom-0.5">
              همین حالا
            </p>
            <div dir="rtl" className="lg:absolute lg:left-[375px]">
              شروع کن به یادگیری!
            </div>
            <div className="dark:bg-slate-400 lg:bg-[#2F2F2F] lg:w-36 lg:h-11 lg:absolute lg:left-[370px] lg:top-10 lg:rounded-3xl dark:text-black lg:text-gray-50 lg:text-center lg:py-2">
              جدیدترین دوره‌ها
            </div>
          </div>

          <div className="lg:relative lg:ml-200 lg:bottom-12 lg:whitespace-nowrap">
            <div className="lg:absolute lg:right-[240px] lg:bottom-3">
              <div className="lg:text-lg lg:absolute lg:left-[141px]">+100</div>
              دانشجو فعال در دوره
              <div className="lg:relative lg:left-44 lg:bottom-[-10px]">
                <img
                  src="/AuthImage/n1.png"
                  className="lg:absolute lg:left-[46px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px]"
                />
                <img
                  src="/AuthImage/n2.png"
                  className="lg:absolute lg:left-[10px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px]"
                />
                <img
                  src="/AuthImage/w1.png"
                  className="lg:absolute lg:left-[30px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px]"
                />
              </div>
            </div>
            <div className="lg:absolute lg:right-64">
              <div className="lg:text-lg lg:absolute lg:left-32">+50</div>
              <div className="right-[-13px] relative">اساتید برتر جهان</div>
              <div className="lg:left-40 lg:bottom-[70px] lg:relative">
                <img
                  src="/AuthImage/w2.png"
                  className="lg:absolute lg:left-[53px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px]"
                />
                <img
                  src="/AuthImage/w3.png"
                  className="lg:absolute lg:left-[10px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px]"
                />
                <img
                  src="/AuthImage/w4.png"
                  className="lg:absolute lg:left-[32px] lg:w-[32px] lg:h-[32px] lg:rounded-[240px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:relative hidden lg:block lg:bottom-[1450px] ">
        <div className="lg:w-full lg:absolute lg:top-[572px]  right-[-80px] lg:border-4 lg:"></div>
        <div className="lg:w-[290px] lg:absolute lg:top-[572px] left-[16px] lg:border-4 lg:border-[#3772FF] lg:rounded-r"></div>
        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[175px] lg:bg-[#3772FF] lg:rounded-full"></div>
        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[181px] lg:bg-[#FCFCFC] lg:rounded-full dark:bg-[#242424]"></div>

        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[449px] lg:bg-[#D9D9D9] lg:rounded-full"></div>
        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[455px] lg:bg-[#FCFCFC] lg:rounded-full dark:bg-[#242424]"></div>

        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[708px] lg:bg-[#D9D9D9] lg:rounded-full"></div>
        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[714px] lg:bg-[#FCFCFC] lg:rounded-full dark:bg-[#242424]"></div>

        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[977px] lg:bg-[#D9D9D9] lg:rounded-full"></div>
        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[983px] lg:bg-[#FCFCFC] lg:rounded-full dark:bg-[#242424]"></div>

        <div className="lg:w-6 lg:h-6 lg:absolute lg:top-[562px] lg:left-[1258px] lg:bg-[#D9D9D9] lg:rounded-full"></div>
        <div className="lg:w-3 lg:h-3 lg:absolute lg:top-[568px] lg:left-[1264px] lg:bg-[#FCFCFC] lg:rounded-full dark:bg-[#242424]"></div>
      </div>

      <div className="relative flex justify-center lg:hidden bottom-[3450px]">
        <div className="w-[393px] absolute top-[572px]  border-4 border-[#00000014]"></div>
        <div className="w-[150px] absolute top-[572px] right-[300px] border-4 border-[#3772FF] rounded-r"></div>
        <div className="w-6 h-6 absolute top-[562px]  right-[325px] bg-[#3772FF] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px]  right-[331px]  bg-[#FCFCFC] rounded-full"></div>
   
        <div className="w-6 h-6 absolute top-[562px] right-[245px]  bg-[#D9D9D9] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px] right-[251px]  bg-[#FCFCFC] rounded-full"></div>

        <div className="w-6 h-6 absolute top-[562px] left-[240px] bg-[#D9D9D9] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px] left-[246px] bg-[#FCFCFC] rounded-full"></div>

        <div className="w-6 h-6 absolute top-[562px] left-[310px] bg-[#D9D9D9] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px] left-[316px] bg-[#FCFCFC] rounded-full"></div>

        <div className="w-6 h-6 absolute top-[562px]  bg-[#D9D9D9] rounded-full"></div>
        <div className="w-3 h-3 absolute top-[568px]  bg-[#FCFCFC] rounded-full"></div>
      </div>
    </div>
  );
}

export default HeroSection;
