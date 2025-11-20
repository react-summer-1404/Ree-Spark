import React from "react";
// import jsImage from "../../src/assets/image/LayoutImage/jsImage.svg";


const ImageCourse = ({course}) => {
  return (
    <div
      className="w-[95%] h-[390px] lg:w-[50%]  xl:h-[424px] border-2 bg-black rounded-[32px] flex
        justify-center items-center
        "
    >
      <div>
        <img src={course.imageAddress} className="rounded-xl w-[500px] text-white" alt={course.imageAddress}/>
      </div>
    </div>
  );
};

export default ImageCourse;
