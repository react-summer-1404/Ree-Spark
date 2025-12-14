import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { HeaderCourse } from "../components/course/top/HeaderCourse";
import { CourseBody } from "../components/course/CoursePage/Corses/CourseBody";
import { WelcomeScreen } from "../components/wellcome/WelcomeScreen";

const Course = () => {
  const [showWelcome, setShowWelcome] = useState(false);
  const [showCourse, setShowCourse] = useState(false);

  useEffect(() => {
    const navType = performance.getEntriesByType("navigation")[0]?.type;

    if (navType === "reload") {
      setShowWelcome(true);

      setTimeout(() => {
        setShowWelcome(false);
        setShowCourse(true);
      }, 2000);
    } else {
      setShowCourse(true);
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {showWelcome && (
          <WelcomeScreen
            wellcomeMessage={"به صفحه دوره‌ها خوش آمدید"}
            onFinish={() => {
              setShowWelcome(false);
              setShowCourse(true);
            }}
          />
        )}
      </AnimatePresence>

      {showCourse && (
        <div className="flex justify-center lg:flex lg:justify-center overflow-hidden">
          <div className="h-[2050px] xl:h-[1960px] xl:w-[1200px] lg:h-[2740px] lgg:h-[2750px] w-[400px] relative lgg:w-[1050px] lg:w-[892px]">
            <HeaderCourse />
            <CourseBody />
          </div>
        </div>
      )}
    </>
  );
};

export { Course };
