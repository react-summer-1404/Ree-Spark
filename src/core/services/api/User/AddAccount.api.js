/* eslint-disable no-useless-catch */
import http from "../../../interceptor/interseptor";

const AddAccountApi = async (data) => {
  try {
    const response = await http.post("/v2/multiAccount/addAccount", data);
    return response;
  } catch (error) {
    throw error;
  }
};
export default AddAccountApi;
