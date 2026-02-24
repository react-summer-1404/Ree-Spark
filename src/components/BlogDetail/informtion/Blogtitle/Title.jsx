import React from "react";

const Title = ({response}) => {
  return (
    <div className="w-full h-[46px] dark:text-white flex justify-end font-bold text-[32px]">
      <div className="w-[330px] h-[46px] flex items-center ">
       {response?.title}
      </div>
    </div>
  );
};

export default Title;
