import http from "../../../interceptor/interseptor";

const GetProfileInfoApi = async () => {
  try {
    const response = await http.get("/SharePanel/GetProfileInfo");
    console.log("Axios response:", response);  
    console.log("GetProfileInfo.api data:", response.data); 
    return response.data; 
  } catch (error) {
    console.error("Error in GetProfileInfoApi:", error.response || error);
    throw error;
  }
};

export default GetProfileInfoApi;


