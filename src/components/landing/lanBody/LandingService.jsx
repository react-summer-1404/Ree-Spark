import React from "react";
import { LandingServiceResponsive } from "./Respansive/LandingServiceRespansive";
function LandingServices() {
  return (
    <div>
    {/* {mobile} */}
    <div className="">
 <LandingServiceResponsive/>
</div>
      {/* {info desktop} */}
    <div className="lg:top-[200px] xl:hidden lg:relative">
      <div className="lg:relative  lg:text-center lg:top-[380px] lg:justify-center  lg:font-bold lg:text-2xl  lg:text-[32px]  lg:dark:text-white  ">
        اهداف ما در اکادمی
      </div>

      <div className="lgg:w-full lgg:left-0 lg:w-[1000px] hidden  lg:h-[500px] lg:top-[430px] lg:left-[80px] lg:relative lg:flex lg:flex-wrap lg:justify-center xl:gap-[32px] lg:gap-[34px] ">
        <div className="  lgg:w-[280px] lgg:h-[410px] lg:h-[434px]  lg:w-[321px] lg:bg-[#FCFCFC] lg:border lg:border-[#DCDCDC] lg:rounded-3xl lg:hover:border-[#3772FF] transition-[0.3s] lg:dark:bg-slate-700">
          <h1 className="lg:text-right lg:text-[20px] lg:relative  lg:top-5 lg:right-[14px] lg:text-base lg:font-bold">
            آماده سازی برای بازار کار
          </h1>
          <div className="lg:relative lg:top-[30px] lgg:left-[-10px] lg:left-[30px] xl:left-[24px] lg:text-[#7E7E7E] lg:break-words  lg:w-[275px]  lg:font-medium lg:text-base lg:text-right lg:leading-7">
        جلسات تنظیم <span dir="ltr">cv</span>  برای ساخت‌واشتراک رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی برای شرکت ها
          </div>
          <img
            src="../../../../public/AuthImage/L4.png"
            className="lg:relative lg:left-[30px] lgg:left-[10px] lg:top-[60px] lg:w-[250px] lg:h-[216px] "
          ></img>
        </div>

        <div className="lg:w-[321px] lgg:w-[280px] lgg:h-[410px] lg:h-[434px]  lg:bg-[#FCFCFC] lg:border lg:border-[#DCDCDC] lg:rounded-3xl lg:hover:border-[#3772FF] transition-[0.3s] lg:dark:bg-slate-700">
          <h1 className="lg:text-right lg:text-[20px] lg:relative lg:top-5 lg:right-[14px] lg:text-base lg:font-bold">
            آموزش‌های تخصصی
          </h1>
          <p
            dir="rtl"
            className="lg:relative xl:w-[278px] lg:left-[30px] lg:w-[278px] lgg:w-[250px] lg:text-[#7E7E7E] lg:break-words lg:top-[35px] lgg:left-[15px] xl:left-[24px] lg:font-medium lg:text-base lg:text-right lg:leading-7"
          >
            کارگاه های تخصصی و تکمیلی برای کار با پلتفرم های بازاری مورد اقبال و
            برگزاری تورنمت های تیمی رقابتی برای تقویت روحیه کار تیمی و...
          </p>
          <img
            src="../../../../public/AuthImage/L3.png"
            className="lg:relative lg:left-3   lg:top-14 lg:w-[250px] lg:h-[216px]"
          ></img>
        </div>
            
                
              <div className="lg:w-[321px]  lg:h-[434px] lgg:w-[280px] lgg:h-[410px]  lg:bg-[#FCFCFC] lg:border lg:border-[#DCDCDC] lg:rounded-3xl lg:hover:border-[#3772FF] transition-[0.3s] lg:dark:bg-slate-700">
          <h1 className="lg:text-right lg:text-[20px] lg:relative lg:top-5 lg:right-[14px] lg:text-base lg:font-bold">
            راهنمایی و ایجاد انگیزه
          </h1>
          <p className="lg:relative lg:top-[35px] lg:left-[34px]  xl:left-[24px] lgg:left-[20px] lg:text-[#7E7E7E] lg:font-medium lg:break-words lgg:w-[240px] lg:w-[270px] lg:text-right lg:leading-7">
            آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل محور
            برای تحریک ذهنیت خلاق در طول فرآیند آموزش
          </p>
          <img
            src="../../../../public/AuthImage/L2.png"
            className="lg:relative lg:left-[38px] lg:top-[55px] lg:w-[250px] lg:h-[216px]"
          ></img>
        </div>

        <div className="lg:w-[321px] lgg:w-[280px] lgg:h-[410px] lg:h-[434px] lg:bg-[#FCFCFC] lg:border lg:border-[#DCDCDC] lg:rounded-3xl lg:hover:border-[#3772FF] transition-[0.3s] lg:dark:bg-slate-700">
          <h1 className="lg:text-right lg:text-[20px] lg:relative lg:top-5 lg:right-[23px] lg:text-base lg:font-bold">
            استعدادیابی
          </h1>
          <p
            dir="rtl"
            className="lg:relative xl:w-[278px] lg:left-[20px] lg:w-[278px] lgg:w-[250px] lgg:break-words lg:text-[#7E7E7E] lg:break-words lg:top-[35px] lgg:left-[7px] xl:left-[24px] lg:font-medium lg:text-base lg:text-right lg:leading-7"
          >
            یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی صرف نظر
            از سن، رشته تحصیلی، جغرافیا و جنسیت و...
          </p>  
          <img
            src="../../../../public/AuthImage/L1.png"
            className="lg:relative lg:left-[18px] lg:top-[65px] lg:w-[250px] lg:h-[216px]"
          ></img>
        </div>
      </div>
    </div>


 
   {/* {service desktop} */}
      <div className="lg:block hidden xl:hidden">
        
      <div className="lg:flex  lg:flex-col lg:flex-wrap lg:justify-center lg:relative lg:top-[1230px] lgg:top-[650px] lg:w-full  lg:h-[500px] lg:left-[-200px]  lgg:left-[50px] lgg:gap-0 lg:gap-[50px] xl:gap-[20px] lg:text-dark lg:dark:text-white">
        <div className="lg:relative text-center lgg:top-[-50px] lgg:left-[260px]  lg:top-[-340px] lg:left-[610px]">
          <div className="lg:flex lg:justify-center lg:font-bold lg:text-3xl ">
            خدماتی که ما در طی دوره‌ها
          </div>
          <div className="lg:flex lg:justify-center lg:font-bold lg:text-3xl lg:mt-[10px]">
            به شما ارائه میدیم
          </div>
        </div>
        <div className="lg:relative lg:left-[20px] lg:gap-[22px] flex flex-col">
        <div className="lg:bg-[#F6F6F6] lg:border lg:border-[#DCDCDC] lgg:w-[550px] lgg:h-[144px] lg:w-[361px] lg:h-[235px] lg:rounded-[32px] lg:text-right  lg:dark:bg-slate-700 lg:hover:border-[#3772FF] transition-[0.3s] ">
         <div className="lg:relative lg:bottom-[-85px] lgg:bottom-[10px] lgg:right-[20px] lg:right-[33px]">
          <h1 className="lg:font-bold lg:text-xl lg:relative lgg:right-24 lg:right-[-1px] lg:top-10">
            آزمون ها
          </h1>
        
          <p className="lg:right-[-61px] lgg:right-[-151px] lg:top-[48px] lg:relative lg:text-[#707070] lg:w-[300px] lg:break-words ">
            با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید
          </p>
        </div>
          <div className="lg:w-[88px] lg:h-[88px] lg:bg-[#FCFCFC] lg:border lg:border-[#DCDCDC] lg:relative lg:left-[250px] lgg:left-[445px] lg:bottom-[47px] lg:rounded-full lg:hover:border-[#3772FF] transition-[0.3s] lg:dark:bg-slate-700">
            <img
              src="../../../../public/AuthImage/task-daily-01 (2).png"
              className="lg:absolute lg:left-[22px] lg:top-5"
            ></img>
          </div>
        </div>

   
         <div className="lg:bg-[#F6F6F6] lg:border lg:border-[#DCDCDC] lgg:w-[550px] lgg:h-[144px] lg:w-[361px] lg:h-[235px] lg:rounded-[32px] lg:text-right  lg:dark:bg-slate-700 lg:hover:border-[#3772FF] transition-[0.3s] ">
              <div className="lg:relative lg:bottom-[-85px] lgg:bottom-[10px] lgg:right-[20px] lg:right-[33px]">
         <h1 className="lg:font-bold lg:text-xl lg:relative lgg:right-24 lg:right-[-1px] lg:top-10">
            مدرک معتبر  
        </h1>
          <p className="lg:right-[-58px] lgg:right-[-150px] lg:top-[48px] lg:relative lg:text-[#707070]  lg:w-[300px] lg:break-words">
            با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه
          </p>
          </div>
              <div className="lg:w-[88px] lg:h-[88px] lg:bg-[#FCFCFC] lg:border lg:border-[#DCDCDC] lg:relative lg:left-[250px] lgg:left-[445px] lg:bottom-[47px] lg:rounded-full lg:hover:border-[#3772FF] transition-[0.3s] lg:dark:bg-slate-700">
            <img
              src="../../../../public/AuthImage/job-link.png"
              className="lg:absolute lg:left-[22px] lg:top-5"
            ></img>
          </div>
        </div>
      </div>



      <div className=" lg:relative   xl:gap-[21px] xl:top-[45px] lgg:gap-[22px] lg:gap-[20px] lgg:top-[40px] lg:top-0 lgg:right-[32px] lg:right-0 lg:flex lg:flex-col ">
         <div className="lg:bg-[#F6F6F6] lg:border lg:border-[#DCDCDC] lgg:w-[550px] lgg:h-[144px] lg:w-[361px] lg:h-[235px] lg:rounded-[32px] lg:text-right  lg:dark:bg-slate-700 lg:hover:border-[#3772FF] transition-[0.3s] ">
           <div className="lg:relative lg:bottom-[-85px] lgg:bottom-[10px] lgg:right-[20px] lg:right-[-80px]">
          <h1 className="lg:font-bold lg:text-xl lg:relative lg:right-24 lg:top-10">
            فرصت‌های شغلی
          </h1>
          <p className="lg:right-[38px] lgg:right-[-151px] lgg:top-[48px]  lg:top-[48px] lg:relative lg:text-[#707070]  lg:w-[300px] lg:break-words">
            با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده میشه
          </p>
          </div>
              <div className="lg:w-[88px] lg:h-[88px] lg:bg-[#FCFCFC] lg:border lg:border-[#DCDCDC] lg:relative lg:left-[250px] lgg:left-[445px] lg:bottom-[50px] lgg:bottom-[47px] lg:rounded-full lg:hover:border-[#3772FF] transition-[0.3s] lg:dark:bg-slate-700">
              <img
              src="../../../../public/AuthImage/document-validation.png"
              className="lg:absolute lg:left-[22px] lg:top-5"
            ></img>
          </div>
        </div>
 
        <div className="lg:bg-[#F6F6F6] lg:border lg:border-[#DCDCDC] lgg:w-[550px] lgg:h-[144px] lg:w-[361px] lg:h-[235px] lg:rounded-[32px] lg:text-right  lg:dark:bg-slate-700 lg:hover:border-[#3772FF] transition-[0.3s] ">
                   <div className="lg:relative lg:bottom-[-85px] lgg:bottom-[10px] lgg:right-[20px] lg:right-[-80px]">

          <h1 className="lg:font-bold lg:text-xl lg:relative lg:right-24 lg:top-10">
            مشاوره 24 ساعته
          </h1>
          <p className="lg:right-[38px] lgg:right-[-151px] lgg:top-[48px]  lg:top-[48px] lg:relative lg:text-[#707070]  lg:w-[300px] lg:break-words">
            مشاورین ما 24 ساعته جوابگو سوال های شما هستند
          </p>
   <div className="lg:w-[88px] lg:h-[88px] lg:bg-[#FCFCFC] lg:border lg:border-[#DCDCDC] lg:relative lg:left-[170px] lgg:left-[445px] lg:bottom-[140px] lgg:bottom-[47px] lg:rounded-full lg:hover:border-[#3772FF] transition-[0.3s] lg:dark:bg-slate-700">                  <img
              src="../../../../public/AuthImage/message-user-01.png"
              className="lg:absolute lg:left-[22px] lg:top-5"
            ></img>
          </div>
        </div>
        </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default LandingServices;
