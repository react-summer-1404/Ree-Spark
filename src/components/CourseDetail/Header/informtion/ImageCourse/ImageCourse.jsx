import React from "react";
import DefaultImage from "../../../../../../public/AuthImage/react.png";

const ImageCourse = ({ courseData }) => {
  return (
    <div className="w-[95%] h-[390px] lg:w-[50%] xl:h-[424px] border-2 rounded-[32px] flex justify-center items-center overflow-hidden">
      <img
        src={courseData.imageAddress || DefaultImage}
        alt={courseData.title || "Course image"}
        className="w-full h-full bg-black object-cover rounded-[32px]"
      />
    </div>
  );
};

export default ImageCourse;
