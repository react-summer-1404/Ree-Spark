import React, { useState } from "react";
import { MobileFilter } from "../MobileFilter";
import {Order} from "../Order";

function ButtonRispansive() {
  const [showFilter, setShowFilter] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  return (
    <div className="relative right-[40px]  md:left-[-10px] lg:hidden">
      {/* دکمه فیلتر */}
      {!showFilter && !showOrder && (
        <>
          <button
            onClick={() => setShowFilter(true)}
            className="w-[103px] absolute top-[240px] right-[40px] h-[48px]
            rounded-[40px] bg-[#2F2F2F] px-[16px] py-[16px] font-medium text-[16px]
            text-white flex items-center justify-center gap-2 z-40 "
          >
            <img
              className="w-[20px] h-[20px]"
              src="../../../../public/AuthImage/Vector.png"
              alt="filter"
            />
            فیلتر
          </button>

          <button
            onClick={() => setShowOrder(true)}
            className="w-[103px] absolute top-[240px] right-[230px] h-[48px]
            rounded-[40px] bg-[#2F2F2F] px-[16px] py-[16px] font-medium text-[16px]
            text-white flex items-center justify-center gap-2 z-50"
          >
            <img
              className="w-[20px] h-[20px]"
              src="../../../../public/AuthImage/sorting-03.png"
              alt="sort"
            />
            ترتیب
          </button>

        </>
     
      )}
          
   
      {showFilter && (
        <div className="  flex justify-center items-center bg-white dark:bg-slate-800 z-50">
          <MobileFilter onClose={() => setShowFilter(false)} />
        </div>
      )}

      {/* نمایش ترتیب */}
      {showOrder && (
        <div className="relative w-[393px] h-[234px] rounded-[32px] top-[300px] right-0 left-0 mx-auto flex justify-center flex-row items-center bg-white dark:bg-slate-800 z-50">
          <Order onClose={() => setShowOrder(false)} />
        </div>
      )}
    </div>
  );
}

export { ButtonRispansive };
