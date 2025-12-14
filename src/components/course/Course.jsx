import React, { useEffect, useState } from "react";
import { HeaderCourse } from "../course/top/HeaderCourse";
import { CourseBody } from "../course/CoursePage/CourseBody";

import { AnimatePresence } from "framer-motion";
import { WelcomeScreen } from "../wellcome/WelcomeScreen";
import CourseFilter from "../../../../../raect/project/ReactGuys/src/components/course/courseBody/right/CourseFilter";

const Course = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showLanding, setShowLanding] = useState(false);

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0].type;

    if (navType === "reload") {
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
        setShowLanding(true);
      }, 2500);
    } else {
      setShowLanding(true);
    }
  }, []);
  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen
            wellcomeMessage={"صفحه دوره ها"}
            onFinish={() => {
              setShowWelcome(false);
              setShowLanding(true);
            }}
          />
        )}
      </AnimatePresence>
      {showLanding && (
        <div className="xs:flex xs:justify-center sm:flex sm:justify-center  flex justify-centerflex justify-center  lg:flex lg:justify-center overflow-hidden mm:overflow-hidden">
          <div className="h-[2000px] xl:h-[1700px] lg:h-[2500px] lgg:h-[2400px] w-[1140px] relative  xl:w-[1200px] lgg:w-[1050px] lg:w-[892px] md:w-[388px] sm:w-[393px] xs:w-[310px] mm:w-[200px] nn:w-[200px]  ">
            <HeaderCourse />
            <CourseBody />
            <CourseFilter />
          </div>
        </div>
      )}
    </>
  );
};

export { Course };
