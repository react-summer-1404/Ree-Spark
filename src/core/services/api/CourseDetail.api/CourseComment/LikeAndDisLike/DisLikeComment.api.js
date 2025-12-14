import http from "../../../../../interceptor/interseptor";
import toast from "react-hot-toast";

const dislikeCommentApi = async (commentId) => {
  try {
    const res = await http.post(
      `/Course/AddCourseCommentDissLike?CourseCommandId=${commentId}`
    );
    return res;
  } catch (error) {
    toast.error("خطا در ثبت دیس‌لایک");
    throw error;
  }
};

export {dislikeCommentApi};