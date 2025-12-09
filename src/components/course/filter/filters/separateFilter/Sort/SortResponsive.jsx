import React from "react";
import { IoMdClose } from "react-icons/io";

const SortResponsive = ({ sortType, sortingCol, onChangeSort ,onClose}) => {
  const activeClass = "border-[#FF5353] text-[#FF5353]";
  const inactiveClass = "text-black dark:text-white border-black dark:border-slate-400";


    const handleClick = (opt) => {
      if (sortType === opt.type && sortingCol === opt.col) {
        onChangeSort("");
      } else {
        onChangeSort(opt.type, opt.col);
      }
    };
    
  return (
    <div className="fixed inset-0 z-50 relaive bg-black bg-opacity-60 flex ">
      <div className="absolute w-[393px] h-[204px]  rounded-[32px] top-[300px] left-[218px]  mx-auto flex justify-center flex-row items-center bg-white dark:bg-slate-800 z-50  sm:left-[120px] sm4:left-[110px] sm3:left-[100px] sm2:left-[70px] ln:left-[300px] lg:left-[100px] sm1:left-[100px] md1:left-[180px] xs:left-[25px] md:left-[200px] xs2:left-[-100px] xs1:left-[-120px] lv:left-[300px] x3:left-[-60px]">
        <div className="w-[265px] h-[100px] gap-[10px]  z-10 dark:border-[#FCFCFC] dark:text-white font-medium flex flex-wrap relative top-[18px] left-[50px] ">
          <div className="w-[56px] h-[8px] border-[2px] border-gray-400 rounded-[4px] relative top-[-63px] left-[72px]"></div>

          <div className="mt-1 font-bold text-xl absolute left-[210px] bottom-[110px]">
            ترتیب
          </div>

          <button
            onClick={onClose}
            className="w-[101px] h-[40px] rounded-[34px] absolute top-[-45px] ml-[-90px]
               border-[#FF5353] border-[1px] text-[#FF5353] font-medium font-[18px] leading-[20px] z-10 "
          >
            <img
              className="absolute ml-[70px] mt-[-1px]"
              src="../../../../public/AuthImage/cancel-01.png"
            />
            <p className="relative right-[4px]">بستن</p>
          </button>

          {/* news */}
          <div className="relative left-[55px] bottom-[10px]">
            <div className="relative right-[40px]  flex flex-row gap-2">
              <button
                onClick={() => onChangeSort("DESC", "lastUpdate")}
                className={`w-[110px] hover:w-[135px] hover:text-[#FF5353] relative  ml-[px] hover:border-[#FF5353] h-10 border flex gap-2 rounded-[34px] transition-all duration-150 py-2 px-4 ${
                  sortType === "DESC" && sortingCol === "lastUpdate"
                    ? activeClass
                    : inactiveClass
                }`}
              >
                <span>محبوب‌ترین</span>
                {sortType === "DESC" && sortingCol === "lastUpdate" && (
                  <IoMdClose size={20} />
                )}
              </button>

              {/* faverit */}
              <button
                onClick={() => onChangeSort("DESC", "likeCount")}
                className={`w-[100px] hover:w-[125px] hover:text-[#FF5353] hover:border-[#FF5353] h-10 border flex gap-2 rounded-[34px] transition-all duration-150 py-2 px-4 ${
                  sortType === "DESC" && sortingCol === "likeCount"
                    ? activeClass
                    : inactiveClass
                }`}
              >
                <span>جدیدترین</span>
                {sortType === "DESC" && sortingCol === "likeCount" && (
                  <IoMdClose size={23} />
                )}
              </button>
            </div>
            {/* most */}
            <div className="relative right-[9px] flex flex-row gap-2 mt-[14px]">
              <button
                onClick={() => onChangeSort("DESC", "cost")}
                className={`w-[90px] hover:w-[115px] hover:text-[#FF5353] hover:border-[#FF5353] h-10 border flex gap-2 rounded-[34px] transition-all duration-150 py-2 px-4 ${
                  sortType === "DESC" && sortingCol === "cost"
                    ? activeClass
                    : inactiveClass
                }`}
              >
                <span>گران‌ترین</span>
                {sortType === "DESC" && sortingCol === "cost" && (
                  <IoMdClose size={23} />
                )}
              </button>

              {/* TheCheapest  */}
              <button
                onClick={() => onChangeSort ("ASC", "cost")}
                className={`w-[90px] hover:w-[115px] hover:text-[#FF5353] hover:border-[#FF5353] h-10 border flex gap-2 rounded-[34px] transition-all duration-150 py-2 px-4 ${
                  sortType === "ASC" && sortingCol === "cost"
                    ? activeClass
                    : inactiveClass
                }`}
              >
                <span>ارزان‌ترین</span>
                {sortType === "ASC" && sortingCol === "cost" && (
                  <IoMdClose size={23} />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SortResponsive };
