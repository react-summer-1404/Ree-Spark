import http from "../../../interceptor/interseptor";


const CourseLevelApi = async () => {
  try {
    const res = await http.get("/CourseLevel/GetAllCourseLevel");
    return res || [];
  } catch (error) {
    console.log("خطا در دریافت کتگوری",error);
    throw error;
  }
};

export {CourseLevelApi};
