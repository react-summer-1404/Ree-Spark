import toast from "react-hot-toast"
import http from "../../../../interceptor/interseptor"

export const AddResevre = async(courseId) => {
    
    try {
        const response = await http.post("CourseReserve/ReserveAdd",{
            courseId
        });
        return response;
    } catch (err) {
        toast.error("خطا در برقراری ارتباط با سرور");
        throw err;
    }
}