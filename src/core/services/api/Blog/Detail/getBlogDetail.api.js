import toast from "react-hot-toast";
import http from "../../../../interceptor/interseptor";


const getBlogDetailapi = async(id) => {
    try {
        const result = await http.get(`/News/${id}`)
        console.log(result);
        return response || null;
    } catch (err) {
        console.log("error");
        toast.loading("درحال بارگزاری")
    }
}

export default getBlogDetailapi