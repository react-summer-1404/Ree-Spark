import http from "../../../interceptor/interseptor";


const SelectProfileImageApi = (imageId) => {
  const formData = new FormData();
  formData.append("ImageId", imageId);

  return http.post("/SharePanel/SelectProfileImage", formData);
};

export default SelectProfileImageApi;
