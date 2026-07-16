import React, { useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const LikeAction = () => {
  const [active, setActive] = useState("");

  const handleLike = async () => {
    if (active === "like") {
      setActive("");
      // toast("لایک برداشته شد");
      return;
    }

    setActive("like");
  
  };

  const getButtonClass = (type) => {
    let baseClass =
      "sm:min-w-[56px] min-w-[48px] h-[48px] sm:h-[56px] cursor-pointer flex justify-center items-center rounded-full border-2";

    if (active === type) {
      baseClass += " bg-[#3772FF]";
    } else {
      baseClass += " bg-transparent";
    }

    return baseClass;
  };

  return (
    <div className="flex items-center md:gap-4 gap-1 ">
      {/* Dislike */}
      <div
        onClick={() => setActive("dislike")}
        className={getButtonClass("dislike")}
      >
        <AiFillDislike size={25} className="dark:text-white"/>
      </div>

      {/* Like */}
      <div onClick={() => setActive("like")} className={getButtonClass("like")}>
        <AiFillLike size={25}  className="dark:text-white" />
      </div>
    </div>
  );
};

export default LikeAction;
