import toast from "react-hot-toast";
import http from "../../../interceptor/interseptor";

const CourseRatingApi = async (courseId, rateNumber) => {
  try {
    const response = await http.post(
      `/Course/SetCourseRating?CourseId=${courseId}&RateNumber=${rateNumber}`
    );
    return response;
  } catch (error) {
    // toast.error("خطا در ثبت امتیاز");
    throw error;
  }
};

export default CourseRatingApi;
