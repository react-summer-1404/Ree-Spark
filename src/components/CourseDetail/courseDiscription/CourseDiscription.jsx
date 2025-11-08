import React from "react";
import Title from "./Title";
import Discription from "./Discription";
import StarAndcopyLink from "./StarAndCopyLink/StarAndcopyLink";

const CourseDiscription = () => {
  return (
    <div className="text-right flex flex-wrap dark:text-white justify-end gap-7">
      <Title />
      <Discription />
      {/* courseStar and copycourseLink */}
      <StarAndcopyLink />
    </div>
  );
};

export default CourseDiscription;
