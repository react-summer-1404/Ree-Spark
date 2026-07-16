import { LucideClock5 } from "lucide-react";
import React, { useEffect, useState } from "react";
import { LuCalendarRange } from "react-icons/lu";
import moment from "moment-jalaali";
import { getItem } from "../../core/services/storage/storage.api";
const WellcomePanel = ({ profile }) => {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const userAbout = getItem("userAbout");
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const formatter = new Intl.DateTimeFormat("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
        timeZone: "Asia/Tehran",
      });

      setTime(formatter.format(now));
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    const updateDate = () => {
      const now = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Tehran",
      });
      moment.loadPersian({ dialect: "persian-modern" });
      const iranDate = moment(now).format("jYYYY jMMMM jDD");
      setDate(iranDate);
    };

    updateDate();
    const interval = setInterval(updateDate, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div>
      <div className="w-[424px] h-[69px] absolute top-[115px] left-[48px] font-medium text-right">
        {userAbout}
      </div>
      <h2 dir="rtl" className="h-[34px] absolute top-[96px] left-[857px] text-2xl font-bold">
    سلام {profile.fName} روزت بخیر 
      </h2>
      <h6 className="h-5 absolute top-[106px] left-[627px] text-sm text-[#707070] dark:text-gray-300 font-medium">
        امیدوارم امروز روز خوبی رو داشته باشید
      </h6>
      <div className=" flex gap-1 w-[85px] h-[45px] absolute top-[140px] left-[1010px]">
        <div className=" w-10 h-11 flex flex-col ">
          <span className="text-[#707070] dark:text-slate-200 text-sm text-right">
            ساعت
          </span>
          <div className="text-base">{time}</div>
        </div>
        <div className="w-10 h-10 bg-[#f1f1f1] rounded-full dark:bg-slate-500">
          <LucideClock5 className="mx-auto mt-2" />
        </div>
      </div>
      <div className=" flex gap-1 w-[175px] justify-between h-[45px] absolute top-[140px] left-[800px]">
        <div className=" w-[120px] h-11 flex flex-col ">
          <span className="text-[#707070] dark:text-slate-200 text-sm text-right">
            تاریخ
          </span>
          <div dir="rtl" className="text-base text-right mr-10 w-[120px]">{date}</div>
        </div>
        <div className="w-10 h-10 bg-[#f1f1f1] rounded-full dark:bg-slate-500">
          <LuCalendarRange size={25} className="mx-auto mt-2" />
        </div>
      </div>
    </div>
  );
};

export { WellcomePanel };
