import React from "react";

const TeacherRespansive = () => {
  return (
    <div className="lg:hidden block">

      <div className="w-[393px] h-[1190px] rounded-[32px] flex bg-[#2F2F2F] dark:bg-slate-700 absolute right-[1px] top-[5150px] ">
        <div className="w-[361px] h-[717px] absolute left-[20px] bg-[#353535] rounded-[24px] dark:bg-slate-800 top-[445px] ">
          {/* border */}
          <div className="w-[873px] h-[154px] absolute top-[1px] left-[100px]">
            <img src="../../../../public/AuthImage/Vector 1.png" alt="" />
          </div>

          {/* first */}
             <div className="absolute left-[115px]">      
          <div className="w-[104px] h-[104px] absolute top-[56px] left-[] rounded-[50%] overflow-hidden">
            <img src="../../../../public/AuthImage/image4.png" alt="" />
          </div>
          <div className="absolute left-[15px]">
          <div className="w-8 h-8 absolute top-[168px] left-[]">
            <img src="../../../../public/AuthImage/icons8-medal-50.png" alt="" />
          </div>
          <h2 className="w-[33px] h-[29px] absolute top-[170px] left-[40px] text-[#FCFCFC] font-sans text-[19px] font-medium">
            4.8
          </h2>
          </div>
          <h4 className="w-[152px] h-[23px] absolute top-[208px] left-[-16px] font-medium text-[15px] text-[#FCFCFC]">
            محمدحسین بحرالعلومی
          </h4>
      </div>

          {/* second */}
          <div className=" absolute top-[309px] left-[120px] ">
          <div className="w-[88px] h-[88px]rounded-[50%]">
            <img src="../../../../public/AuthImage/image1.png" alt="" />
          </div>
          <div className="absolute bottom-[230px] left-[15px]">
          <div className="w-8 h-8 absolute top-[235px] left-[]">
            <img
              src="../../../../public/AuthImage/icons8-medal-second-place-50.png"
              alt=""
            />
          </div>
          <h2 className="w-[33px] h-[29px] absolute top-[237px] left-[35px] text-[#FCFCFC] font-sans text-[19px] font-medium">
            4.2
          </h2>
          <h4 className="w-[113px] h-[23px] absolute top-[275px] left-[-20px] font-medium text-[15px] text-[#FCFCFC]">
            محسن اسفندیاری
          </h4>
        </div>
      </div>
          {/* third */}
          <div className="absolute top-[350px] left-[-10px]">          
            <div className="w-[88px] h-[88px] absolute top-[139px] left-[148px] rounded-[50%]">
            <img src="../../../../public/AuthImage/image2.png" alt="" />
          </div>
          <div className="w-8 h-8 absolute top-[235px] left-[156px]">
            <img
              src="../../../../public/AuthImage/icons8-medal-third-place-50.png"
              alt=""
            />
          </div>
          <h2 className="w-[33px] h-[29px] absolute top-[237px] left-[192px] text-[#FCFCFC] font-sans text-[19px] font-medium">
            4.1
          </h2>
          <h4 className="w-[136px] h-[23px] absolute top-[275px] left-[124px] font-medium text-[15px] text-[#FCFCFC]">
            محمدحسین خلیل‌پور
          </h4>
        </div>
        </div>


        <div className="block">
          <div className="w-[527px] h-[266px] absolute top-[0px] left-[3px] gap-6">
            <div className="relative top-[50px] right-[20px]">
              <div className="w-[527px] h-[34px] text-[#FCFCFC] relative left-[-142px] text-[24px] font-sans font-bold text-right">
                اساتید برتر هفته آکادمی
              </div>

              <div dir="rtl" className="w-[350px] absolute left-[35px] h-[145px] text-[#F6F6F6] text-[19px] font-sans font-medium text-right mt-4">
                در هفته جاری، اکادمی برنامه‌نویسی ما مفتخر است که از اساتید برتر خود تقدیر کند.
                این اساتید با دانش عمیق و تجربه گسترده خود در زمینه‌های مختلف برنامه‌نویسی،
                نه تنها به ارتقاء مهارت‌های دانشجویان کمک کرده‌اند، بلکه با برگزاری کارگاه‌ها
                و جلسات مشاوره، فضایی پویا و انگیزشی را برای یادگیری فراهم آورده‌اند.
              </div>

              <button className="w-[119px] right-[140px] top-[280px] absolute h-[39px] rounded-[40px] py-2 px-4 bg-[#3772FF] float-right mt-7 ">
                <h5 className="w-[87px] h-[23px] text-[#FCFCFC] text-[16px] font-sans font-medium">
                  صفحه اساتید
                </h5>
              </button>
            </div>
          </div>

          <div className="w-[50px] h-[50px] absolute top-[1130px] left-[300px] rotate-[17deg]">
            <img src="../../../../public/AuthImage/Star 2.png" alt="" />
          </div>

          <div className="w-[43px] h-[43px] absolute top-[435px] left-[60px] rotate-[17deg]">
            <img src="../../../../public/AuthImage/Star 1.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { TeacherRespansive };
