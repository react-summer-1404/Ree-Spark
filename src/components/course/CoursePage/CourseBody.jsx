import React, { useEffect, useState } from "react";

import { CourseStyle } from "./CourseStyle";


import Loading from "../../common/Loading";
import toast from "react-hot-toast";
import { MobileCourseStyle } from "./CoursesResponsive/MobileCourseStyle";
import GetCoursePageApi from "../../../core/services/api/getCoursePage/getCoursePage.api";
import PageInationBlog from "../../blog/components/blogPageinit/PageInationBlog";
const CourseBody = () => {
  const [Course, setCourse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const rowsPerPage = 6;
  const CoursePage = async (page = 1) => {
    try {
      const res = await GetCoursePageApi({
        PageNumber: page,
        RowsOfPage: rowsPerPage,
        SortingCol: "InsertDate",
        SortType: "DESC",
      });
      console.log("🔥 Course api:", res);
      setCourse(res.news || []);
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
      <div className="">
        <div className="xl:w-[1061px]  lg:w-[961px] lg:h-[366px] lg:relative xl:left-[-120px] lg:right-[170px] lg:top-[300px] lg:justify-center lg:flex-wrap lg:gap-6 lg:flex">
          {Course.length > 0 ? (
            Course.map((item) => (
              <CourseStyle
                key={item.id}
                CourseId={item.id}
                courseName={item.title}
                teacherName={item.addUserFullName}
                imageAddress={item.currentImageAddress}
                bgcolor="bg-gradient-to-tr from-blue-500 to-purple-600"
                coursePrice="1000تومان"
                coding="started"
                level="hard"
              />
            ))
          ) : (
            <div className="relative lg:block hidden top-[200px] left-[450px]">
              <Loading />
            </div>
          )}
        </div>
      </div>
      {/* Mobile */}
      <div className="lg:hidden xs:left-[5px] flex flex-col relative ml-[10px] mt-[] justify-center  gap-[50px] ">
        {Course.length > 0 ? (
          Course.map((item) => (
            <MobileCourseStyle
              key={item.id}
              courseId={item.id}
              courseName={item.title}
              teacherName={item.addUserFullName}
              imageAddress={item.currentImageAddress}
              bgcolor="bg-black"
              coursePrice="1000تومان"
              coding="started"
              level="hard"
            />
          ))
        ) : (
          <div className="relative lg:hidden z-30 top-[350px] left-[]">
            <Loading />
          </div>
        )}
      </div>

      <div className="relative bottom-[30px] left-[305px] xl:left-[90px] xl:top-[-850px] lg:top-[] lg:left-[] lgg:top-[-85px] lgg:left-[146px] ">
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
