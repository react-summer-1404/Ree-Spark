import React, { useCallback, useEffect, useMemo, useState } from "react";
import GetCoursePageApi from "../../../../core/services/api/getCoursePage/getCoursePage.api";
import PageInationBlog from "../PageInationBlog";
import Loading from "../../../common/Loading";
import { CourseStyle } from "./CourseStyle";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import MobileCourseBody from "../CoursesResponsive/MobileCourseBody";
import debounce from "debounce";
import { Category } from "../../filter/filters/category/Category";
import toast from "react-hot-toast";

const CourseBody = () => {
  const [courses, setCourses] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("");

  const rowsPerPage = 6;

  const CoursePage = async (page = 1, Search = "", cat = "") => {

    try {
      const res = await GetCoursePageApi({
        PageNumber: page,
        RowsOfPage: rowsPerPage,
        SortingCol: "InsertDate",
        SortType: "DESC",
        Query: Search,
       TechCount: cat,
       
      });

      setCourses(res.courseFilterDtos)
      if (res.totalCount) {
        setTotalPages(Math.ceil(res.totalCount / rowsPerPage));
      }
      
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت دوره‌ها");
    }
  };


  useEffect(() => {
    CoursePage(currentPage, query, selectedCategory);
  }, [currentPage, query, selectedCategory]);


  // Debounce Search
  const dibounce = useCallback(
    debounce((value) => {
      setQuery(value);
      setCurrentPage(1);
    }, 1000),
    []
  );

  const filterCourse = useMemo(() => {
    if (!selectedCategory) return courses;
    return courses.filter((c) => c.newsCatregoryName === selectedCategory);
  }, [courses, selectedCategory]);

  
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div>
        <div className="xl:w-[1061px] lg:w-[961px] lg:h-[366px] lg:relative xl:left-[-120px] lg:right-[170px] lg:top-[300px] lg:justify-center lg:flex-wrap lg:gap-6 lg:flex">

          {filterCourse.length > 0 ? (
            filterCourse.map((item) => (
              <CourseStyle
                key={item.id}
                courseName={item.title}
                teacherName={item.addUserFullName}
                imageAddress={item.currentImageAddress}
                bgcolor="bg-black"
                coursePrice={digitsEnToFa(addCommas({item.cost}))}
                coding={item.statusName}
                level={item.levelName}
              />
            ))
          ) : (
            <div className="relative lg:block hidden top-[200px] left-[100px]">
              <Loading />
            </div>
          )}

          <MobileCourseBody />

          <Category
            Search={dibounce}
            onSelectCategory={(value) => {
              setSelectedCategory(value);
              setCurrentPage(1);
            }}
          />
        </div>
      </div>

      <div className="relative bottom-[1630px] left-[680px] xl:left-[90px] lg:top-[-835px] lg:left-[306px]">
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
