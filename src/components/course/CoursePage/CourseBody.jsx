import React, { useEffect, useState } from "react";
import { MobileCourseBody } from "./MobileCourseBody";
import { CourseStyle } from "./CourseStyle";
import GetCoursePageApi from "../../../core/services/api/getCoursePage.api";
import { PageInationBlog } from "./PageInationBlog";

const CourseBody = () => {
  const [Course, setCourse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const CoursePage = async (page = 1, rowsPerPage = 12) => {
    try {
      const res = await GetCoursePageApi({
        PageNumber: page,
        RowsOfPage: rowsPerPage,
        SortingCol: "InsertDate",
        SortType: "DESC",
      });
      console.log("🔥 Course api:", res);
      setCourse(res || []);
      if (res.totalCount) {
        setTotalPages(Math.ceil(res.totalCount / rowsPerPage));
      }
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت همه دوره ها");
    }
  };

  useEffect(() => {
    CoursePage(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Desktop */}
      <div className="hidden lg:block">
        <div className="xl:w-[1061px] lg:w-[961px] lg:h-[366px] lg:relative xl:left-[-120px] lg:right-[170px] lg:top-[300px] lg:justify-center lg:flex-wrap lg:gap-6 lg:flex">
          {Course.length > 0 ? (
            Course.map((item) => (
              <CourseStyle
                key={item.id}
                courseName={item.title}
                teacherName={item.teacherName}
                coursePrice={item.cost}
                coding={item.statusName}
                imageAddress={item.imageAddress}
                level={item.levelName}
                bgcolor="bg-black"
              />
            ))
          ) : (
            <div className=""></div>
          )}
        </div>
      </div>

      {/* Mobile */}
      <div className="lg:hidden">
        <MobileCourseBody />
      </div>

       <PageInationBlog
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    
    </div>
  );
};

export { CourseBody };
