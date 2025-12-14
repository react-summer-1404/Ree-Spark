import http from "../../../interceptor/interseptor";

const GetAllTeacher = async () => {
  try {
    const response = await http.get("/Home/GetTeachers");
    return response ||[];
  } catch (error) {
    console.log("دریافت اطلاعات اساتید برقرار نبود", error);
  }
};
export {GetAllTeacher}