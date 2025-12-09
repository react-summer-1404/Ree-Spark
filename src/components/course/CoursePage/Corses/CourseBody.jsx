import React, { useState, useEffect, useCallback } from "react";
import GetCoursePageApi from "../../../../core/services/api/getCoursePage/getCoursePage.api";
import PageInationCourses from "../PageInationCousrses";
import Loading from "../../../common/Loading";
import { CourseStyle } from "./CourseStyle";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import { MobileCourseBody } from "../CoursesResponsive/MobileCourseBody";
import debounce from "debounce";
import { FilterCore } from "../../filter/filters/separateFilter/CoreCourses/FilterCore";
import toast from "react-hot-toast";
import { ResetButton } from "../../filter/filters/separateFilter/resetButton/ResetButton";

const CourseBody = () => {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [sortingCol, setSortingCol] = useState("Active");
  const [sortType, setSortType] = useState("DESC");
  const [selectedListTech, setSelectedListTech] = useState([]);
  const [selectedLevels, setSelectedLevels] = useState("");
  const [selectedTeacher, setSelectedTeacher] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [costDown, setCostDown] = useState(0);
  const [costUp, setCostUp] = useState(10000);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const rowsPerPage = 12;

  const resetFilters = () => {
    setSelectedListTech([]);
    setSelectedLevels("");
    setSelectedTeacher("");
    setCostDown(0);
    setCostUp(10000);
    setStartDate("");
    setEndDate("");
    setSortType("DESC");
    setSortingCol("Active");
    setQuery("");
    setCurrentPage(1);
  };
  const AxiosCourses = async () => {
    setLoading(true);

    try {
      const listTech = selectedListTech.join(",");
      const techCount = selectedListTech.length;

      const res = await GetCoursePageApi({
        PageNumber: currentPage,
        RowsOfPage: rowsPerPage,
        SortingCol: sortingCol || null,
        SortType: sortType || null,
        Query: query,
        ListTech: listTech || null,
        TechCount: techCount || null,
        courseLevelId: selectedLevels || null,
        TeacherId: selectedTeacher || null,
        CostDown: costDown ?? 0,
        CostUp: costUp ?? 0,
        StartDate: startDate || null,
        EndDate: endDate || null,
      });

      setCourses(res.courseFilterDtos || []);
      setTotalPages(
        res.totalCount ? Math.ceil(res.totalCount / rowsPerPage) : 1
      );
    } catch (error) {
      toast.error("خطا در دریافت cours");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    AxiosCourses(
      currentPage,
      query,
      selectedListTech,
      selectedLevels,
      selectedTeacher,
      costDown,
      costUp,
      startDate,
      endDate,
      sortingCol,
      sortType
    );
  }, [
    currentPage,
    query,
    selectedListTech,
    selectedLevels,
    selectedTeacher,
    costDown,
    costUp,
    startDate,
    endDate,
    sortingCol,
    sortType,
  ]);

  const dibounce = useCallback(
    debounce((value) => {
      setQuery(value);
      setCurrentPage(1);
    }, 1000),
    []
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="xl:w-[1061px] lg:w-[961px] lg:h-[366px] lg:relative xl:left-[-120px] lg:right-[170px] lg:top-[300px] lg:justify-center lg:flex-wrap lg:gap-6 lg:flex">
        {courses.length > 0 ? (
          courses.map((item) => (
            <CourseStyle
              key={item.courseId}
              courseName={item.title}
              teacherName={item.teacherName}
              imageAddress={item.imageAddress}
              bgcolor="bg-black"
              coursePrice={digitsEnToFa(addCommas(item.cost))}
              coding={item.statusName}
              level={item.levelName}
            />
          ))
        ) : (
          <div className="relative lg:block hidden top-[200px] left-[100px]">
            <Loading />
          </div>
        )}

        {/* ButtonReset */}
        <div className="absolute top-[-2px] xl:left-[1080px] lg:left-[860px] lgg:left-[880px] z-50 lg:block xl:block lgg:block hidden">
          <ResetButton resetFilters={resetFilters} />
        </div>
        
        {/* mobile*/}
        <MobileCourseBody />

        {/* Core */}
        <FilterCore
          selectedLevels={selectedLevels}
          setSelectedLevels={setSelectedLevels}
          selectedListTech={selectedListTech}
          setSelectedListTech={setSelectedListTech}
          selectedTeacher={selectedTeacher}
          setSelectedTeacher={setSelectedTeacher}
          Search={dibounce}
          minValue={costDown}
          maxValue={costUp}
          setMinValue={setCostDown}
          setMaxValue={setCostUp}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          sortingCol={sortingCol}
          setSortingCol={setSortingCol}
          sortType={sortType}
          setSortType={setSortType}
        />
      </div>

      <div className="flex justify-center relative lg:bottom-[-265px] lg:left-[295px]  lgg:bottom-[-265px] lgg:left-[130px] xl:bottom-[520px] xl:left-[80px] bottom-[1000px]">
        <PageInationCourses
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export { CourseBody };
