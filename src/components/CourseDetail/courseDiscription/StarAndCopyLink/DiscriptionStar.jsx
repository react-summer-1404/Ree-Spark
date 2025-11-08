import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";

const DiscriptionStar = ({ rating }) => {
  return (
    <div className="flex justify-between gap-3 items-center dark:text-white ">
      <div className="flex gap-2 mr-4 "> 
        <div>نظرات</div>
        <div> (98) </div>
      </div>
      <div className=" h-[28px] flex text-yellow-400 ">
        {[1, 2, 3, 4, 5].map((itemS) =>
          itemS <= rating ? <FaStar size={25} key={itemS} /> : <FaRegStar size={25} key={itemS} />
        )}
      </div>
      <div>({rating})</div>
    </div>
  );
};

export default DiscriptionStar;

