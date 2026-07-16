import http from "../../../interceptor/interseptor";


const TeacherApi = async () => {
  try {
    const res = await http.get("/Home/GetTeachers");
    return res || [];
  } catch (error) {
    console.log("خطا در دریافت تیچر",error);
    throw error;
  }
};

export {TeacherApi};
