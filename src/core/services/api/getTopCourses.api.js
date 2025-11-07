import http from "../../interseptor/interseptor";


const GetCoursesTopApi = async ({
  
}) => {
  try {
    const data = await http.get("/Home/GetCoursesTop", {
      params: {
        
      },
    });
    return data;
  } catch (error) {
    console.log("خطا در دریافت دوره",error);
    throw error;
  }
};

export default GetCoursesTopApi   ;
