import http from "../../../../interceptor/interseptor";


const ForgetPasswordApi = async (email) => {
  try {
    const result = await http.post("/Sign/ForgetPassword", {
      email: email,
      baseUrl: "https://localhost:5173/resetpassword",
    });
    return result;
  } catch (err) {
    console.error("ForgetPasswordApi error:", err);
    throw err;
  }
};

export default ForgetPasswordApi;
