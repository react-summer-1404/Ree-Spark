import http from "../../../interceptor/interseptor";


const GetCategoryApi = async () => {
  try {
    const response = await http.get("/NewsCategory/GetAll");
    return response; // فرض می‌کنیم سرور لیست دسته‌ها رو داخل data برمی‌گردونه
  } catch (error) {
    console.error("خطا در گرفتن دسته‌ها:", error);
    return [];
  }
};

export default GetCategoryApi;
