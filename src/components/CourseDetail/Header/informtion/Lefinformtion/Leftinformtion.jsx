import { Fullscreen } from "lucide-react";
import React from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FiArchive, FiBook} from "react-icons/fi";
import Title from "./Title";
import Situation from "./Situation/situation";
import CourseHistory from "./CourseHistory/CourseHistory";
import StarAndPrice from "./starAndPrice/StarAndPrice";
import FavAndResAndLike from "./FavoriteListAndReservationAndLike/FavAndResAndLike";


const Leftinformtion = () => {
  return (
    <div className="flex flex-wrap w-full lg:w-[60%] justify-center h-[400px] mt-4 ">
      {/* title// */}
        <Title/>
      {/* Situation and informton/// */}
        <Situation/>
      {/* history course and like&dislike course/// */}
        <CourseHistory/>
      {/* score and price// */}
        <StarAndPrice/>
      {/* Reservations and Favorites and likeDislike */}
        <FavAndResAndLike/>
    </div>
  );
};

export default Leftinformtion;
