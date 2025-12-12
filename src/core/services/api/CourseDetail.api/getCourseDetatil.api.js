import toast from "react-hot-toast";
import http from "../../../interceptor/interseptor";

const getCourseDetatilapi = async (CourseId) => {
  try {
    const response = await http.get(`/Home/GetCourseDetails?=${CourseId}`);
    console.log("Request URL:", `/Home/GetCourseDetails?CourseId=${CourseId}`);
    return response;
  } catch (err) {
    toast.error("خطا در برقراری ارتباط");
  }
};

export default getCourseDetatilapi;
