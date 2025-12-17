import React from "react";
import LikeAndDisLike from "./LikeAndDisLike";
import AddFavorite from "./AddFavorite";
import Reservation from "./Reservation";
// import { Fullscreen } from "lucide-react";

// const FavAndResAndLike = ({courseId, isUserFavorite}) => {
//   return (
//     <div className="sm:flex hidden gap-3 items-center md:gap-4 justify-between h-[56px] w-full ">
//       <LikeAndDisLike courseId={courseId} />
//       <AddFavorite courseId={courseId} isUserFavorite={isUserFavorite}   />
//       <Reservation />
//     </div>
//   );
// };

const FavAndResAndLike = ({ courseId, isUserFavorite, likeCount, disLikeCount, onUpdate }) => {
  return (
    <div className="sm:flex hidden gap-3 items-center md:gap-4 justify-between h-[56px] w-full ">
      <LikeAndDisLike
        courseId={courseId}
        likeCount={likeCount}
        disLikeCount={disLikeCount}
        onUpdate={onUpdate}
      />
      <AddFavorite courseId={courseId} isUserFavorite={isUserFavorite} />
      <Reservation />
    </div>
  );
};


export default FavAndResAndLike;
