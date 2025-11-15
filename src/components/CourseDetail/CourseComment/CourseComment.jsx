import { FileTextIcon } from "lucide-react";
import React, { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import CommentModal from "./CommentModal";

const CourseComment = () => {
  const [isOpenModalComment, setisOpenModalComment] = useState(false);

  const openModal = () => setisOpenModalComment(true);
  const closeModal = () => setisOpenModalComment(false);

  return (
    <div className="flex flex-wrap w-[100%] justify-end gap-y-7">
      <div className="text-[20px] text-[#707070] font-bold ">
        نظرات دانشجو ها و اساتید
      </div>
      <div className=" flex justify-center sm:justify-end gap-[10px] w-[100%] flex-wrap-reverse sm:flex-nowrap ">
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
            <div className="text-[#707070] text-[14px] line-clamp-6" dir="rtl">
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
          <CommentModal closeModal={closeModal} />
        )}
      </div>
    </div>
  );
};

export default CourseComment;
