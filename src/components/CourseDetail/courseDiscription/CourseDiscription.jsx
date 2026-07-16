import React from "react";
import Title from "./Title";
import Discription from "./Discription";
import StarAndcopyLink from "./StarAndCopyLink/StarAndcopyLink";

const CourseDiscription = ({ courseData }) => {
 
  return (
    <div className="text-right flex w-full flex-wrap dark:text-white justify-end gap-7">
      <Title />
      <Discription courseData={courseData} />
      {/* courseStar and copycourseLink */}
      <StarAndcopyLink />
    </div>
  );
};

export default CourseDiscription;
