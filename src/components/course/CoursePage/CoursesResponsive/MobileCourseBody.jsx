import React, { useState, useEffect, useCallback } from "react";
import GetCoursePageApi from "../../../../core/services/api/getCoursePage/getCoursePage.api";
import PageInationCourses from "../PageInationCousrses";
import Loading from "../../../common/Loading";
import { MobileCourseStyle } from "./MobileCourseStyle";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import debounce from "debounce";
import toast from "react-hot-toast";
import { MobileFilter } from "../../filter/filters/separateFilter/CoreCourses/MobileFilter";
import { SortResponsive } from "../../filter/filters/separateFilter/Sort/SortResponsive";
import MobileSortCore from "../../filter/filters/separateFilter/CoreCourses/MobileSortCore";
const MobileCourseBody = () => {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [sortingCol, setSortingCol] = useState("InsertDate");
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
  const [showFilter, setShowFilter] = useState(false);
  const [showOrder, setShowOrder] = useState(false);

  const rowsPerPage = 4;

  const AxiosMobileCourses = async () => {
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
    AxiosMobileCourses(
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
      <div className="lg:hidden  flex flex-col relative  left-[38px] justify-center  gap-[40px] ">
        {courses.length > 0 ? (
          courses.map((item) => (
            <MobileCourseStyle
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

        {/* {Button} */}
        <div className="relative bottom-[1640px] right-[30px] flex justify-center lg:hidden">
          {!showFilter && !showOrder && (
            <>
              <button
                onClick={() => setShowFilter(true)}
                className="w-[103px] absolute top-[240px] left-[255px] h-[48px]
             rounded-[40px] bg-[#2F2F2F] dark:bg-slate-700 px-[16px] py-[16px] font-medium text-[16px]
            text-white flex items-center justify-center gap-2 z-40 "
              >
                <div className="relative right-[-7px]">فیلتر</div>

                <img
                  className="w-[20px] relative left-[5px] h-[20px]"
                  src="../../../../../public/AuthImage/filter.png"
                />
              </button>

              <button
                onClick={() => setShowOrder(true)}
                className="w-[103px] absolute top-[240px] right-[266px] h-[48px]
            rounded-[40px] dark:bg-slate-700 bg-[#2F2F2F] px-[16px] py-[16px] font-medium text-[16px]
            text-white flex items-center justify-center gap-2 "
              >
                <img
                  className="w-[20px] relative left-[50px] h-[20px]"
                  src="../../../../public/AuthImage/sorting-03.png"
                />
                <div className="relative right-[25px]">ترتیب</div>
              </button>
            </>
          )}
        </div>

        {showFilter && (
          <div className=" flex justify-center relative  items-center  bg-white dark:bg-slate-800 z-50 bottom-[1590px]  ">
            <MobileFilter
              onClose={() => setShowFilter(false)}
              selectedListTech={selectedListTech}
              setSelectedListTech={setSelectedListTech}
              Search={dibounce}
              selectedLevels={selectedLevels}
              setSelectedLevels={setSelectedLevels}
              selectedTeacher={selectedTeacher}
              setSelectedTeacher={setSelectedTeacher}
              minValue={costDown}
              maxValue={costUp}
              setMinValue={setCostDown}
              setMaxValue={setCostUp}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>
        )}

        {showOrder && (
          <div className="">
            <MobileSortCore
              sortingCol={sortingCol}
              setSortingCol={setSortingCol}
              sortType={sortType}
              setSortType={setSortType}
              onClose={() => setShowOrder(false)}
            />
          </div>
        )}
      </div>

      {/* {Page} */}
     
    </>
  );
};

export { MobileCourseBody };
