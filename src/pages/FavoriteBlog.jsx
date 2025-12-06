import React, { useEffect, useState } from "react";
import { LuCalendarRange } from "react-icons/lu";
import { SearchPanelBox } from "../components/MyCourse/SearchPanelBox";
import FavoriteBlogApi from "../core/services/api/User/FavoriteBlog.api";
import { BlogStatus } from "../components/FavoriteBlog/BlogStatus";

const FavoriteBlog = () => {
  const [favoriteNews, setFavoriteNews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await FavoriteBlogApi();
      setFavoriteNews(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1 className="h-9 absolute top-[96px] left-[911px] text-2xl font-bold ">
        بلاگ های موردعلاقه
      </h1>

      <div className="w-[258px] h-20 absolute top-[142px] left-[848px] flex gap-2">
        <SearchPanelBox />
      </div>

      <div className="w-[258px] h-20 absolute top-[142px] left-[566px] flex gap-2">
        <div className="w-[258px] h-[80px] gap-2 relative ">
          <div className="w-[157px] h-[24px] gap-2  float-right flex ">
            <h3 className="w-[125px] h-[23px] font-sans text-[15px] font-medium leading-5 text-right ">
              تاریخ برگزاری - اتمام
            </h3>
            <LuCalendarRange size={20} />
          </div>
          <div className="w-[258px] h-[48px] rounded-[16px] bg-[#F1F1F1] absolute top-8 text-black font-medium text-[14px] p-4 text-right">
            29 اردیبهشت 1403 - 5 خرداد 1403
          </div>
        </div>
      </div>

      {/* course status */}
      <div className="bg-[#F6F6F6] dark:bg-gray-700 w-[1078px] h-[710px] absolute top-[236px] left-[24px] rounded-[24px]">
        <div className="w-[1046px] h-11 bg-[#F1F1F1] rounded-2xl absolute top-4 left-4">
          <h5 className="absolute top-3 left-[1024px] text-[#707070] text-sm font-medium">
            #
          </h5>
          <h5 className="absolute top-3 left-[906px] text-[#707070] text-sm font-medium">
            نام
          </h5>
          <h5 className="absolute top-3 left-[685px] text-[#707070] text-sm font-medium">
            مدرس
          </h5>
          <h5 className="absolute top-3 left-[470px] text-[#707070] text-sm font-medium">
            تاریخ برگزاری
          </h5>
          <h5 className="absolute top-3 left-[305px] text-[#707070] text-sm font-medium">
            تاریخ اتمام
          </h5>
          <h5 className="absolute top-3 left-[159px] text-[#707070] text-sm font-medium">
            سطح
          </h5>
        </div>
        {favoriteNews.length === 0 && (
          <div className="w-full h-full flex items-center justify-center">
            <h2 className="text-gray-500 text-xl font-bold">
              موردی وجود ندارد
            </h2>
          </div>
        )}
        {favoriteNews.length > 0 && (
          <>
            {favoriteNews.map((item, index) => (
              <BlogStatus
                key={item.id}
                MyCourseName={item.title}
                MyCoursePublisher={item.auther}
                MyCourseLevel="پیشرفته"
                ImageAddress={item.currentImageAddressTumb}
                bgColor={"bg-[#FFE1FE]"}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default FavoriteBlog;
