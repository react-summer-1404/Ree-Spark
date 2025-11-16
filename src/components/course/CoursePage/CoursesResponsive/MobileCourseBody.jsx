import { useEffect, useState } from "react";
import getCoursePageapiRsponsive from "../../../../core/services/api/getCoursePageResponsive.api";
import { addCommas, digitsEnToFa } from "@persian-tools/persian-tools";
import { MobileCourseStyle } from "./MobileCourseStyle";
import Loading from "../../../common/Loading";

const MobileCourseBody = () => {
  const [Course, setMobileCourses] = useState([]);

  const rows = 4;

  const MobileCourses = async (page = 1) => {
    try {
      const resMobile = await getCoursePageapiRsponsive({
        PageNumber: page,
        RowsOfPage: rows,
        SortingCol: "InsertDate",
        SortType: "DESC",
      });

      console.log("📱 Mobile API:", resMobile);

      setMobileCourses(resMobile.news || []);

      if (resMobile.totalCount) {
        setMobileTotalPages(Math.ceil(res.totalCount / rows));
      }
    } catch (error) {
      console.error("❌ خطای دریافت اطلاعات موبایل:", error);
    }
  };

  useEffect(() => {
    MobileCourses();
  }, );

  return (
 <div className="lg:hidden  flex flex-col relative  left-[38px] justify-center  gap-[40px] ">
           {Course.length > 0 ? (
            Course.map((item) => (
              <MobileCourseStyle
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
        <div className="relative lg:hidden z-30 top-[350px] left-[]">
            <Loading/>
          </div>
   )}
   </div>
  )

};

export default MobileCourseBody;
