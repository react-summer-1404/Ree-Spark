import http from "../../../interceptor/interseptor";

const SwitchAccountApi = async (accountId) => {
  try {
    return await http.patch(`/v2/multiAccount/activeAccount/${accountId}`);
  } catch (error) {
    console.error("Error switching account:", error);
    throw error;
  }
};

export default SwitchAccountApi;
