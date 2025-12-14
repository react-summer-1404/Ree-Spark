import React from "react";

const Discription = ({courseData}) => {

  //  const finalText = courseData.describe.replace(
  //   "[GOOGLE_TITLE]",
  //   courseData.googleTitle
  // );
  
  return (
    <div className="flex justify-end w-full flex-wrap gap-6 font-medium ">
      <div className="w-[100%] h-auto">
       {courseData.describe}
      </div>
      
      <div className="w-[100%] h-auto">
       {courseData.miniDescribe}
      </div>
    </div>
  );
};

export default Discription;
