import toast from "react-hot-toast";
import http from "../../../../interceptor/interseptor";

const CourseLikeapi = async (courseId) => {
  try {
    const response = await http.post(`/Course/AddCourseLike?CourseId=${courseId}`);
    return response;
  } catch (error) {
    toast.error("خطا در ارتباط با سرور");
    throw error;
  }
};

export default CourseLikeapi;
