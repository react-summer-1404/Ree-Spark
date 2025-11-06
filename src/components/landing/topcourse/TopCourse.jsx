import React, { useEffect, useState } from "react";
import { TopCourseBody } from "./TopCourseBody";
import Button from "../../common/Button";
import ButtonResponsive from "../../common/ButtonResponsive";
import { getTopCourses } from "../../../core/services/api/getTopCourses.api";

const TopCourse = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getTopCourses()
  }, []);

  return (
    <div>
      <h2 className="hidden lg:block text-center text-3xl font-bold font-sans max-w-7xl mx-auto mb-8">
        دوره‌های برتر هفته
      </h2>
      <h2 className="lg:hidden text-3xl font-bold font-sans text-center mb-8">
        دوره‌های برتر هفته
      </h2>
      <div className="mt-12 flex justify-center gap-4">

        {courses.map((item) =>(
        <TopCourseBody key={item.id} {...item} />
        ))}


        <div className="hidden lg:block"><Button /></div>
        <div className="lg:hidden"><ButtonResponsive /></div>
      </div>
    </div>
  );
};

export  {TopCourse};