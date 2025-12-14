import http from "../../../interceptor/interseptor";


const GetNotifications = async () => {
  try {
    const response = await http.get("/v2/notification/alert/mineAll");

    const data = Array.isArray(response) ? response : [];

    return data;
  } catch (error) {
    console.error("Notification API Error:", error);
    return [];
  }
};

export default GetNotifications;
