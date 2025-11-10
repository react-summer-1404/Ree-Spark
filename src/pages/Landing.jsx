import React from "react";
import HeroSection from "../components/landing/lanBody/HeroSection";
import LandingServices from "../components/landing/lanBody/LandingService";
import {TopCourse} from "../components/landing/topcourse/TopCourse";
import HeroImage from "../components/landing/lanBody/HeroImage";
import TopBlogs  from "../components/landing/lanBody/TopBlog/TopBlogs"
import {Teacher} from "../components/landing/lanBody/Teacher"
const Landing = () => {
  return (
    <div className="   lg:overflow-x-hidden mx-auto px-4 lg:h-[3750px] lg:w-[1440px] overflow-x-hidden  w-[393px] h-[6428px]   font-Isans relative lg:relative dark:text-white">
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
