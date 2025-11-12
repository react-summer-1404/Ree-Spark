import React from 'react'

const HeroSectionRespansive =() =>  {
  return (
  <div className="w-full relative ">
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
      </div>
  )
}

export  {HeroSectionRespansive}
