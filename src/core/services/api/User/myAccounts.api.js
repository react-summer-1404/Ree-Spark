import http from "../../../interceptor/interseptor";

const GetMyAccounts = async () => {
  try {
    const res = await http.get("/v2/multiAccount/myAccounts");
    console.log("Full response from http:", res);

    // اصلاح: به جای res.data.accounts
    const accounts = res.accounts || [];
    return accounts;
  } catch (error) {
    console.error("Error fetching accounts:", error);
    return [];
  }
};
export default GetMyAccounts;