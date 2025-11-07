import http from "../../interseptor/interseptor";


const GetCoursePageApi = async ({
  PageNumber=1,
  RowsOfPage = 12,
  SortingCol = "insertDate",
  SortType = "DESC",
}) => {
  try {
    const data = await http.get("/Home/GetCoursesTop", {
      params: {
        PageNumber,
        RowsOfPage,
        SortingCol,
        SortType,
      },
    });
    return data;
  } catch (error) {
    console.log("خطا در دریافت دوره",error);
    throw error;
  }
};

export default GetCoursePageApi ;









