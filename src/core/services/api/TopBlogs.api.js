import http from "../../interseptor/interseptor";

const TopBlogsApi = async ({
  RowsOfPage = 3,
  SortingCol = "insertDate",
  SortType = "DESC",

}) => {
  try {
    const data = await http.get("/News", {
      params: {
        RowsOfPage,
        SortingCol,
        SortType,
      },
    });
    return data;
  } catch (error) {
    console.log("خطا در دریافت بلاگ",error);
    throw error;
  }
};

export default TopBlogsApi;
