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

const Leftinformtion = ({ courseData, id, handleUpdateLikes }) => {
  return (
    <div className="flex flex-wrap gap-3 w-full lg:w-[60%] justify-center  mt-4 ">
      {/* title// */}
      <Title courseData={courseData} />
      {/* Situation and informton/// */}
      <Situation courseData={courseData} id={id} />
      <SituationMobile courseData={courseData} id={id} />
      {/* history course and like&dislike course/// */}
      <CourseHistory courseData={courseData} />
      <CourseHisMobile />
      {/* score and price// */}
      <StarAndPrice id={id} courseData={courseData} />
      <StarAndPriceMobile />
      {/* Reservations and Favorites and likeDislike */}
      <FavAndResAndLike
      courseData={courseData}
       courseId={courseData.courseId}
        likeCount={courseData.likeCount}
        disLikeCount={courseData.disLikeCount}
        onUpdate={handleUpdateLikes}
        isUserFavorite={courseData.isUserFavorite}
      />
      <FavAndResAndLikeMobile />
    </div>
  );
};

export default Leftinformtion;
