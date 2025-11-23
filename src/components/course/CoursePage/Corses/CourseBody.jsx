import React, { useCallback, useEffect, useState } from "react";
import GetCoursePageApi from "../../../../core/services/api/getCoursePage/getCoursePage.api";
import PageInationBlog from "../PageInationBlog";
import Loading from "../../../common/Loading";
import { CourseStyle } from "./CourseStyle";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import MobileCourseBody from "../CoursesResponsive/MobileCourseBody";
import debounce from "debounce";
import { Category } from "../../filter/filters/category/Category";
import toast from "react-hot-toast";

const rowsPerPage = 9;

const CourseBody = () => {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchCourses = async (page = 1, search = "", category = "") => {
    setLoading(true);
    try {
      const res = await GetCoursePageApi({
        PageNumber: page,
        RowsOfPage: rowsPerPage,
        SortingCol: "InsertDate",
        SortType: "DESC",
        Query: search,
        ListTech: category ? [category] : [],
      });

      setCourses(res.courseFilterDtos || []);
      setTotalPages(
        res.totalCount ? Math.ceil(res.totalCount / rowsPerPage) : 1
      );

    } catch (error) {
      toast.error("خطا در دریافت دوره‌ها");
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    fetchCourses(currentPage, query, selectedCategory);
  }, [currentPage, query, selectedCategory]);

  const debouncedSearch = useCallback(
    debounce((value) => {
      setQuery(value);
      setCurrentPage(1);
    }, 600),
    []
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <div className="xl:w-[1061px] lg:w-[961px] lg:h-[366px] lg:relative xl:left-[-120px] lg:right-[170px] lg:top-[300px] lg:justify-center lg:flex-wrap lg:gap-6 lg:flex">

          {/* لیست دوره‌ها */}
          {loading ? (
            <div className="relative lg:block hidden top-[200px] left-[100px]">
              <Loading />
            </div>
          ) : courses.length > 0 ? (
            courses.map((item) => (
              <CourseStyle
                key={item.courseId}
                courseName={item.title}
                teacherName={item.teacherName}
                imageAddress={item.currentImageAddress}
                bgcolor="bg-black"
                coursePrice={digitsEnToFa(addCommas(item.cost))}
                coding={item.statusName}
                level={item.levelName}
              />
            ))
          ) : (
            <p className="text-center text-gray-300 w-full mt-10">
              دوره‌ای یافت نشد
            </p>
          )}

          {/* mobile */}
          <MobileCourseBody />

          {/* filter */}
          <Category
            Search={debouncedSearch}
            onSelectCategory={(value) => {
              setSelectedCategory(value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      {/* Pagination */}
      <div className="relative bottom-[1630px] left-[680px] xl:top-[-875px] xl:left-[75px] lgg:top-[-105px] lgg:left-[134px] lg:top-[-115px] lg:left-[287px]">
        <PageInationBlog
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export { CourseBody };
