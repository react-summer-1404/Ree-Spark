import React, { useEffect, useState } from "react";
import ImageCourse from "../components/CourseDetail/Header/informtion/ImageCourse/ImageCourse";
import Leftinformtion from "../components/CourseDetail/Header/informtion/Lefinformtion/Leftinformtion";
import CourseDiscription from "../components/CourseDetail/courseDiscription/CourseDiscription";
import CourseComment from "../components/CourseDetail/CourseComment/CourseComment";
import CourseRelated from "../components/CourseDetail/courseDiscription/CourseRelated/CourseRelated";
import getCourseDetatilapi from "../core/services/api/CourseDetail.api/getCourseDetatil.api";
import { useParams } from "react-router-dom";
import Loading from "../components/common/Loading";

const CourseDetail = () => {
  const [courseData, setCourseData] = useState(null);
  const { CourseId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCourseDetatilapi(CourseId);
      console.log("CourseId from params:", CourseId);
      setCourseData(data);
    };
    fetchData();
  }, [CourseId]);

  return courseData ? (
    <div className="sm:mt-16 mt-5 mb-10 mr-2 ml-2 flex flex-wrap gap-y-10 md:gap-y-16 justify-center">
      {/* CourseDetail informtion and image///// */}
      <div
        className="flex justify-center lg:justify-between items-center 
        gap-3  w-full flex-wrap lg:flex-nowrap "
      >
        <Leftinformtion courseData={courseData} />
        <ImageCourse courseData={courseData} />
      </div>
      {/* course discription // */}
      <CourseDiscription courseData={courseData} />
      {/* Commentns from students // */}
      <CourseComment />
      {/* Related courses */}
      <CourseRelated />
    </div>
  ) : (
      <Loading/>
  );
};

export default CourseDetail;
