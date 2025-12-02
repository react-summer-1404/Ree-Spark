import React from "react";
// import jsImage from "../../src/assets/image/LayoutImage/jsImage.svg";


const ImageCourse = ({ courseData }) => {
  return (
    <div
      className="w-[95%] h-[390px] lg:w-[50%] xl:h-[424px] border-2 rounded-[32px] flex justify-center items-center overflow-hidden"
    >
      <img
        src={courseData.imageAddress}
        alt="CourseDetailIamge"
        className="w-full h-full object-cover rounded-[32px]"
        
      />

    </div>
  );
};

export default ImageCourse;
