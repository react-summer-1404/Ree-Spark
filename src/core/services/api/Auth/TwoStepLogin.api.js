import http from "../../../interceptor/interseptor";


export const loginTwoStep = async (code, phoneOrGmail) => {
  try {
    const response = await http.post(`/Sign/LoginTelegram/${code}/${phoneOrGmail}`);
    
    
    if (response?.token) {
      localStorage.setItem("token", response.token);
    }

    return response;
  } catch (error) {
    console.error("Error verifying 2FA code:", error);
    return false;
  }
};
