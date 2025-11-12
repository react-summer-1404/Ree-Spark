import React from "react";
import HeroSection from "../components/landing/lanBody/HeroSection";
import LandingServices from "../components/landing/lanBody/LandingService";
import {TopCourse} from "../components/landing/topcourse/TopCourse";
import HeroImage from "../components/landing/lanBody/HeroImageAndBorder/HeroImage";
import TopBlogs  from "../components/landing/lanBody/TopBlog/TopBlogs"
import {Teacher} from "../components/landing/lanBody/Teacher"
const Landing = () => {
  return (
    
      <div className=" border-[10px] w-[393px] h-[6380px] sm:w-[430px] md:w-[768px] lg:w-[1200px] lgg:w-[1310px] xl:w-[1510px]
      overflow-x-hidden mx-auto px-4 relative dark:text-white">
        <div className="flex flex-col"> 
        <LandingServices />
        <HeroSection />
        <TopCourse />
        <HeroImage />
        <TopBlogs/>
        <Teacher/>

      </div>
    </div>
  
  );
};

export { Landing };
