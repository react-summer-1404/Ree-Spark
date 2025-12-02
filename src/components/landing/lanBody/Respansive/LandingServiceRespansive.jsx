import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
const LandingServiceResponsive = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };
  const boxVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
    exit: {
      opacity: 0,
      y: -40,
      transition: { duration: 0.9, ease: "easeIn" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
  };
  return (
    <div>
      {/* {info mobile} */}
      <div className="">
        <div className="lg:hidden relative ">
          <div className="  flex-col">
            <div className="relative bottom-[80px]">
              <div className="relative  flex justify-center top-[840px]  font-bold text-2xl text-[32px]">
                اهداف ما در اکادمی
              </div>

              <div className="w-[100px] h-[2300px] left-[15px] top-[870px] relative dark:text-white ">
                <div className="w-[321px] h-[404px] bg-[#FCFCFC] border border-[#DCDCDC] rounded-3xl hover:border-[#3772FF] transition-[0.3s] dark:bg-slate-700">
                  <h1 className="text-right text-[20px] relative  top-5 right-[22px] text-base font-bold">
                    استعدادیابی
                  </h1>
                  <p
                    dir="rtl"
                    className="relative  font-medium text-base text-right leading-7 top-[45px] left-[24px] text-[#7E7E7E] break-words w-[275px]"
                  >
                    یافتن رگه های علاقه و استعداد در دوره های پایلوت استعدادیابی
                    صرف نظر از سن ، رشته تحصیلی ، جغرافیا و جنسیت و ...
                  </p>
                  <img
                    src="../../../../public/AuthImage/L1.png"
                    className="relative left-8 top-14 w-[260px] h-[236px]"
                  />
                </div>

                <div className="w-[321px] h-[434px] bg-[#FCFCFC] border border-[#DCDCDC] relative mt-7 hover:border-[#3772FF] transition-[0.3s] rounded-3xl dark:bg-slate-700">
                  <h1 className="text-right text-[20px] relative  top-5 right-[22px] text-base font-bold">
                    راهنمایی و ایجاد انگیزه
                  </h1>
                  <p
                    dir="rtl"
                    className="relative lg:break-words top-[45px] left-[24px] font-medium text-base text-right leading-7 text-[#7E7E7E] break-words w-[275px]"
                  >
                    آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل
                    محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش
                  </p>
                  <img
                    src="../../../../public/AuthImage/L2.png"
                    className="relative  w-[260px] h-[236px] top-[75px] left-[50px]"
                  />
                </div>

                <div className="w-[321px] h-[434px] bg-[#FCFCFC] border border-[#DCDCDC] relative mt-7 hover:border-[#3772FF] transition-[0.3s] rounded-3xl dark:bg-slate-700">
                  <h1 className="text-right text-[20px] relative  top-[20px] right-[18px] text-base font-bold">
                    راهنمایی و ایجاد انگیزه
                  </h1>
                  <p className="relative w-[278px]  top-[45px] left-[24px] font-medium text-right leading-7 text-[#7E7E7E]">
                    آشنایی با پشته ای تکنولوژیک از زبان های کدنویسی با نگاهی عمل
                    محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش
                  </p>
                  <img
                    src="../../../../public/AuthImage/L3.png"
                    className="relative left-8 top-[75px] w-[260px] h-[236px]"
                  />
                </div>

                <div className="w-[321px] h-[434px] bg-[#FCFCFC] border border-[#DCDCDC] relative mt-7 hover:border-[#3772FF] transition-[0.3s] rounded-3xl dark:bg-slate-700">
                  <h1 className="text-right text-[20px] relative  top-[20px] right-[18px] text-base font-bold">
                    آماده سازی برای بازار کار
                  </h1>
                  <p
                    dir="rtl"
                    className="relative top-[45px] right-[-27px] break-words w-[275px] font-medium text-base text-right leading-7 text-[#7E7E7E]"
                  >
                    جلسات تنظیم <span dir="ltr">cv</span> برای ساخت‌واشتراک
                    رزومه فنی دربسترهای داخلی و بین المللی کاریابی و آماده سازی
                    برای شرکت ها
                  </p>
                  <img
                    src="../../../../public/AuthImage/L4.png"
                    className="relative left-8 top-[75px] w-[260px] h-[236px]"
                  />
                </div>
              </div>
            </div>

            {/* {service mobile} */}

            <div className="relative bottom-[120px]">
              <div className="relative top-[530px] flex justify-center whitespace-nowrap">
                <div className="  text-center font-bold text-3xl absolute ">
                  خدماتی که ما در طی دوره‌ها
                </div>
                <div className="flex justify-center absolute top-[40px] font-bold text-3xl">
                  به شما ارائه میدیم
                </div>
              </div>

              <div className="lg:hidden justify-center flex  relative top-[650px] dark:text-white  h-[1200px]  ">
                <div className="">
                  <div className="bg-[#F6F6F6] border border-[#DCDCDC] w-[361px] h-[235px] rounded-[32px] dark:bg-slate-700 text-right relative hover:border-[#3772FF] transition-[0.3s]">
                    <div className="absolute top-16 ">
                      <h1 className="font-bold text-xl relative right-[-34px] top-10">
                        مدرک معتبر
                      </h1>
                      <p className="right-[-34px] top-10 relative w-[300px] break-before-all mt-2">
                        با مدرک ما میتوانید به راحتی در همه جا استخدام بشید
                      </p>
                    </div>
                    <div className="w-[88px] h-[88px] bg-[#FCFCFC] border border-[#DCDCDC] relative left-[260px] bottom-[-10px] rounded-[100px] dark:bg-slate-700 hover:border-[#3772FF] transition-[0.3s]">
                      <img
                        src="../../../../public/AuthImage/document-validation.png"
                        className="absolute left-[22px] top-5"
                      />
                    </div>
                  </div>

                  <div className="bg-[#F6F6F6] border border-[#DCDCDC] w-[361px] h-[235px] rounded-[32px] text-right relative mt-[20px] hover:border-[#3772FF] transition-[0.3s] dark:bg-slate-700">
                    <div className="absolute top-16 ">
                      <h1 className="font-bold text-xl relative right-[-34px] top-10">
                        ازمون ها
                      </h1>
                      <p className="right-[-34px] top-10 relative w-[300px] break-before-all mt-2">
                        با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو
                        بسنجید
                      </p>
                    </div>
                    <div className="w-[88px] h-[88px] bg-[#FCFCFC] border border-[#DCDCDC] relative left-[260px] bottom-[-10px] rounded-[100px] hover:border-[#3772FF] transition-[0.3s] dark:bg-slate-700">
                      <img
                        src="../../../../public/AuthImage/task-daily-01 (2).png"
                        className="absolute left-[24px] top-5"
                      />
                    </div>
                  </div>

                  <div className="bg-[#F6F6F6] border border-[#DCDCDC] w-[361px] h-[235px] rounded-[32px] text-right relative mt-[25px] hover:border-[#3772FF] transition-[0.3s] dark:bg-slate-700">
                    <div className="absolute top-16 ">
                      <h1 className="font-bold text-xl relative right-[-34px] top-10">
                        مشاوره 24 ساعته
                      </h1>
                      <p className="right-[-34px] top-10 relative w-[300px] break-before-all mt-2">
                        مشاورین ما 24 ساعته جوابگو سوال های شما هستند
                      </p>
                    </div>
                    <div className="w-[88px] h-[88px] bg-[#FCFCFC] border border-[#DCDCDC] relative left-[260px] bottom-[-10px] rounded-[100px] hover:border-[#3772FF] transition-[0.3s] dark:bg-slate-700">
                      <img
                        src="../../../../public/AuthImage/message-user-01.png"
                        className="absolute left-[24px] top-5"
                      />
                    </div>
                  </div>

                  <div className="bg-[#F6F6F6] border border-[#DCDCDC] w-[361px] h-[235px] rounded-[32px] text-right relative mt-[25px] hover:border-[#3772FF] transition-[0.3s] dark:bg-slate-700">
                    <div className="absolute top-16 ">
                      <h1 className="font-bold text-xl relative right-[-34px] top-10">
                        فرصت‌های شغلی
                      </h1>
                      <p className="right-[-34px] top-10 relative w-[300px] break-before-all mt-2">
                        با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد
                        داده میشه
                      </p>
                    </div>
                    <div className="w-[88px] h-[88px] bg-[#FCFCFC] border border-[#DCDCDC] relative left-[260px] bottom-[-10px] rounded-[100px] hover:border-[#3772FF] transition-[0.3s] dark:bg-slate-700">
                      <img
                        src="../../../../public/AuthImage/job-link.png"
                        className="absolute left-[22px] top-5"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* {xl Desktop} */}
      <motion.div
        className="xl:top-[240px] lg:hidden xl:block xl:relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="xl:relative hidden xl:block xl:text-center xl:top-[390px] xl:right-5 xl:justify-center xl:font-bold xl:text-[32px] xl:dark:text-white">
          اهداف ما در آکادمی
        </div>

        <div className="xl:w-full hidden xl:h-[500px] xl:top-[430px] xl:right-5 xl:relative xl:flex xl:justify-center xl:gap-[28px]">
          {[
            {
              title: "آماده سازی برای بازار کار",
              text: "              جلسات تنظیم cv برای ساخت‌واشتراک رزومه فنی در بسترهای داخلی و بین‌المللی کاریابی و آماده‌سازی برای شرکت‌ها",
              img: "../../../../public/AuthImage/L4.png",
            },
            {
              title: "آموزش‌های تخصصی",
              text: "کارگاه‌های تخصصی و تکمیلی برای کار با پلتفرم‌های بازاری مورد اقبال و برگزاری تورنمنت‌های تیمی رقابتی برای تقویت روحیه کار تیمی و",
              img: "../../../../public/AuthImage/L3.png",
            },
            {
              title: "راهنمایی و ایجاد انگیزه",
              text: "              آشنایی با پشته‌ای تکنولوژیک از زبان‌های کدنویسی با نگاهی عمل‌محور برای تحریک ذهنیت خلاق در طول فرآیند آموزش",
              img: "../../../../public/AuthImage/L2.png",
            },
            {
              title: "استعدادیابی",
              text: "              یافتن رگه‌های علاقه و استعداد در دوره‌های پایلوت استعدادیابی صرف نظر از سن، رشته تحصیلی، جغرافیا و جنسیت و",
              img: "../../../../public/AuthImage/L1.png",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.7 }}
              className="xl:w-[321px] xl:h-[434px] xl:bg-[#FCFCFC] xl:border xl:border-[#DCDCDC] xl:rounded-3xl xl:hover:border-[#3772FF] transition-all duration-300 xl:dark:bg-slate-700"
            >
              <h1 className="xl:text-right xl:text-[20px] xl:relative xl:top-5 xl:right-[20px] xl:font-bold">
                {item.title}
              </h1>

              <p className="xl:relative xl:top-[30px] xl:left-[24px] xl:text-[#7E7E7E] dark:text-slate-400 xl:break-words xl:w-[275px] xl:font-medium xl:text-base xl:text-right xl:leading-7">
                {item.text}
              </p>

              <img
                src={item.img}
                className="xl:relative xl:left-8 xl:top-[75px] xl:w-[260px] xl:h-[236px]"
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* {xl Desktop} */}
      <div className="xl:block hidden lg:hidden">
        <div className="xl:flex xl:flex-col xl:flex-wrap xl:justify-center xl:relative xl:top-[690px] xl:w-full xl:h-[500px] xl:gap-[22px] xl:text-dark xl:dark:text-white">
          {/* عنوان */}
          <motion.div
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            viewport={{ once: false, amount: 0.5 }}
            className="xl:relative xl:left-[340px] top-[-20px] xl:bottom-14"
          >
            <div className="xl:flex xl:justify-center xl:font-bold xl:text-3xl">
              خدماتی که ما در طی دوره‌ها
            </div>
            <div className="xl:flex xl:justify-center xl:font-bold xl:text-3xl lg:mt-[15px]">
              به شما ارائه میدیم
            </div>
          </motion.div>

          {/* ستون اول */}
          <div className="xl:relative xl:left-[30px] xl:gap-[22px] flex flex-col">
            <motion.div
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.5 }}
              className="xl:bg-[#F6F6F6] xl:border xl:border-[#DCDCDC] xl:w-[664px] xl:h-[144px] xl:rounded-[32px] xl:text-right xl:dark:bg-slate-700 xl:hover:border-[#3772FF] transition-[0.3s]"
            >
              <div className="xl:relative xl:right-[40px]">
                <h1 className="xl:font-bold xl:text-xl xl:relative xl:right-24 xl:top-10">
                  آزمون ها
                </h1>
                <p className="xl:right-24 xl:top-[48px] dark:text-slate-400 xl:relative xl:text-[#707070]">
                  با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید
                </p>
              </div>
              <div className="xl:w-[88px] xl:h-[88px] xl:bg-[#FCFCFC] xl:border xl:border-[#DCDCDC] xl:relative xl:left-[540px] xl:bottom-7 xl:rounded-full xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
                <img
                  src="../../../../public/AuthImage/task-daily-01 (2).png"
                  className="xl:absolute xl:left-[22px] xl:top-5"
                />
              </div>
            </motion.div>

            <motion.div
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.5 }}
              className="xl:bg-[#F6F6F6] xl:border xl:border-[#DCDCDC] xl:w-[664px] xl:h-[144px] xl:rounded-[32px] xl:text-right xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700"
            >
              <div className="xl:relative xl:right-[40px]">
                <h1 className="xl:font-bold xl:text-xl xl:relative xl:right-24 xl:top-10">
                  مدرک معتبر
                </h1>
                <p className="xl:right-24 xl:top-[48px] xl:relative xl:text-[#707070] dark:text-slate-400">
                  با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده
                  میشه
                </p>
              </div>
              <div className="xl:w-[88px] xl:h-[88px] xl:bg-[#FCFCFC] xl:border xl:border-[#DCDCDC] xl:relative xl:left-[540px] xl:bottom-7 xl:rounded-full xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
                <img
                  src="../../../../public/AuthImage/job-link.png"
                  className="xl:absolute xl:left-[22px] xl:top-5"
                />
              </div>
            </motion.div>
          </div>

          {/* ستون دوم */}
          <div className="xl:relative xl:gap-[22px] xl:top-[55px] xl:right-[22px] xl:flex xl:flex-col">
            <motion.div
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.5 }}
              className="xl:bg-[#F6F6F6] xl:border xl:border-[#DCDCDC] xl:w-[664px] xl:h-[144px] xl:rounded-[32px] xl:text-right xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700"
            >
              <div className="xl:relative xl:right-[40px]">
                <h1 className="xl:font-bold xl:text-xl xl:relative xl:right-24 xl:top-10">
                  فرصت‌های شغلی
                </h1>
                <p className="xl:right-24 xl:top-[48px] xl:relative xl:text-[#707070] dark:text-slate-400">
                  با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده
                  میشه
                </p>
              </div>
              <div className="xl:w-[88px] xl:h-[88px] xl:bg-[#FCFCFC] xl:border xl:border-[#DCDCDC] xl:relative xl:left-[540px] xl:bottom-7 xl:rounded-full xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
                <img
                  src="../../../../public/AuthImage/document-validation.png"
                  className="xl:absolute xl:left-[22px] xl:top-5"
                />
              </div>
            </motion.div>

            <motion.div
              variants={boxVariants}
              initial="hidden"
              whileInView="visible"
              exit="exit"
              viewport={{ once: false, amount: 0.5 }}
              className="xl:bg-[#F6F6F6] xl:border xl:border-[#DCDCDC] xl:w-[664px] xl:h-[144px] xl:rounded-[32px] xl:text-right xl:relative xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700"
            >
              <div className="xl:relative xl:right-[40px]">
                <h1 className="xl:font-bold xl:text-xl xl:relative xl:right-24 xl:top-10">
                  مشاوره 24 ساعته
                </h1>
                <p className="xl:right-24 xl:top-[48px] xl:relative xl:text-[#707070] dark:text-slate-400">
                  مشاورین ما 24 ساعته جوابگو سوال های شما هستند
                </p>
              </div>
              <div className="xl:w-[88px] xl:h-[88px] xl:bg-[#FCFCFC] xl:border xl:border-[#DCDCDC] xl:relative xl:left-[580px] xl:bottom-7 xl:rounded-full xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
                <img
                  src="../../../../public/AuthImage/message-user-01.png"
                  className="xl:absolute xl:left-[22px] xl:top-5"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* <div className="xl:block hidden lg:hidden">
        <div className="xl:flex xl:flex-col xl:flex-wrap xl:justify-center xl:relative xl:top-[690px] xl:w-full xl:h-[500px] xl:gap-[22px] xl:text-dark xl:dark:text-white">
          <div className="xl:relative xl:left-[340px] top-[-20px] xl:bottom-14">
            <div className="xl:flex xl:justify-center xl:font-bold xl:text-3xl">
              خدماتی که ما در طی دوره‌ها
            </div>
            <div className="xl:flex xl:justify-center xl:font-bold xl:text-3xl lg:mt-[15px]">
              به شما ارائه میدیم
            </div>
          </div>

          <div className="xl:relative xl:left-[30px] xl:gap-[22px] flex flex-col">
            <div className="xl:bg-[#F6F6F6] xl:border xl:border-[#DCDCDC] xl:w-[664px] xl:h-[144px] xl:rounded-[32px] xl:text-right xl:dark:bg-slate-700 xl:hover:border-[#3772FF] transition-[0.3s]">
              <div className="xl:relative xl:right-[40px]">
                <h1 className="xl:font-bold xl:text-xl xl:relative xl:right-24 xl:top-10">
                  آزمون ها
                </h1>
                <p className="xl:right-24 xl:top-[48px] dark:text-slate-400 xl:relative xl:text-[#707070]">
                  با آزمون های تعیین سطح شما میتوانید سطح دانش خودتون رو بسنجید
                </p>
              </div>
              <div className="xl:w-[88px] xl:h-[88px] xl:bg-[#FCFCFC] xl:border xl:border-[#DCDCDC] xl:relative xl:left-[540px] xl:bottom-7 xl:rounded-full xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
                <img
                  src="../../../../public/AuthImage/task-daily-01 (2).png"
                  className="xl:absolute xl:left-[22px] xl:top-5"
                />
              </div>
            </div>

            <div className="xl:bg-[#F6F6F6] xl:border xl:border-[#DCDCDC] xl:w-[664px] xl:h-[144px] xl:rounded-[32px] xl:text-right xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
              <div className="xl:relative xl:right-[40px]">
                <h1 className="xl:font-bold xl:text-xl xl:relative xl:right-24 xl:top-10">
                  مدرک معتبر
                </h1>
                <p className="xl:right-24 xl:top-[48px] xl:relative xl:text-[#707070] dark:text-slate-400">
                  با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده
                  میشه
                </p>
              </div>
              <div className="xl:w-[88px] xl:h-[88px] xl:bg-[#FCFCFC] xl:border xl:border-[#DCDCDC] xl:relative xl:left-[540px] xl:bottom-7 xl:rounded-full xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
                <img
                  src="../../../../public/AuthImage/job-link.png"
                  className="xl:absolute xl:left-[22px] xl:top-5"
                />
              </div>
            </div>
          </div>

          <div className="xl:relative xl:gap-[22px] xl:top-[55px] xl:right-[22px] xl:flex xl:flex-col">
            <div className="xl:bg-[#F6F6F6] xl:border xl:border-[#DCDCDC] xl:w-[664px] xl:h-[144px] xl:rounded-[32px] xl:text-right xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
              <div className="xl:relative xl:right-[40px]">
                <h1 className="xl:font-bold xl:text-xl xl:relative xl:right-24 xl:top-10">
                  فرصت‌های شغلی
                </h1>
                <p className="xl:right-24 xl:top-[48px] xl:relative xl:text-[#707070] dark:text-slate-400">
                  با توجه به سطح توانایی شما فرصت های شغلی به شما پیشنهاد داده
                  میشه
                </p>
              </div>
              <div className="xl:w-[88px] xl:h-[88px] xl:bg-[#FCFCFC] xl:border xl:border-[#DCDCDC] xl:relative xl:left-[540px] xl:bottom-7 xl:rounded-full xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
                <img
                  src="../../../../public/AuthImage/document-validation.png"
                  className="xl:absolute xl:left-[22px] xl:top-5"
                />
              </div>
            </div>

            <div className="xl:bg-[#F6F6F6] xl:border xl:border-[#DCDCDC] xl:w-[664px] xl:h-[144px] xl:rounded-[32px] xl:text-right xl:relative xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
              <div className="xl:relative xl:right-[40px]">
                <h1 className="xl:font-bold xl:text-xl xl:relative xl:right-24 xl:top-10">
                  مشاوره 24 ساعته
                </h1>
                <p className="xl:right-24 xl:top-[48px] xl:relative xl:text-[#707070] dark:text-slate-400">
                  مشاورین ما 24 ساعته جوابگو سوال های شما هستند
                </p>
                <div className="xl:w-[88px] xl:h-[88px] xl:bg-[#FCFCFC] xl:border xl:border-[#DCDCDC] xl:relative xl:left-[580px] xl:bottom-7 xl:rounded-full xl:hover:border-[#3772FF] transition-[0.3s] xl:dark:bg-slate-700">
                  <img
                    src="../../../../public/AuthImage/message-user-01.png"
                    className="xl:absolute xl:left-[22px] xl:top-5"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export { LandingServiceResponsive };
