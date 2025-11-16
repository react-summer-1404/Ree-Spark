import React, { useEffect, useState } from "react";
import GetCoursePageApi from "../../../../core/services/api/getCoursePage.api";
import PageInationBlog  from "../PageInationBlog";
import Loading from "../../../common/Loading";
import {CourseStyle} from "./CourseStyle"
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import MobileCourseBody from "../CoursesResponsive/MobileCourseBody";

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
                courseName={item.title}
                teacherName={item.addUserFullName}
                imageAddress={item.currentImageAddress}
                bgcolor="bg-black"
                coursePrice={digitsEnToFa(addCommas(1000))}       
                coding="started"
                level="hard" 
              />
            ))
          ) : (
        <div className="relative lg:block hidden top-[200px] left-[100px]">
            <Loading />
          </div>
          )}
          <MobileCourseBody/>
   
      </div>
    </div>
  

    
   
     
    <div className="relative bottom-[1630px] left-[680px] xl:left-[90px] lg:top-[-835px] lg:left-[306px]  lgg:top-[-835px] xl:top-[-1200px] lgg: ">
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
