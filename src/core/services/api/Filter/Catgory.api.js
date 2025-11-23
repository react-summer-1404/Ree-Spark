import http from "../../../interceptor/interseptor";


const CatgoryApi = async () => {
  try {
    const res = await http.get("/Home/GetTechnologies");
    return res || [];
  } catch (error) {
    console.log("خطا در دریافت کتگوری",error);
    throw error;
  }
};

export {CatgoryApi};
