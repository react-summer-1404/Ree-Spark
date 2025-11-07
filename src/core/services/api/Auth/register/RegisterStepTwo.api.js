import http from "../../../../interceptor/interseptor";
import { getItem, setItem } from "../../../storage/storage.api";


/**
 
 * @param {{ phone: string, password: string }} data
 * @returns {Promise<any>}
 */
const RegisterStepTwoApi = async (data) => {
  try {
    
    const gmail = getItem("gmail");

    const response = await http.post("/Sign/Register", {
      gmail,
      phoneNumber: data.phone,
      password: data.password,
    });

    
    if (response.token) {
      setItem("token", response.token);
    }

    return response;
  } catch (error) {
    console.error("RegisterStepTwoApi error:", error);
    throw error;
  }
};

export default RegisterStepTwoApi;
