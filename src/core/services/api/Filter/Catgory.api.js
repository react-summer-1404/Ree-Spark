import http from "../../../interceptor/interseptor";


const CatgoryApi = async () => {
  try {
    const data = await http.get("/Home/GetTechnologies", {
    });
    return data;
  } catch (error) {
    console.log("خطا در دریافت کتگوری",error);
    throw error;
  }
};

export {CatgoryApi};
