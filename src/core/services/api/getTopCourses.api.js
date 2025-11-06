import http from "../../interseptor/interseptor";


const GetCoursesTopApi = async ({
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

export default GetCoursesTopApi   ;
