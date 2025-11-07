import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

const StarRating = () => {
  const [rating, setRating] = useState(0);

  const changeRating = (newRating) => {
    setRating(newRating);
    console.log('امتیاز جدید:', newRating);
  };

  return (
    <div dir='rtl' >
      <h3>امتیاز شما: {rating}</h3>
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        starHoverColor="orange"
        changeRating={changeRating}
        numberOfStars={5}
        name="rating"
        starDimension="30px"
        starSpacing="10px"
      />
    </div>
  );
};

export default StarRating;
