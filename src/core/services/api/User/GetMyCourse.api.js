import toast from "react-hot-toast";
import http from "../../../interceptor/interseptor";

const GetMyCourse = async ({
  PageNumber,
  RowsOfPage,
  SortingCol,
  SortType,
  Query,
}) => {
  try {
    const response = await http.get("/SharePanel/GetMyCourses", {
      params: {
        PageNumber,
        RowsOfPage,
        SortingCol,
        SortType,
        Query,
      },
    });

    return response;
  } catch (error) {
    return null;
  }
};

export default GetMyCourse;
