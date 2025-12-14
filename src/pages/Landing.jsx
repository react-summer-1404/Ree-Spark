import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "../components/landing/lanBody/HeroSection";
import LandingServices from "../components/landing/lanBody/LandingService";
import { TopCourse } from "../components/landing/topcourse/TopCourse";
import TopBlogs from "../components/landing/lanBody/TopBlog/TopBlogs";
import { Teacher } from "../components/landing/lanBody/teacher/Teacher";
import { WelcomeScreen } from "../components/wellcome/WelcomeScreen";
import HeroImage from "../components/landing/lanBody/HeroImageAndBorder/HeroImage";

const Landing = () => {
  return (
    <>
      <div
        className="lg:overflow-x-hidden mx-auto px-4 xl:h-[3550px] lg:h-[4940px]   lgg:h-[3460px] lg:w-[1440px]
        overflow-x-hidden w-[393px] h-[6418px]  relative lg:relative dark:text-white"
      >
        <div className="flex flex-col">
          <LandingServices />
          <HeroSection />
          <TopCourse />
          <HeroImage />
          <TopBlogs />
          <Teacher />
        </div>
      </div>
    </>
  );
};

export { Landing };
