import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { FaRegStar, FaStar } from "react-icons/fa";

const CourseStar = ({ storageKey, initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    const savedRating = localStorage.getItem(storageKey);
    if (savedRating) {
      setRating(Number(savedRating));
    }
  }, [storageKey]);

  // const handleClick = (value) => {
  //   setRating(value);
  //   localStorage.setItem(storageKey, value);
  //   toast.success("امتیاز شما ثبت شد");
  // };

  const handleClick = (value) => {
    setRating(value);
    localStorage.getItem(storageKey, value)
    toast.success("امیتاز ثبت شد ");
  }
  


  return (
    <div className="flex justify-between gap-3 items-center dark:text-white">
      <div className="flex gap-2 mr-4">
        <div>نظرات</div>
        <div>(120)</div>
      </div>

      <div className="h-[28px] flex text-yellow-400">
        {[1, 2, 3, 4, 5].map((item) => (
          <span
            key={item}
            className="cursor-pointer"
            onClick={() => handleClick(item)}
            onMouseEnter={() => setHoverRating(item)}
            onMouseLeave={() => setHoverRating(0)}
          >
            {item <= (hoverRating || rating) ? (
              <FaStar size={25} />
            ) : (
              <FaRegStar size={25} />
            )}
          </span>
        ))}

      </div>

      <div>({rating})</div>
    </div>
  );
};

export default CourseStar;
