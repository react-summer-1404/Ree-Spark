import React from "react";
import MobileSlider from "../slider/MobileSlider";
import { MobileCategory } from "../category/MobileCategory";
import { MobileCourseBody } from "../../../../CoursePage/CoursesResponsive/MobileCourseBody";
import MobileSearchFilter from "../search/MobileSearchFilter";
import { MobileCourseLevel } from "../courseLevel/MobileCourseLevel ";
import { MobileTeacher } from "../Teacher/MobileTecher";
import { MobileTeacherFilter } from "../Teacher/MobileTeacherFilter";
import MobileDateFilter from "../EndDate&StartDate/MobileDateFilter";
const MobileFilter = ({
  onClose,
  Search,
  selectedListTech,
  setSelectedListTech,
  selectedLevels,
  setSelectedLevels,
  selectedTeacher,
  setSelectedTeacher,
  minValue,
  maxValue,
  setMinValue,
  setMaxValue,
  setSortType,
  sortType,
  setSortingCol,
  sortingCol,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const handleSelectListTech = (value) => {
    setSelectedListTech(value);
  };

  const handleSelectLevel = (value) => {
    setSelectedLevels(value);
  };

  const handleSelectTeacher = (value) => {
    setSelectedTeacher(value);
  };

  const handleChengSort = (type, col) => {
    setSortType(type);
    setSortingCol(col);
  };

  return (
    <div className="fixed inset-0 z-50 relaive bg-black bg-opacity-60 flex overflow-y-auto">
      <div className="relative top-[140px] left-[-140px]  sm:left-[130px] sm4:left-[110px] sm3:left-[100px] sm2:left-[70px] ln:left-[300px] lg:left-[100px] sm1:left-[100px] md1:left-[180px] xs:left-[25px] md:left-[200px] xs2:left-[-100px] lv:left-[310px] x3:left-[-60px] ">
        <div className=" ">
          <div className="w-[393px] h-[705px]  bg-[#FCFCFC] border-2 border-[#DCDCDC]  dark:text-white border-Gray-400 dark:bg-slate-700 rounded-[32px]  absolute ">
            <div className="w-[56px] h-[8px] border-[2px]  border-gray-400 rounded-[4px] absolute mt-[10px] ml-[165px]"></div>

            <h1 className="font-bold text-2xl w-[278px] h-[34px] absolute top-[40px] ml-[96px] text-right text-[24px]">
              فیلتر
            </h1>
            <button
              onClick={onClose}
              className="w-[101px] h-[40px] rounded-[34px] relative top-[35px] ml-[20px]
               border-[#FF5353] border-[1px] text-[#FF5353] font-medium font-[18px] leading-[20px] z-10 "
            >
              <img
                className="absolute ml-[70px] mt-[2px]"
                src="../../../../public/AuthImage/cancel-01.png"
              />
              بستن
            </button>

            {/* {filter} */}
            <div className="relative left-[7px] bottom-[-45px] ">
              <div className="relative bottom-[30px]">
                <MobileSearchFilter Search={Search} />
              </div>

              {/* {category} */}

              <MobileCategory
                selectedListTech={selectedListTech}
                onSelectListTech={handleSelectListTech}
              />

              {/* {Level training} */}
              <div className="">
                <MobileCourseLevel
                  selectedLevels={selectedLevels}
                  onSelectLevels={handleSelectLevel}
                />
              </div>
              {/* {Teachers} */}

              <MobileTeacher
                selectedTeacher={selectedTeacher}
                onSelectTeacher={handleSelectTeacher}
              />

              {/* {price} */}

              <div className="absolute ml-[20px]">
                <div className="w-[75px] h-[24px] gap-2 top-[10px] relative right-[14px] float-right flex ">
                  <h3 className="w-[43px] h-[23px]  text-[15px] font-medium leading-5 text-right ">
                    قیمت
                  </h3>
                  <img
                    src="../../../../public/AuthImage/money-04-stroke-rounded 2.png"
                    className="w-[24px] h-[24px]  "
                  />
                </div>
                <div className="relative bottom-[25px] right-[13px]">
                  <MobileSlider
                    minValue={minValue}
                    maxValue={maxValue}
                    setMinValue={setMinValue}
                    setMaxValue={setMaxValue}
                  />
                </div>
              </div>
              {/* {time} */}

              <MobileDateFilter
                startDate={startDate}
                endDate={endDate}
                setStartDate={setStartDate}
                setEndDate={setEndDate}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MobileFilter };
