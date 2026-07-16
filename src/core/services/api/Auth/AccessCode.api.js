import http from "../../../interceptor/interseptor";

const SecurityApi = {
  editSecurity: (payload) => http.put("/SharePanel/EditSecurity", payload),
};

export default SecurityApi;
