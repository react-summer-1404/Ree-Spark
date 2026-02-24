import toast from "react-hot-toast";
import http from "../../../../interceptor/interseptor";


const getBlogDetailapi = async(id) => {
    try {
        const  response = await http.get(`/News/${id}`)

        return response;
    } catch (err) {
        console.log("error");
        toast.loading("درحال بارگزاری")
    }
}

export default getBlogDetailapi