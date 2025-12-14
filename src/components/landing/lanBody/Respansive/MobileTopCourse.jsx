import React, { useEffect, useState } from "react";
import { TopCourseBody } from "../../topcourse/TopCourseBody";
import GetCoursesTopApi from "../../../../core/services/api/GetTopCourses.api";
import { digitsEnToFa, addCommas } from "@persian-tools/persian-tools";
import toast from "react-hot-toast";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ButtonResponsive from "../../../common/Button/ButtonResponsive";
import Loading from "../../../common/Loading";

const MobileTopCourse = () => {
  const [courses, setCourses] = useState([]);
  const getTopCourses = async (Count = 10) => {
    try {
      const res = await GetCoursesTopApi({ Count });
      setCourses(res || []);
    } catch (error) {
      toast.error("خطا در دریافت دوره‌ها");
    }
  };
  useEffect(() => {
    getTopCourses();
  }, []);
  return (
    <div className="relative right-[-76px] lg:hidden xl:hidden block lgg:hidden">
        <h2 className=" lg:block text-center lg:mr-[400px] relative text-3xl font-bold  xl:mr-[-61px] top-[40px]">
        دوره‌های برتر هفته
      </h2>
      <div className="mt-12 flex justify-center gap-[20px] h-[395px] relative left-[3px]">
 


       {courses && courses.length > 0 ? (
        <>
  <Swiper
 modules={[Navigation]}
      navigation
      spaceBetween={5}
      slidesPerView={0.7}
      className="mySwiper2"
  >
    {courses.map((item) => (
      <SwiperSlide key={item.courseId}>
        <TopCourseBody
          courseName={item.title}
          teacherName={item.teacherName}
          coursePrice={digitsEnToFa(addCommas(item.cost))}
          coursePriceDub={digitsEnToFa(addCommas(item.cost))}
          coding={item.statusName}
          imageAddress={item.imageAddress}
          level={item.levelName}
          bgcolor="bg-black"
        />
      </SwiperSlide>
    ))}
    
  </Swiper>
  
      <div className="flex justify-center  absolute z-20 mt-[400px]" >
      <ButtonResponsive  buttonAdders={"courses"}/>
    </div>
    </>
) : (
  <div className="flex justify-center items-center h-[300px]">
    <Loading />
  </div>
)}
          
      </div>
    </div>
  );
};
export { MobileTopCourse };
