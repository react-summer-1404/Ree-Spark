import { Fullscreen } from "lucide-react";
import React from "react";
import LikeAndDisLike from "./LikeAndDisLike";
import AddFavorite from "./AddFavorite";
import Reservation from "./Reservation";

const FavAndResAndLike = () => {
  return (
    <div className="sm:flex hidden gap-3 items-center md:gap-4 justify-between h-[56px] w-full ">
      <LikeAndDisLike />
      <AddFavorite />
      <Reservation />
    </div>
  );
};

export default FavAndResAndLike;
