import React from "react";
import LikeAction from "../LikeAction/LikeAction";
import { FiArchive } from "react-icons/fi";
import { Fullscreen } from "lucide-react";
import ButtonFav from "./ButtonFav";

const LikeActionAndFav = () => {
  return (
    <div className="sm:flex hidden gap-3 md:gap-4  justify-between h-[56px] w-full ">
      <LikeAction />
      <ButtonFav />
    </div>
  );
};

export default LikeActionAndFav;
