

const GetCourseTopApi = async ({
  Count = 4
}) => {
  try {
    const data = await http.get("/Home/GetCoursesTop", {
      params: {
        Count,
      },
    });
    return data;
  } catch (error) {
    console.log("خطا در دریافت دوره",error);
    throw error;
  }
};

export default GetCourseTopApi   ;
