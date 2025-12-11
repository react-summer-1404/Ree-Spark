import http from "../../../interceptor/interseptor";


const GetCategoryApi = async (Id) => {
  try {
const res = await http.get("/News/GetListNewsCategory")
   return res || [];
  } catch (error) {
    console.log("خطا در دریافت کتگوری",error);
    throw error;
  }
};

export default GetCategoryApi;
