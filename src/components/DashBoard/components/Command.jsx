import React from "react";
import peepe from "../../../assets/image/LayoutImage/Peppe.svg";
const Command = () => {
  return (
    <div>
      <div className="bw-[150px] h-12 flex gap-3 absolute top-[70px] right-4">
        <div className=" w-[93px] flex flex-col gap-1">
          <div className="text-right text-sm">شما</div>
          <div className="text-right text-xs text-[#707070] dark:text-slate-400">تاریخ</div>
        </div>
        <div>
          <img src={peepe} className="w-12 h-12" />
        </div>
      </div>
      <h3 className="text-base font-bold absolute top-[140px] right-4">
        دوره خیلی خوبی بود واقعا لذت بردم
      </h3>
      <div className="absolute top-[174px] dark:text-slate-300 w-[360px] right-4 text-right text-sm text-[#2f2f2f]">
        واقعا عالی بود. هم استادش و هم کلاس ها منظم برگزار شدن و اصلا از مباحث
        عقب نموندم و تونستم به مقدار ثابتی پیشرفت کنم توی کدنویسی جاوا اسکریپت.
        ممنون از آکادمی بحر که این دوره رو گذاشتن{" "}
      </div>
    </div>
  );
};

export { Command };
