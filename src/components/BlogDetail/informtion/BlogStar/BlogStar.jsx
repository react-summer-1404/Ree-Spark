import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaRegStar, FaStar } from "react-icons/fa";

const BlogStar = ({ initialRatin = 0, storegeKey }) => {
  const [Rating, setRating] = useState(initialRatin);
  const [hoverRating, sethoverRating] = useState(0);

  const handleClick = (value) => {
    setRating(value);
    localStorage.getItem(storegeKey, value);
    toast.success("امیتاز شما ثبت شد");
  };

  useEffect(() => {
    const savedRating = localStorage.getItem(storegeKey);
    if (savedRating !== true) {
      setRating(savedRating);
    }
  }, [storegeKey]);

  return (
    <div className="flex justify-between gap-3 items-center dark:text-white ">
      <div className="flex gap-2 mr-4 ">
        <div>نظرات</div>
        <div> (98) </div>
      </div>
      <div className=" h-[28px] flex text-yellow-400 ">
        {[1, 2, 3, 4, 5].map((item) => (
          <span
            key={item}
            onClick={() => handleClick(item)}
            onMouseEnter={() => sethoverRating(item)}
            onMouseLeave={() => sethoverRating(0)}
          >
            {item <= (hoverRating || Rating) ?
              (<FaStar size={25} /> ) : 
              (<FaRegStar size={25} /> ) 
            }

          </span>
        ))}
      </div>
      <div>({Rating})</div>
    </div>
  );
};

export default BlogStar;
