import toast from "react-hot-toast";
import http from "../../../../interceptor/interseptor";

const CourseDislikeapi = async (courseId) => {
  try {
    const response = await http.post(
      `/Course/AddCourseDissLike?CourseId=${courseId}`
    );
    return response;
  } catch (err) {
    toast.error("خطا در برقراری ارتباط با");
    throw err;
  }
};

export default CourseDislikeapi;
