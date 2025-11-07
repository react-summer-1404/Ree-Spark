import React from "react";
// import jsImage from "../../src/assets/image/LayoutImage/jsImage.svg";
import jsImage from '../../../../../assets/image/LayoutImage/jsImage.svg'

const ImageCourse = () => {
  return (
    <div
      className="w-[95%] h-[390px] lg:w-[50%]  xl:h-[424px] border-2 bg-[#F0DB4F] rounded-[32px] flex
        justify-center items-center
        "
    >
      <div>
        <img src={jsImage} />
      </div>
    </div>
  );
};

export default ImageCourse;
