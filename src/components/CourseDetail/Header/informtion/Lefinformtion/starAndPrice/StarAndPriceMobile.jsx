import React from "react";
import CourseStar from "./Star";

const StarAndPriceMobile = () => {
  return (
    <div className="sm:hidden  flex flex-col gap-y-4 mt-5 ">
      <div>
        <CourseStar />
      </div>
    </div>
  );
};

export default StarAndPriceMobile;
