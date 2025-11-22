import http from "../../.././interceptor/interseptor";


const GetCoursePageApi = async ({
  PageNumber=1,
  RowsOfPage = 5,
  SortingCol = "insertDate",
  SortType = "DESC",
  Query = "",
  TechCount=""
}) => {
  try {
    const data = await http.get("/Home/GetCoursesWithPagination", {
      params: {
        PageNumber,
        RowsOfPage,
        SortingCol,
        SortType,
        Query,
        TechCount
      },
    });

 return data;

  } catch (error) {
    console.log("خطا در دریافت دوره",error);
   return { totalCount: 0, courseFilterDtos: [] };
  }
};

export default GetCoursePageApi ;









