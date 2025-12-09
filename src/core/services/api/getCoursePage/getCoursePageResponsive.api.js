import http from "../../.././interceptor/interseptor";

const GetCoursePageApi = async ({
  PageNumber = 1,
  RowsOfPage = 5,
  SortingCol = "InsertDate",
  SortType = "DESC",
  Query = "",
  TechCount = 0,
  ListTech = "",
  courseLevelId = "",
  TeacherId = "",
  CostDown,
  CostUp,
  EndDate,
  StartDate,
}) => {
  try {
    const data = await http.get("/Home/GetCoursesWithPagination?", {
      params: {
        PageNumber,
        RowsOfPage,
        SortingCol,
        SortType,
        Query,
        TechCount,
        ListTech,
        courseLevelId,
        TeacherId,
        CostDown,
        CostUp,
        EndDate,
        StartDate,
      },
    });

    return data;
  } catch (error) {
    console.log("خطا در دریافت دوره", error);
  }
};

export default GetCoursePageApi;
