import React from "react";

const ProfilePicture = ({ src, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`
        w-[190px] h-[190px] rounded-2xl overflow-hidden cursor-pointer 
        transition border-4
        ${isSelected ? "border-green-500" : "border-transparent hover:border-blue-400"}
      `}
    >
      <img src={src} className="w-full h-full object-cover" />
    </div>
  );
};

export { ProfilePicture };
