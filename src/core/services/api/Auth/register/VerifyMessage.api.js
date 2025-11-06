import http from "../../../../interceptor/interseptor";


export const verifyCodeApi = async ({ verifyCode }) => {
  try {
    const gmail = localStorage.getItem("gmail");
    const response = await http.post("/Sign/VerifyMessage", {
      gmail,
      verifyCode,
    });

    alert(" verifyCodeApi success:", response);
    return response;
  } catch (error) {
    console.error(" verifyCodeApi error:", error.response?.data || error);
    throw error;
  }
};

