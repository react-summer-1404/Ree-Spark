import { Fullscreen } from "lucide-react";
import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FiArchive, FiBook } from "react-icons/fi";
import Title from "./Title";
import Situation from "./Situation/situation";
import CourseHistory from "./CourseHistory/CourseHistory";
import StarAndPrice from "./starAndPrice/StarAndPrice";
import FavAndResAndLike from "./FavoriteListAndReservationAndLike/FavAndResAndLike";
import CourseStar from "./starAndPrice/Star";
import LikeAndDisLike from "./FavoriteListAndReservationAndLike/LikeAndDisLike";
import AddFavorite from "./FavoriteListAndReservationAndLike/AddFavorite";

const Leftinformtion = () => {
  return (
    <div className="flex flex-wrap gap-3 w-full lg:w-[60%] justify-center  mt-4 ">
      {/* title// */}
      <Title />
      {/* Situation and informton/// */}
      <Situation />
      <div className="sm:hidden flex flex-col gap-y-4 ">
        <div className="flex w-[360px] h-[80px] border-2 rounded-[16px]">
          <div className="flex flex-col gap-3 justify-end p-3 w-[50%] h-full ">
            <div className="text-[#707070] w-[97%] text-right text-[14px]">
              استاد دوره
            </div>
            <div className="text-[15px] w-full">محمدحسین بحرالعلومی</div>
          </div>
          <div className="flex flex-col gap-3 justify-end p-3 w-[50%] border-l-2 h-full ">
            <div className="text-[#707070] w-[97%] text-right text-[14px]">
              سطح آموزشی
            </div>
            <div className="flex justify-end ">
              <div className="sm:w-[101px] w-[80px] text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px] bg-[#FF5353] ] ">
                درحال برگزاری
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[360px] h-[80px] border-2 rounded-[16px] ">
          <div className="flex flex-col gap-3 justify-end p-3 w-[50%] h-full ">
            <div className="text-[#707070] w-[97%] text-right text-[14px]">
              دسته بندی
            </div>
            <div className="text-[15px] w-full">
              <div className="flex justify-end ">
                <div className="sm:w-[101px] w-[80px] text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px] bg-[#3772FF] ] ">
                  برنامه نویسی
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-end p-3 w-[50%] border-l-2 h-full ">
            <div className="text-[#707070] w-[97%] text-right text-[14px]">
              سطح آموزشی
            </div>
            <div className="flex justify-end ">
              <div className="sm:w-[101px] w-[80px] text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px] bg-[#FF37F5] ] ">
                درحال برگزاری
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history course and like&dislike course/// */}
      <CourseHistory />
      <div className="sm:hidden flex flex-col gap-y-4 ">
        <div className="flex w-[360px] h-[80px] border-2 rounded-[16px]">
          <div className="flex flex-col gap-3 justify-end p-3 w-[50%] h-full ">
            <div className="text-[#707070] w-[97%] text-right text-[14px]">
              اتمام دوره  
            </div>
            <div className="text-[15px] w-full text-right "> 29 خرداد 1403</div>
          </div>
          <div className="flex flex-col gap-3 justify-end p-3 w-[50%] border-l-2 h-full ">
            <div className="text-[#707070] w-[97%] text-right text-[14px]">
             تاریخ برگزاری
            </div>
            <div className="flex justify-end ">
              <div className=" text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center rounded-[32px]  ">
                29 اردیبهشت 1403
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[360px] h-[80px] border-2 rounded-[16px] ">
            <div className="flex flex-col gap-3 justify-end p-3 w-[50%] h-full ">
            <div className="text-[#707070] w-[97%] text-right text-[14px]">
              تعداد لایک
            </div>
             <div className="flex justify-end ">
              <div className="w-full mr-3 text-[13px] sm:text-[16px] h-[27px] flex justify-end items-center ">
                29
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 justify-end p-3 w-[50%] border-l-2 h-full ">
            <div className="text-[#707070] w-[97%] text-right text-[14px]">
             تعداد دیس لایک 
            </div>
            <div className="flex justify-end ">
              <div className="w-full mr-3 text-[13px] sm:text-[16px] h-[27px] flex justify-end items-center ">
                10
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* score and price// */}
      <StarAndPrice />
      <div className="sm:hidden  flex flex-col gap-y-4 mt-5 ">
        <div>
          <CourseStar />
        </div>
      </div>
      {/* Reservations and Favorites and likeDislike */}
      <FavAndResAndLike />
      <div className="sm:hidden w-[361px] justify-between flex mt-5 ">
        <LikeAndDisLike />
        <AddFavorite />
      </div>
    </div>
  );
};

export default Leftinformtion;
