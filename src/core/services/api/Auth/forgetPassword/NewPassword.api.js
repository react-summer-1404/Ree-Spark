import http from "../../../interceptor";
import { getItem } from "../../../services/storage/storage.api";

const NewPasswordApi = async (data) => {
  try {
    const gmail = getItem("gmail"); 
    const body = {
      gmail,
      newPassword: data.newPassword,
      resetValue: data.resetValue,
    };

    const response = await http.post("/Sign/Reset", body);
    return response;
  } catch (error) {
    console.error("newPasswordApi error:", error);
    throw error;
  }
};

export default NewPasswordApi;
