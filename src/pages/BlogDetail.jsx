import React, { useState } from "react";
import BlogStar from "../components/BlogDetail/informtion/BlogStar/BlogStar";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FiArchive, FiCopy } from "react-icons/fi";
import { FileTextIcon, Fullscreen } from "lucide-react";
import jsImage from "../assets/image/LayoutImage/jsImage.svg";
import DisCriptionStar from "../components/BlogDetail/BlogDiscription/DisCriptionStar";

const BlogDetail = () => {
  const [isOpenModalComment, setisOpenModalComment] = useState(false);

  const openModal = () => setisOpenModalComment(true);
  const closeModal = () => setisOpenModalComment(false);
  return (
    <div className="mt-16 mb-10 mr-2 ml-2 flex flex-wrap gap-y-10 md:gap-y-16 justify-center">
      <div
        className="flex justify-center lg:justify-between items-center 
        gap-3 w-full flex-wrap lg:flex-nowrap "
      >
        <div className="flex flex-wrap w-full lg:w-[60%] justify-center h-[400px] mt-4 ">
          <div className="w-full h-[46px] dark:text-white flex justify-end font-bold text-[32px]">
            <div className="w-[330px] h-[46px] flex items-center ">
              فیگما یا ادوبی ایکس‌دی؟
            </div>
          </div>
          {/* /// */}
          <div
            className="= flex justify-center dark:text-white w-full h-[80px] 
                        rounded-2xl 
                        border-2"
          >
            {/* // */}
            <div className="flex w-[25%] mt-2 flex-wrap justify-end text-right border-r-2 pr-3 ">
              <div className="w-[110px] h-[20px] text-[#707070] text-[13px] sm:text-[14px] flex justify-end ">
                <div>استاد دوره</div>
              </div>
              <div className="min-w-full h-[23px] sm:text-[14px] text-[13px] flex justify-end items-center">
                امیرحسین بحرالعلوم
              </div>
            </div>
            {/* // */}
            <div className="flex w-[25%] mt-2 flex-wrap justify-end  border-r-2 pr-3 ">
              <div className="w-[110px] h-[20px] text-[#707070] text-[13px] sm:text-[14px] flex justify-end  ">
                <div className="w-full text-right ">سطح آموزشی</div>
              </div>
              <div className="w-full justify-end flex ">
                <div className="sm:w-[69px] w-[60px] h-[27px] text-[13px] sm:text-[16px] flex justify-center items-center rounded-[32px] bg-[#FF37F5] ">
                  پیشترفته
                </div>
              </div>
            </div>
            {/* ///// */}
            <div className="flex w-[25%] mt-2 flex-wrap justify-end border-r-2 pr-3 ">
              <div className="w-[120px] h-[20px] text-[#707070] text-[13px] sm:text-[14px] flex justify-end">
                <div className="w-full text-right">دسته‌بندی </div>
              </div>
              <div className=" flex w-full justify-end">
                <div className="sm:w-[99px] w-[80px] h-[27px] sm:text-[16px] text-[13px] flex items-center rounded-[32px] bg-[#3772FF] justify-center">
                  29اردیبهشت
                </div>
              </div>
            </div>
            {/* //// */}
            <div className="flex w-[25%] mt-2 flex-wrap justify-end pr-3 ">
              <div className="w-[110px] h-[20px] text-[13px] sm:text-[14px] text-[#707070] flex justify-end  ">
                <div className="w-full text-right">وضعیت</div>
              </div>
              <div className="w-full flex justify-end">
                <div className="sm:w-[101px] w-[80px] text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px] bg-[#FF5353] ] ">
                  درحال برگزاری
                </div>
              </div>
            </div>
          </div>
          {/* ///// */}
          <div
            className="flex justify-center dark:text-white w-full h-[80px] 
                            rounded-2xl 
                            border-2"
          >
            <div className="flex w-[25%] mt-2 flex-wrap justify-end border-r-2 pr-3  ">
              <div className="w-full h-[20px] text-[#707070] text-[14px] flex justify-end ">
                <div className="w-full text-right ">تعداد دیس لایک </div>
              </div>
              <div className="w-[120px] flex justify-end ">20نفر</div>
            </div>
            <div className="flex w-[25%] mt-2 flex-wrap justify-end border-r-2 pr-3 ">
              <div className="w-[100px] h-[20px] text-[#707070] text-[14px] flex justify-end  ">
                <div className="w-full text-right">تعداد لایک</div>
              </div>
              <div className="w-full flex justify-end ">220 نفر</div>
            </div>
            <div className="flex w-[25%] mt-2 flex-wrap justify-end border-r-2 pr-3 ">
              <div className="w-[100px] h-[20px] text-[#707070]  text-[14px] flex justify-end ">
                <div className="w-full text-right ">اتمام تاریخ </div>
              </div>
              <div className="w-full flex justify-end">29اردیبهشت</div>
            </div>
            <div className="flex w-[25%] mt-2 flex-wrap justify-end pr-3 ">
              <div className="w-[100px] h-[20px]  text-[14px] text-[#707070] flex justify-end  ">
                {" "}
                <div className="w-full text-right ">تاریخ برگزاری</div>
              </div>
              <div className="w-full flex justify-end "> 29خرداد 1404</div>
            </div>
          </div>
          {/* ///// */}
          <div className="flex justify-end h-[34px] w-full ">
            <BlogStar rating={3} />
          </div>
          {/* //// */}
          <div className="flex gap-3 md:gap-4  justify-between h-[56px] w-full ">
            <div className="flex items-center md:gap-4 gap-1 ">
              <div
                className="sm:min-w-[56px] min-w-[48px] h-[48px] sm:h-[56px] cursor-pointer flex justify-center 
                                            items-center 
                                            border-2 rounded-full 
                                            dark:text-white
                                            "
              >
                <AiFillDislike size={25} />
              </div>
              <div
                className="sm:min-w-[56px] min-w-[48px] h-[48px] sm:h-[56px] cursor-pointer flex justify-center 
                                            items-center rounded-full
                                            bg-[#3772FF]
                                            dark:text-white
                                            "
              >
                <AiFillLike size={25} />
              </div>
            </div>
            {/* //// */}
            <button
              className="w-[280px] h-[56px] bg-[#2F2F2F] flex justify-center items-center
                            gap-3
                            text-white
                            rounded-full text-[13px] xl:text-[19px] lg:text-[16px] 
                              md:w-[332px]
                            "
            >
              <div className="cursor-pointer s ">اضافه به لیست موردعلاقه</div>
              <div className="w-[18px] h-[18px] xl:w-[24px] xl:h-[24px]">
                <FiArchive size={Fullscreen} />
              </div>
            </button>
            {/* ///// */}
          </div>
        </div>
        {/* //// */}
        <div
          className="w-[95%] h-[390px] lg:w-[50%]  xl:h-[424px] border-2 bg-[#F0DB4F] rounded-[32px] flex
                  justify-center items-center
                  "
        >
          <div>
            <img src={jsImage} />
          </div>
        </div>
      </div>
      <div className="text-right flex flex-wrap dark:text-white justify-end gap-7">
        <div className="flex justify-end flex-wrap gap-6 font-medium ">
          <div className="w-[100%] h-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است ، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </div>
          <div className="w-[100%] h-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است ، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </div>
          <div className="w-[100%] h-auto">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است ، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </div>
        </div>
        <div className="flex items-center justify-end gap-10 flex-wrap ">
          {/* //// */}
          <div className="sm:w-[216px] h-[39px] w-full flex justify-end">
            <button
              className="w-[216px] h-[39px] flex justify-center items-center
                                            rounded-[48px] border-2 border-[#3772FF] gap-2 "
            >
              <div className="text-[#3772FF] ">کپی کردن لینک صفحه</div>
              <FiCopy className="text-[#3772FF] " />
            </button>
          </div>
          {/* //// */}
          <DisCriptionStar rating={2} />
        </div>
      </div>
      <div className="flex flex-wrap w-[100%] justify-end gap-y-7">
        <div className="text-[20px] text-[#707070] font-bold ">
          نظرات دانشجو ها و اساتید
        </div>
        <div className=" flex justify-center sm:justify-end  gap-[10px] w-[100%] flex-wrap-reverse sm:flex-nowrap ">
          <div
            className="w-[360px] sm:w-[40%] sm:h[280px] h-[260px] sm:hidden  md:h-[260xp] bg-[#F6F6F6] rounded-[24px] 
                    flex justify-center items-center flex-wrap
                        lg:flex
                    "
          >
            <div className="flex text-right  p-2 gap-y-4  flex-wrap  w-[100%] h-[157px] dark:text-wihte">
              <div
                className=" w-[100%] h-[26px] text-[18px] font-bold              
              "
              >
                اصلا خوب نبود
              </div>
              <div
                className="text-[#707070] text-[14px] line-clamp-6"
                dir="rtl"
              >
                واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از
                مباحث عقب نموندمو تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی
                جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن
              </div>
            </div>

            <div className="w-[100%] h-[41px] mr-2 ml-2  flex items-center justify-between ">
              <div className="w-[103px] flex gap-6 ">
                <div className="flex gap-1 items-center mt-1 ">
                  <div className="text-[17px] ">10</div>
                  <button>
                    <AiFillDislike size={20} />
                  </button>
                </div>

                <div className="flex gap-1 items-center ">
                  <div className="text-[17px] ">80</div>
                  <button>
                    <AiFillLike size={20} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="w-[100px] flex flex-wrap justify-end ">
                  <div
                    className="text-[14px] w-[100px] h-[20px] line-clamp-1"
                    dir="rtl"
                  >
                    مهدی امیرخانی لم پشتی
                  </div>
                  <div className="text-[#707070] text-[12px] ">
                    29 اردیبهشت 1403
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#ccc] ">
                  {/* <img src="" alt="" /> */}
                </div>
              </div>
            </div>
          </div>

          <div
            className="w-[360px] sm:h-[260px] sm:w-[40%] h-[260px] bg-[#F6F6F6] rounded-[24px] 
                    flex justify-center items-center flex-wrap md:flex sm:hidden
                    "
          >
            <div className="flex text-right  p-2 gap-y-4 flex-wrap  w-[100%] h-[157px] dark:text-wihte">
              <div
                className=" w-[100%] h-[26px] text-[15px] md:text-[18px] font-bold
              
               
              "
              >
                عالی بود
              </div>
              <div
                className="text-[#707070] w-[100%] text-[13px] md:text-[14px] line-clamp-6"
                dir="rtl"
              >
                واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از
                مباحث عقب نموندمو تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی
                جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن
              </div>
            </div>

            <div className="w-[100%] h-[41px] mr-1 ml-1 flex items-center justify-between ">
              <div className="w-[103px] flex gap-6 ">
                <div className="flex gap-1 items-center mt-1 ">
                  <div className="text-[17px] ">1</div>
                  <button>
                    <AiFillDislike size={20} />
                  </button>
                </div>

                <div className="flex gap-1 items-center  ">
                  <div className="text-[17px] ">40</div>
                  <button>
                    <AiFillLike size={20} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="w-[100px] flex flex-wrap justify-end ">
                  <div
                    className="text-[14px] w-[100px] h-[20px] line-clamp-1"
                    dir="rtl"
                  >
                    مهشید محمدزاده
                  </div>
                  <div className="text-[#707070] text-[12px] ">
                    29 اردیبهشت 1403
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#ccc] ">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div
            className="md:w-[40%] w-[360px] h-[280px] sm:h-[260px] bg-[#F6F6F6] 
                    flex justify-center items-center rounded-[24px] flex-wrap"
          >
            <div className="flex text-right p-2 gap-y-4 flex-wrap w-[100%] h-[157px] dark:text-wihte ">
              <div className=" w-[100%] h-[26px] text-[18px] font-bold">
                خوب بود بد نبود
              </div>
              <div className="text-[#707070] text-[14px]" dir="rtl">
                واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از
                مباحث عقب نموندمو تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی
                جاوا اسکریپت. ممنون از آکادمی بحر که این دوره رو گذاشتن
              </div>
            </div>

            <div className="w-[100%] h-[41px] mr-1 ml-1 flex items-center justify-between ">
              <div className="w-[103px] flex gap-6 ">
                <div className="flex gap-1 items-center mt-1 ">
                  <div className="text-[17px] ">1</div>
                  <button>
                    <AiFillDislike size={20} />
                  </button>
                </div>

                <div className="flex gap-1 items-center ">
                  <div className="text-[17px] ">40</div>
                  <button>
                    <AiFillLike size={20} />
                  </button>
                </div>
              </div>
              <div className="flex gap-2 ">
                <div className="w-[100px] flex flex-wrap justify-end ">
                  <div
                    className="text-[14px] w-[100px] h-[20px] line-clamp-1"
                    dir="rtl"
                  >
                    امیرحسین فرجی سواد کوهی
                  </div>
                  <div className="text-[#707070] text-[12px] ">
                    29 اردیبهشت 1403
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-[#ccc] ">
                  <img src="" alt="" />
                </div>
              </div>
            </div>
          </div>

          <button className="w-[360px] h-[280px] sm:w-[40%] sm:h-[260px]   bg-[#3772FF] flex justify-center items-center rounded-[24px] ">
            <div className="flex justify-center w-[170px] flex-wrap gap-6 ">
              <div className="text-white flex gap-2 w-[80px] flex-wrap justify-center ">
                <FileTextIcon />
                <div className="text-[18px] ">نظر شما</div>
              </div>
              <div className="text-[15px] h-9 text-white">
                برای نظر دادن کلیک کنید
              </div>
            </div>
          </button>
        </div>
        <div className="w-[100%] flex justify-center ">
          <button
            onClick={openModal}
            className="w-[125px] h-[29px] rounded-full bg-[#2F2F2F] text-white"
          >
            مشاهده بیشتر
          </button>
          {/* ModalComment */}
          {isOpenModalComment && (
            <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
              <div className="bg-white w-[90%] dark:bg-slate-800 h-[653px] min-w-md p-6 rounded-xl shadow-lg overflow-hidden">
                <div className="w-full h-full overflow-y-auto pr-2">
                  {/* Header */}
                  <div className="w-full flex flex-wrap items-center justify-between mb-6">
                    <button
                      onClick={closeModal}
                      className="flex items-center justify-center gap-3 w-[100px] h-[40px] border-red-600 border-2 rounded-full text-red-600 dark:text-white"
                    >
                      <div>بستن</div>
                      <div className="mt-1">✕</div>
                    </button>
                    <div className="flex gap-2 items-center justify-end flex-wrap-reverse text-right">
                      <div className="w-[160px] text-[#707070] font-bold text-[18px]">
                        <div>( دوره جاوااسکریپت )</div>
                      </div>
                      <div className="text-[24px] font-bold dark:text-white">
                        نظرات دانشجو ها و اساتید
                      </div>
                    </div>
                  </div>

                  {/* Comment Section */}
                  <div className="w-full gap-y-5 flex flex-wrap justify-end">
                    {/* نظر شما */}
                    <div className="w-full flex justify-end mb-5">
                      <button
                        className="w-[107px] h-[40px] bg-[#3772FF] rounded-[40px] 
                          flex items-center justify-center text-white gap-2"
                      >
                        <div>نظر شما</div>
                        <FileTextIcon size={20} />
                      </button>
                    </div>

                    {/* نظرات کاربران */}
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="flex flex-wrap justify-end gap-2 mb-10"
                      >
                        <div className="w-[100px] flex flex-wrap justify-end">
                          <div
                            className="text-[14px] w-[100px] h-[20px] line-clamp-1 dark:text-white"
                            dir="rtl"
                          >
                            مهشید محمدزاده اصغرآبادی
                          </div>
                          <div className="text-[#707070] text-[12px]">
                            29 اردیبهشت 1403
                          </div>
                        </div>

                        <div className="w-12 h-12 rounded-full bg-[#ccc]">
                          <img src="" alt="" />
                        </div>

                        <div className="w-full flex justify-end text-[18px] font-bold dark:text-white">
                          <div>دوره خیلی خوبی بود واقعا لذت بردم</div>
                        </div>

                        <div className="flex justify-end">
                          <div className="w-[85%] text-right dark:text-white">
                            واقعا عالی بود. هم استادش و هم کلاس‌ها منظم برگزار
                            شدن و اصلاً از مباحث عقب نموندم و تونستم به مقدار
                            ثابتی پیشرفت کنم توی کدنویسی جاوااسکریپت. ممنون از
                            آکادمی بحر که این دوره رو گذاشتن...
                          </div>
                        </div>

                        <div className="flex items-center gap-3 mt-3">
                          <div
                            className="w-[99px] h-[40px] border-2 text-[#3772FF] border-[#3772FF] 
                rounded-[40px] p-2 dark:text-white"
                          >
                            جواب دادن
                          </div>
                          <div className="flex gap-5 w-[110px] h-[24px] dark:text-white">
                            <div className="flex gap-2 items-center">
                              <AiFillLike size={25} />
                              <div>5</div>
                            </div>
                            <div className="flex gap-2 items-center">
                              <AiFillDislike size={25} />
                              <div>9</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* //// */}
      <div className="flex w-[100%] justify-end flex-wrap gap-7 ">
        <div className="text-[#707070] w-[100%] text-right text-[20px] font-bold ">
          بلاگ های مربوط
        </div>
        <div className="flex gap-3 w-[100%] justify-center md:justify-between flex-wrap md:flex-nowrap ">

          <div className="min-w-[30%] h-[366px]">
            <div
              className="w-full h-[293px] rounded-[32px]
                        bg-blue-300 flex flex-wrap p-2 justify-center "
            >
              <div className="flex justify-end gap-2 w-[100%] h-[28px]">
                <div className="h-[24px] rounded-[32px] bg-[#3772FF] ">
                  <div className=" mr-1 ml-1">برنامه نویسی</div>
                </div>
                <div className="w-[65px] h-[24px] rounded-[32px] bg-[#FF37F5] ">
                  <div className="mr-1 ml-1 ">مقدماتی</div>
                </div>
              </div>
              {/* <img src="" alt="" /> */}
            </div>
            <div className="w-[100%] h-[61px] flex flex-wrap justify-end gap-y-4 ">
              <div className="w-[200px] h-[32px] text-right text-[24px] font-bold dark:text-white line-clamp-1" dir="rtl">
                فرق ری‌اکت با نکست جی‌اس چیست؟
              </div>
              <div className="w-[100%] h-[23px] flex justify-between ">
                <div className="flex gap-1 font-bold dark:text-white ">
                  <div className="font-thin ">تومان</div>2,500,000{" "}
                </div>
                <div className="text-[#a7a7a7] ">محسن اسفندیاری</div>
              </div>
            </div>
          </div>
          <div className="min-w-[30%] h-[366px] ">
            <div
              className="w-full h-[293px] rounded-[32px]
                        bg-blue-300 flex flex-wrap p-2 justify-center "
            >
              <div className="flex justify-end gap-2 w-[100%] h-[28px]">
                <div className="h-[24px] rounded-[32px] bg-[#3772FF] ">
                  <div className=" mr-1 ml-1">برنامه نویسی</div>
                </div>
                <div className="w-[65px] h-[24px] rounded-[32px] bg-[#FF37F5] ">
                  <div className="mr-1 ml-1 ">مقدماتی</div>
                </div>
              </div>
              {/* <img src="" alt="" /> */}
            </div>
            <div className="w-[100%] h-[61px] flex flex-wrap justify-end gap-y-4 ">
              <div className="w-[200px] h-[32px] text-right text-[24px] font-bold dark:text-white line-clamp-1" dir="rtl">
                فیگما یا ادوبی ایکس‌دی؟
              </div>
              <div className="w-[100%] h-[23px] flex justify-between ">
                <div className="flex gap-1 font-bold dark:text-white ">
                  <div className="font-thin ">تومان</div>2,500,000
                </div>
                <div className="text-[#a7a7a7] ">محسن اسفندیاری</div>
              </div>
            </div>
          </div>
          <div className="min-w-[30%] h-[366px] ">
            <div
              className="w-full h-[293px] rounded-[32px]
                        bg-blue-300 flex flex-wrap p-2 justify-center "
            >
              <div className="flex justify-end gap-2 w-[100%] h-[28px]">
                <div className="h-[24px] rounded-[32px] bg-[#3772FF] ">
                  <div className=" mr-1 ml-1">برنامه نویسی</div>
                </div>
                <div className="w-[65px] h-[24px] rounded-[32px] bg-[#FF37F5] ">
                  <div className="mr-1 ml-1 ">مقدماتی</div>
                </div>
              </div>
              <img src="" alt="" />
            </div>
            <div className="w-[100%] h-[61px] flex flex-wrap justify-end gap-y-4 ">
              <div className="w-[200px] h-[32px] text-right text-[24px] font-bold dark:text-white line-clamp-1" dir="rtl">
                زبان جاوا اسکریپت در چه حوزه ای به کار میره؟
              </div>
              <div className="w-[100%] h-[23px] flex justify-between ">
                <div className="flex gap-1 font-bold dark:text-white ">
                  <div className="font-thin ">تومان</div>2,500,000
                </div>
                <div className="text-[#a7a7a7] ">محسن اسفندیاری</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
