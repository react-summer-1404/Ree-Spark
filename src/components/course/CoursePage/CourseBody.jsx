import React from "react";
import {MobileCourseBody} from "./MobileCourseBody"
import { CourseStyle } from "./CourseStyle";
import GetCoursePageApi from "../../../core/services/api/getCoursePage.api"
const CourseBody = () => { 
  const [Course, setCourse] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const rowsPerPage = 6;

 const CoursePage = async (page = 1 , RowsOfPage=12 ) => {
    try {
      const res = await GetCoursePageApi({
        PageNumber: page,
        RowsOfPage: RowsOfPage,
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
    GetCoursePageApi(currentPage);
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div className=" hidden lg:block">
        <div className=" xl:w-[1061px] lg:w-[961px] lg:h-[366px] lg:relative xl:left-[-120px]  lg:right-[170px] lg:top-[300px] lg:justify-center  lg:flex-wrap lg:gap-6  lg:flex ">
          {Course.map((item)=> {
            <CourseStyle
            key={item.item}
            />
          }
        )}
        </div>
      </div>
      <div className="lg:hidden">
        <MobileCourseBody />
      </div>
    </div>
  );
};
export { CourseBody };
