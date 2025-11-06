import http from "../../../interceptor/interseptor";
import { setItem } from "../../storage/storage.api";

export async function LoginApi({ phoneOrGmail, password, rememberMe = true }) {
  try {
    const res = await http.post("/Sign/Login", { phoneOrGmail, password, rememberMe });
    console.log("Login API response:", res);

    
    const token = res?.data?.token || res?.token;
    const user = res?.data || res;

    if (!token) {
      console.warn("Token not found in response!");
    }

    if (token) {
      setItem("token", token);
    }

    return { user, accessToken: token };
  } catch (err) {
    console.error("Login error:", err);
    throw err;
  }
}
