import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation } from "swiper/modules";
import TopBlogApi from "../../../../core/services/api/TopBlogs.api";
import moment from "moment-jalaali";
import toast from "react-hot-toast";
import ButtonResponsive from "../../../common/Button/ButtonResponsive";
import Loading from "../../../common/Loading";
import MobileTopBlogInfo from "./MobileTopBlogInfo";

const MobileTopBlogs = () => {
  const [BlogInfo, setBlogInfo] = useState([]);

  const getTopBlogsApi = async (RowsOfPage = 10) => {
    try {
      const res = await TopBlogApi({
        RowsOfPage: RowsOfPage,
        SortingCol: "InsertDate",
        SortType: "DESC",
      });
      console.log("Response topBlog:", res);
      setBlogInfo(res.news || []);
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت بلاگ");
    }
  };

  useEffect(() => {
    getTopBlogsApi();
  }, []);

  return (
    <div className="relative lg:hidden xl:hidden  lgg:hidden">
      <div className="text-center text-3xl relative right-[px] top-[470px] font-bold lg:hidden">
        بلاگ های برتر هفته
      </div>

      <div className="flex justify-center gap-[20px] h-[400px]  mt-12 ml-[20px] relative top-[450px]">
        {BlogInfo && BlogInfo.length > 0 ? (
          <>
            <Swiper
              modules={[Navigation]}
              navigation
              spaceBetween={700}
              slidesPerView={0.7}
              className="mySwiper"
            >
              {BlogInfo.map((item) => (
                <SwiperSlide key={item.id}>
                  <MobileTopBlogInfo
                    title={item.title}
                    Teacher={item.addUserFullName}
                    img={item.currentImageAddress}
                    Date={moment(item.insertDate).format("jYYYY/jMM/jDD")}
                    view={item.currentView}
                    icView="view"
                    icDate="Date"
                    blogBg="bg-black"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="flex justify-center z-20 absolute  mt-[370px]">
              <ButtonResponsive  buttonAdders={"blog"}/>
            </div>
          </>
        ) : (
          <div className="">
            <Loading />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileTopBlogs;
