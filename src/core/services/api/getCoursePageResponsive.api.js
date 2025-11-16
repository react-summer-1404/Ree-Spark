import http from "../../interceptor/interseptor";


const getCoursePageApiResponsive = async ({
  PageNumber=1,
  RowsOfPage = 109,
  SortingCol = "insertDate",
  SortType = "DESC",
    Query = "",
  NewsCategoryId = null,
}) => {
  try {
    const data = await http.get("/News", {
      params: {
        PageNumber,
        RowsOfPage,
        SortingCol,
        SortType,
        Query,
        NewsCategoryId,
      },
    });
    return data;
  } catch (error) {
    console.log("خطا در دریافت دوره",error);
    throw error;
  }
};

export default getCoursePageApiResponsive ;









