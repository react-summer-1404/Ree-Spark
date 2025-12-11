import http from "../../../interceptor/interseptor";

const FavoriteBlogApi = async () => {
  try {
    const response = await http.get("/SharePanel/GetMyFavoriteNews");
    return response.myFavoriteNews || [];
  } catch (error) {
    console.log("Error in GetMyFavoriteNews API:", error);
    return [];
  }
};

export default FavoriteBlogApi;
