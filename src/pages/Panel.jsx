import React from "react";
import { WellcomePanel } from "../components/DashBoard/WellcomePanel";
import { ProfileInfo } from "../components/DashBoard/ProfileInfo";
import MyCoursePanel from "../components/DashBoard/MyCoursePanel";
import { MyReserve } from "../components/DashBoard/MyReserve";

const Panel = () => {
  return (
    <div>
      <WellcomePanel />
      <div className="w-[253px] h-[246px] absolute top-[200px] left-[28px] bg-[#F6F6F6] rounded-3xl">
        <ProfileInfo />
      </div>

      <div className="w-[801px] h-[246px] absolute top-[200px] left-[305px] bg-[#F6F6F6] rounded-3xl">
        <MyCoursePanel />
      </div>

      <div className="w-[662px] h-[467px] absolute top-[470px] left-[443px] bg-[#F6F6F6] rounded-3xl overflow-y-auto">
        <MyReserve />
      </div>
    </div>
  );
};

export { Panel };
