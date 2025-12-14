import http from "../../../interceptor/interseptor";

const MyCourseRes = async () => {
  try {
    const response = await http.get("/SharePanel/GetMyCoursesReserve");
    return response || [];
  } catch (error) {
        console.log("Error in GetMyFavoriteCourse API:", error);
    return [];
  }
};
 export default MyCourseRes;