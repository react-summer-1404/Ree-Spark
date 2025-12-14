import http from "../../../interceptor/interseptor";

const AddAccountApi = async (payload) => {
  try {
    return await http.post("/v2/multiAccount/addAccount", payload);
  } catch (error) {
    console.error("Error adding account:", error);
    throw error;
  }
};

export default AddAccountApi;
