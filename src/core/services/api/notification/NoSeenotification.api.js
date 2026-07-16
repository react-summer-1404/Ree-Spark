import http from "../../../interceptor/interseptor";

export const getMyUnseenNotifications = async () => {
  return await http.get("/v2/notification/alert/mineNoSeen");
};
