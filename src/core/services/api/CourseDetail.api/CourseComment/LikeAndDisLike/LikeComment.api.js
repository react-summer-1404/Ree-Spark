// likeComment.api.js
import toast from "react-hot-toast";
import http from "../../../../../interceptor/interseptor";

const likeCommentApi = async (commentId) => {
  try {
    const res = await http.post(`/Course/AddCourseCommentLike?CourseCommandId=${commentId}`);
    return res;
  } catch (error) {
    toast.error("خطا در ثبت لایک");
    throw error;
  }
};

export {likeCommentApi};