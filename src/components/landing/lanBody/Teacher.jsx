import React from "react";
import {TeacherRespansive} from "./TeacherRespansive"
const Teacher = () => {
  return (
    <>
    <div className="hidden lg:block">

      <div className="lg:w-[1440px] lg:h-[420px] lg:rounded-[32px] lg:flex lg:bg-[#2F2F2F] dark:lg:bg-slate-700 absolute lg:right-[2px] lg:top-[3260px]">
      <div className="lg:w-[768px] lg:h-[356px] lg:absolute lg:left-[39px] lg:bg-[#353535] lg:rounded-[24px] lg:dark:bg-slate-800 lg:top-[30px]">
        {/* border */}
        <div className="lg:w-[873px] lg:h-[154px] lg:absolute lg:top-[97px]">
          <img src="../../../../public/AuthImage/blueborder.png" alt="" />
        </div>

        {/* first */}
        <div className="lg:w-[104px] lg:h-[104px] lg:absolute lg:top-[56px] lg:left-[332px] lg:rounded-[50%] lg:overflow-hidden">
          <img src="../../../../public/AuthImage/image4.png" alt="" />
        </div>
        <div className="lg:w-8 lg:h-8 lg:absolute lg:top-[168px] lg:left-[340px]">
          <img src="../../../../public/AuthImage/icons8-medal-50.png" alt="" />
        </div>
        <h2 className="lg:w-[33px] lg:h-[29px] lg:absolute lg:top-[170px] lg:left-[376px] lg:text-[#FCFCFC] lg:font-sans lg:text-[19px] lg:font-medium">
          4.8
        </h2>
        <h4 className="lg:w-[152px] lg:h-[23px] lg:absolute lg:top-[208px] lg:left-[308px] lg:font-medium lg:text-[15px] lg:text-[#FCFCFC]">
          محمدحسین بحرالعلومی
        </h4>

        {/* second */}
        <div className="lg:w-[88px] lg:h-[88px] lg:absolute lg:top-[139px] lg:left-[532px] lg:rounded-[50%]">
          <img src="../../../../public/AuthImage/image1.png" alt="" />
        </div>
        <div className="lg:w-8 lg:h-8 lg:absolute lg:top-[235px] lg:left-[540px]">
          <img
            src="../../../../public/AuthImage/icons8-medal-second-place-50.png"
            alt=""
          />
        </div>
        <h2 className="lg:w-[33px] lg:h-[29px] lg:absolute lg:top-[237px] lg:left-[576px] lg:text-[#FCFCFC] lg:font-sans lg:text-[19px] lg:font-medium">
          4.2
        </h2>
        <h4 className="lg:w-[113px] lg:h-[23px] lg:absolute lg:top-[275px] lg:left-[519px] lg:font-medium lg:text-[15px] lg:text-[#FCFCFC]">
          محسن اسفندیاری
        </h4>

        {/* third */}
        <div className="lg:w-[88px] lg:h-[88px] lg:absolute lg:top-[139px] lg:left-[148px] lg:rounded-[50%]">
          <img src="../../../../public/AuthImage/image2.png" alt="" />
        </div>
        <div className="lg:w-8 lg:h-8 lg:absolute lg:top-[235px] lg:left-[156px]">
          <img
            src="../../../../public/AuthImage/icons8-medal-third-place-50.png"
            alt=""
          />
        </div>
        <h2 className="lg:w-[33px] lg:h-[29px] lg:absolute lg:top-[237px] lg:left-[192px] lg:text-[#FCFCFC] lg:font-sans lg:text-[19px] lg:font-medium">
          4.1
        </h2>
        <h4 className="lg:w-[136px] lg:h-[23px] lg:absolute lg:top-[275px] lg:left-[124px] lg:font-medium lg:text-[15px] lg:text-[#FCFCFC]">
          محمدحسین خلیل‌پور
        </h4>
      </div>
      

    <div className="hidden lg:block">
  <div className="lg:w-[527px] lg:h-[266px] lg:absolute lg:top-[0px] lg:left-[873px] lg:gap-6">
    <div className="lg:relative lg:top-[50px] lg:right-[20px]">
      <div className="lg:w-[527px] lg:h-[34px] lg:text-[#FCFCFC] lg:text-[24px] lg:font-sans lg:font-bold lg:text-right">
        اساتید برتر هفته آکادمی
      </div>

      <div className="lg:w-[527px] lg:h-[145px] lg:text-[#F6F6F6] lg:text-[19px] lg:font-sans lg:font-medium lg:text-right lg:mt-4">
        در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود تقدیر کند.
        این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های مختلف برنامه‌نویسی،
        نه تنها به ارتقاء مهارت‌های دانشجویان کمک کرده‌اند، بلکه با برگزاری کارگاه‌ها
        و جلسات مشاوره، فضایی پویا و انگیزشی را برای یادگیری فراهم آورده‌اند.
      </div>

      <button className="lg:w-[119px] lg:h-[39px] lg:rounded-[40px] lg:py-2 lg:px-4 lg:bg-[#3772FF] lg:float-right lg:mt-7">
        <h5 className="lg:w-[87px] lg:h-[23px] lg:text-[#FCFCFC] lg:text-[16px] lg:font-sans lg:font-medium">
          صفحه اساتید
        </h5>
      </button>
    </div>
  </div>

  <div className="lg:w-[50px] lg:h-[50px] lg:absolute lg:top-[350px] lg:left-[759px] lg:rotate-[17deg]">
    <img src="../../../../public/AuthImage/Star 2.png" alt="" />
  </div>

  <div className="lg:w-[43px] lg:h-[43px] lg:absolute lg:top-[30px] lg:left-[112px] lg:rotate-[17deg]">
    <img src="../../../../public/AuthImage/Star 1.png" alt="" />
  </div>
</div>


    </div>
   </div> 
      <TeacherRespansive/>

   </>
  );
};

export { Teacher };
 