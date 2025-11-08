import http from "../../../../interceptor/interseptor";

async function RegisterOneStepApi({ gmail }) {
  try {
    const res = await http.post("/Sign/SendVerifyMessage", {
      gmail,
    });
    if (gmail) {
      localStorage.setItem("gmail",gmail);
      console.log(gmail);
    }
    return res;
  } catch (error) {
    console.error(
      " Error in sendVerifyMessageApi:",
      error.response?.data || error
    );

    throw error;
  }
}

export default RegisterOneStepApi;
