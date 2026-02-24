import React, { useEffect, useState } from "react";
import ImageCourse from "../components/CourseDetail/Header/informtion/ImageCourse/ImageCourse";
import Leftinformtion from "../components/CourseDetail/Header/informtion/Lefinformtion/Leftinformtion";
import CourseDiscription from "../components/CourseDetail/courseDiscription/CourseDiscription";
import CourseComment from "../components/CourseDetail/CourseComment/CourseComment";
import CourseRelated from "../components/CourseDetail/courseDiscription/CourseRelated/CourseRelated";
import { useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import getCourseDetatilapi from "../core/services/api/CourseDetail.api/getCourseDetatil.api";

const CourseDetail = () => {
  const [courseData, setCourseData] = useState(null);
  const { id } = useParams();
  // console.log("id",id)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCourseDetatilapi(id);
        console.log("data ", data);
        setCourseData(data);
      } catch (error) {
        console.error("Error fetching course:", error);
      }
    };
    fetchData();
  }, [id]);


  useEffect(() => {
      
  
  }, [])
  


  return courseData ? (
    <div className="sm:mt-16 mt-5 mb-10 mr-2 ml-2 flex flex-wrap gap-y-10 md:gap-y-16 justify-center">
      {/* CourseDetail informtion and image///// */}
      <div
        className="flex justify-center lg:justify-between items-center 
        gap-3  w-full flex-wrap lg:flex-nowrap "
      >
        <Leftinformtion
          id={id}
          courseData={courseData}
          courseId={courseData.courseId}
          isUserFavorite={courseData.isUserFavorite ?? courseData.userFavorite}
        />
        <ImageCourse courseData={courseData} />
      </div>
      {/* course discription // */}
      <CourseDiscription courseData={courseData} />
      {/* Commentns from students // */}
      <CourseComment courseData={courseData} courseId={courseData.courseId} />
      {/* Related courses */}
      <CourseRelated />
    </div>
  ) : (
    <Loading />
  );
};

export default CourseDetail;
