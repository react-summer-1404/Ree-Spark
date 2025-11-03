import React from "react";

const Teacher = () => {
  return (
    <div className="hidden lg:block">

      <div className="lg:w-[1440px] lg:h-[420px] lg:rounded-[32px] lg:flex lg:bg-[#2F2F2F] dark:lg:bg-slate-700 absolute lg:right-[2px] lg:top-[3000px]">
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
      

      <div className="w-[527px] h-[266px] absolute top-[px] left-[873px]  gap-6">
        <div className="relative top-[50px] right-[20px]">
        <div className="w-[527px] h-[34px] text-[#FCFCFC] text-[24px] font-sans font-bold text-right ">
          اساتید برتر هفته آکادمی
        </div>

        <div className="w-[527px] h-[145px] text-[#F6F6F6] text-[19px] font-sans font-medium text-right  mt-4 ">
          در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود
          تقدیر کند. این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های
          مختلف برنامه‌نویسی، نه تنها به ارتقاء مهارت‌های دانشجویان کمک
          کرده‌اند، بلکه با برگزاری کارگاه‌ها و جلسات مشاوره، فضایی پویا و
          انگیزشی را برای یادگیری فراهم آورده‌اند.
        </div>
        <button className="w-[119px] h-[39px] rounded-[40px] py-2 px-4 bg-[#3772FF] float-right mt-7">
            <h5 className="w-[87px] h-[23px] text-[#FCFCFC] text-[16px] font-sans font-medium ">صفحه اساتید</h5>
        </button>
      </div>
</div>
      <div className="w-[50px] h-[50px] absolute top-[350px] left-[759px] rotate-[17px]">
        <img src="../../../../public/AuthImage/Star 2.png" alt="" />
      </div>
      <div className="w-[43px] h-[43px] absolute top-[30px] left-[112px] rotate-[17px]">
        <img src="../../../../public/AuthImage/Star 1.png" alt="" />
      </div>

    </div>
   </div> 
  );
};

export { Teacher };
