import http from "../../interseptor/interseptor";


const GetCoursePageApi = async ({
  Count=12
}) => {
  try {
    const data = await http.get("/Home/GetCoursesTop", {
      params: {
        Count:Count
      },
    });
    return data;
  } catch (error) {
    console.log("خطا در دریافت دوره",error);
    throw error;
  }
};

export default GetCoursePageApi ;