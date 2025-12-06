import React from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { ProfilePicture } from "../../components/profile/ProfilePicture";

const Picture = () => {
  return (
    <div dir="rtl">
      <div className="flex gap-2 w-[180px] h-[50px] rounded-[40px] py-3 px-4 bg-[#3772ff] text-white ">
        <AiOutlinePicture className="text-white" size={25} />
        اضافه کردن عکس
      </div>
      <div className="mt-3 flex gap-2 flex-wrap">
        <ProfilePicture />
        <ProfilePicture />

      </div>
    </div>
  );
};

export default Picture;
