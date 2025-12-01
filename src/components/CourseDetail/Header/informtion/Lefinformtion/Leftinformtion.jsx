import React from "react";
import Title from "./Title";
import Situation from "./Situation/situation";
import CourseHistory from "./CourseHistory/CourseHistory";
import StarAndPrice from "./starAndPrice/StarAndPrice";
import FavAndResAndLike from "./FavoriteListAndReservationAndLike/FavAndResAndLike";
import CourseHisMobile from "./CourseHistory/CourseHisMobile";
import StarAndPriceMobile from "./starAndPrice/StarAndPriceMobile";
import FavAndResAndLikeMobile from "./FavoriteListAndReservationAndLike/FavAndResAndLikeMobile";
import SituationMobile from "./Situation/SituationMobile";

const Leftinformtion = ({ courseData}) => {
  return (
    <div className="flex flex-wrap gap-3 w-full lg:w-[60%] justify-center  mt-4 ">
      {/* title// */}
      <Title courseData={courseData} />
      {/* Situation and informton/// */}
      <Situation courseData={courseData} />
      <SituationMobile courseData={courseData} />
      {/* history course and like&dislike course/// */}
      <CourseHistory />
      <CourseHisMobile />
      {/* score and price// */}
      <StarAndPrice />
      <StarAndPriceMobile />
      {/* Reservations and Favorites and likeDislike */}
      <FavAndResAndLike />
      <FavAndResAndLikeMobile />
    </div>
  );
};

export default Leftinformtion;
