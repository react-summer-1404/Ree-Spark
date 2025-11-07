import React from "react";

const WellcomePanel = () => {
  return (
    <div>
      <div className="w-[424px] h-[69px] absolute top-[115px] left-[48px] font-medium text-right">
        سلام ، من پارسام اینم بیو پروفایلمه واقعا نمیدونم چی بنویسم خودتون
        بیایید منو بشناسید حال ندارم بخدا خستم
      </div>
      <h2 className="h-[34px] absolute top-[96px] left-[887px] text-2xl font-bold">
        سلام پارسا ، روزت بخیر
      </h2>
      <h6 className="h-5 absolute top-[106px] left-[627px] text-sm text-[#707070] font-medium">
        امیدوارم امروز روز خوبی رو داشته باشید
      </h6>
    </div>
  );
};

export { WellcomePanel };