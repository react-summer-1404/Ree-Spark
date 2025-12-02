import React from "react";
import HeroSection from "../components/landing/lanBody/HeroSection";
import LandingServices from "../components/landing/lanBody/LandingService";
import {TopCourse} from "../components/landing/topcourse/TopCourse";
import HeroImage from "../components/landing/lanBody/HeroImageAndBorder/HeroImage";
import TopBlogs  from "../components/landing/lanBody/TopBlog/TopBlogs"
import {Teacher} from "../components/landing/lanBody/Teacher"
const Landing = () => {
  return (
    
      <div className=" w-[393px] h-[6380px]  overflow-hidden lg:w-[1200px] lgg:w-[1310px] xl:w-[1510px] 
        lg:h-[5000px] xl:h-[3490px] lgg:h-[3620px]  overflow-x-hidden mx-auto px-4 relative dark:text-white">
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
