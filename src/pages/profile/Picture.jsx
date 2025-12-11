import React, { useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { ProfilePicture } from "../../components/profile/ProfilePicture";

import toast from "react-hot-toast";
import SelectProfileImageApi from "../../core/services/api/User/selectProfileImage.api";

const Picture = () => {
  const [selectedId, setSelectedId] = useState(null);

  const images = [
    { id: "img-1", src: "../../../src/assets/image/LayoutImage/Peppe.svg" },
    { id: "img-2", src: "../../../src/assets/image/LayoutImage/Froge.png" },
    { id: "img-3", src: "../../../src/assets/image/LayoutImage/Lady.png" },
    { id: "img-4", src: "../../../src/assets/image/LayoutImage/Smeed.png" },
  ];

  const handleSelect = async (imageId) => {
    try {
      await SelectProfileImageApi(imageId);

      setSelectedId(imageId);

      toast.success("عکس پروفایل با موفقیت انتخاب شد");
    } catch (error) {
      toast.error("خطا در انتخاب عکس");
      console.log(error);
    }
  };

  return (
    <div dir="rtl" className="w-[90%]">
      <div className="flex gap-2 w-[180px] h-[50px] rounded-[40px] py-3 px-4 bg-[#3772ff] text-white cursor-pointer">
        <AiOutlinePicture className="text-white" size={25} />
        اضافه کردن عکس
      </div>

      <div className="mt-3 flex flex-wrap gap-4">
        {images.map((img) => (
          <ProfilePicture
            key={img.id}
            src={img.src}
            isSelected={img.id === selectedId}
            onClick={() => handleSelect(img.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Picture;
