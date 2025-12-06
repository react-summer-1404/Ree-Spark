import React from "react";
import Peppe from "../../assets/image/LayoutImage/Peppe.svg";
const ProfilePicture = () => {
  return (
    <div className="w-[190px] h-[190px] rounded-2xl">
        <img src={Peppe} className="w-full"/>
    </div>
  );
};

export { ProfilePicture };
