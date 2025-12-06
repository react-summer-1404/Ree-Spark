import http from "../../../interceptor/interseptor";

export const updateProfileInfo = async (data) => {
    console.log("API FUNCTION CALLED WITH:", data);
  try {
    const response = await http.put("/SharePanel/UpdateProfileInfo", data);
    return response;
  } catch (error) {
    console.log("UpdateProfileInfo API Error:", error);
    throw error;
  }
};
