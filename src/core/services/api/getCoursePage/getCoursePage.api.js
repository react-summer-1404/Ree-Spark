import http from "../../.././interceptor/interseptor";

const GetCoursePageApi = async ({
  PageNumber = 1,
  RowsOfPage = 5,
  SortingCol = "insertDate",
  SortType = "DESC",
  Query = "",
  TechCount = 0,
  ListTech = ""   
}) => {
  try {
    const data = await http.get("/Home/GetCoursesWithPagination", {
      params: {
        PageNumber,
        RowsOfPage,
        SortingCol,
        SortType,
        Query,
        TechCount,
        ListTech
      },
    });

    return data;  

  } catch (error) {
    console.log("خطا در دریافت دوره", error);
  }
};

export default GetCoursePageApi;
