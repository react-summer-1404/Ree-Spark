import toast from "react-hot-toast";
import http from "../../../../interceptor/interseptor";

const getCourseCommentApi = async (CourseId) => {
  try {
    const response = await http.get(`/Course/GetCourseCommnets/${CourseId}`);
    //  console.log(" courseId:", courseId);
    return response;
  } catch (error) {
    toast.error("خطا در برقراری ارتباط ");
    throw error;
  }
};

export default getCourseCommentApi;
