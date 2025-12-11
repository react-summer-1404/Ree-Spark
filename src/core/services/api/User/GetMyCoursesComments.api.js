import http from "../../../interceptor/interseptor";

export const getMyCoursesComments = async () => {
  try {
    const response = await http.get("/SharePanel/GetMyCoursesComments");

    return {
      success: true,
      data: response.myCommentsDtos || [],
    };
  } catch (error) {
    console.error("API Error:", error);

    return {
      success: false,
      data: [],
      error: error?.response?.data?.message || "خطا در ارتباط با سرور",
    };
  }
};
