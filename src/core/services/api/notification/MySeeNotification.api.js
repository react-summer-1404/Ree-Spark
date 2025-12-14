import http from "../../../interceptor/interseptor";

 const SeeNotification = async (id) => {
  try {
    const res = await http.patch(`/v2/notification/alert/see/${id}`);
    return res.data; 
  } catch (err) {
    return { success: false };
  }
};
export default SeeNotification;