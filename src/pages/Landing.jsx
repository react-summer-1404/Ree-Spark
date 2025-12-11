import React, { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import HeroSection from "../components/landing/lanBody/HeroSection";
import LandingServices from "../components/landing/lanBody/LandingService";

import { TopCourse } from "../components/landing/topcourse/TopCourse";
import HeroImage from "../components/landing/lanBody/HeroImage";
import TopBlogs from "../components/landing/lanBody/TopBlog/TopBlogs";
import { Teacher } from "../components/landing/lanBody/Teacher";
import { WelcomeScreen } from "../components/wellcome/WelcomeScreen";

const Landing = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0].type;

    if (navType === "reload") {
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
        setShowLanding(true);
      }, 2000);
    } else {
      setShowLanding(true);
    }
  }, []);

  return (

    <>
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen
            wellcomeMessage={"به سایت ری اسپارک خوش آمدید"}
            onFinish={() => {
              setShowWelcome(false);
              setShowLanding(true);
            }}
          />
        )}
      </AnimatePresence>

      {showLanding && (
        <div className="lg:overflow-x-hidden mx-auto px-4 lg:h-[3300px] lg:w-[1440px] overflow-x-hidden w-[393px] h-[7038px] font-Isans relative lg:relative dark:text-white">
          <div className="flex flex-col">
            <LandingServices />
            <HeroSection />
            <TopCourse />
            <HeroImage />
            <TopBlogs />
            <Teacher />
          </div>
        </div>
      )}
    </>

  );
};

export { Landing };
