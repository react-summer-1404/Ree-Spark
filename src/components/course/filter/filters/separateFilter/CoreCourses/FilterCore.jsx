import React from "react";
import { Category } from "../category/Category";
import SearchFilter from "../search/SearchFilter";
import { CourseLevel } from "../courseLevel/CourseLevel";
import { Teacher } from "../Teacher/Techer";
import Slider from "../slider/Slider";
import DateFilter from "../EndDate&StartDate/DateFilter";
import { Sort } from "../Sort/Sort";

const FilterCore = ({
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
    <div className="flex justify-end">
      <div
        className="hidden lg:block lg:w-[298px] absolute bottom-[-302px] lgg:left-[865px] 
        lg:left-[845px] xl:left-[1065px] lg:h-[665px] lg:bg-[#FCFCFC] lg:border-2 
      lg:border-[#DCDCDC] dark:text-white dark:bg-slate-700 
        lg:rounded-[32px] font-sans"
      >
        <h1 className="lg:font-bold lg:text-2xl lg:w-[278px] lg:h-[34px] lg:absolute lg:top-[10px] lg:text-right">
          فیلتر
        </h1>

        {/* search */}
        <SearchFilter Search={Search} />

        {/* category */}
        <Category
          selectedListTech={selectedListTech}
          onSelectListTech={handleSelectListTech}
        />

        {/* level  */}
        <CourseLevel
          selectedLevels={selectedLevels}
          onSelectLevels={handleSelectLevel}
        />

        {/* teacher */}
        <Teacher
          selectedTeacher={selectedTeacher}
          onSelectTeacher={handleSelectTeacher}
        />

        {/* slider */}
        <Slider
          minValue={minValue}
          maxValue={maxValue}
          setMinValue={setMinValue}
          setMaxValue={setMaxValue}
        />

        {/* date range */}
        <DateFilter
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />

        {/* sort */}
        <Sort
          sortType={sortType}
          sortingCol={sortingCol}
          onChangeSort={handleChengSort}
        />



      </div>
    </div>
  );
};

export { FilterCore };
