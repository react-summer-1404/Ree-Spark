import toast from "react-hot-toast";
import http from "../../../../interceptor/interseptor";

const AddCommentApi = async (CourseId, Title, Describe) => {
  try {
    const response = await http.post(`/Course/AddCommentCourse`, {
      CourseId,Title,Describe
    });
    return response; 
  } catch (error) {
    toast.error("خطا در ثبت نظر");
    throw error;
  }
};

export default AddCommentApi;
