import http from "../../../interceptor/interseptor";

export const updateProfileInfo = async (formData) => {
  try {
    const response = await http.put("/SharePanel/UpdateProfileInfo", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response;
  } catch (error) {
    console.log("UpdateProfileInfo API Error:", error);
    throw error;
  }
};
