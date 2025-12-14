import http from "../../../interceptor/interseptor";

const GetAllTeacher = async () => {
  console.log(response);
  try {
    const response = await http.get("/Home/GetTeachers");
    return response.data;
    
    } catch (error) {
    console.log("دریافت اطلاعات اساتید برقرار نبود", error);
  }
};
export {GetAllTeacher}