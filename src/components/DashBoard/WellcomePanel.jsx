import React from "react";


const WellcomePanel = ({profile}) => {
  
  return (
    <div>
      <div className="w-[424px] h-[69px] absolute top-[115px] left-[48px] font-medium text-right">
          هستم . این هم بیوگرافی من هست {profile.fName} سلام من 
      </div>
      <h2 className="h-[34px] absolute top-[96px] left-[857px] text-2xl font-bold">
        سلام  ، روزت بخیر {profile.fName }
      </h2>
      <h6 className="h-5 absolute top-[106px] left-[627px] text-sm text-[#707070] dark:text-gray-300 font-medium">
        امیدوارم امروز روز خوبی رو داشته باشید
      </h6>
    </div>
  );
};

export { WellcomePanel };