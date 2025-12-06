import http from "../../../interceptor/interseptor";

const FavoriteCourseApi = async () => {
  try {
    const response = await http.get("/SharePanel/GetMyFavoriteCourses");
    return response.favoriteCourseDto || [];
  } catch (error) {
    console.log("Error in GetMyFavoriteCourse API:", error);
    return [];
  }
};

export default FavoriteCourseApi;