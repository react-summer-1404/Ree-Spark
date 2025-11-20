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

const Leftinformtion = ({course}) => {
  return (
    <div className="flex flex-wrap gap-3 w-full lg:w-[60%] justify-center  mt-4 ">
      {/* title// */}
      <Title course={course}  />
      {/* Situation and informton/// */}
      <Situation course={course}/>
      <SituationMobile course={course}/>
      {/* history course and like&dislike course/// */}
      <CourseHistory course={course}/>
      <CourseHisMobile course={course}/>
      {/* score and price// */}
      <StarAndPrice course={course}/>
      <StarAndPriceMobile course={course}/>
      {/* Reservations and Favorites and likeDislike */}
      <FavAndResAndLike course={course}/>
      <FavAndResAndLikeMobile course={course}/>
      
    </div>
  );
};

export default Leftinformtion;
