import http from "../../../interceptor/interseptor";

const AddCourseFavoriteapi = async (courseId) => {
  try {
    const response = await http.post("/Course/AddCourseFavorite", { courseId });
    return response;
  } catch (error) {
    console.error("AddCourseFavorite API Error:");
     throw error;
  }
};

export default AddCourseFavoriteapi;
