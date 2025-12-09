import http from "../../../interceptor/interseptor";

const GetTeacherDetail = async (teacherId) => {
  try {
    const response = await http.get(`/Home/GetTeacherDetails`, {
      params: { TeacherId: teacherId },
    });

    console.log("API Response:", response);

    return response || null;
  } catch (error) {
    console.error("GetTeacherDetail API Error:", error);
    return null;
  }
};

export { GetTeacherDetail };
