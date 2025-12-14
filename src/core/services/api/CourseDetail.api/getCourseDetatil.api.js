// import http from "../../../interceptor/interceptor";

import http from "../../../interceptor/interseptor";

const getCourseDetailApi = async (courseId) => {
  try {
    const response = await http.get(
      `/Home/GetCourseDetails?CourseId=${courseId}`
    );
    // console.log(response);
    console.log("API Response:", response);

    return response || null;
  } catch (error) {
    console.error("GetCourseDetail API Error:", error);
    return null;
  }
};

export default getCourseDetailApi;
