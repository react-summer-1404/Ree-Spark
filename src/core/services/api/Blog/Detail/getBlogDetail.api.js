import toast from "react-hot-toast";
import http from "../../../../interceptor/interseptor";


const getBlogDetailapi = async(Id) => {
    try {
        const result = await http.get(`/News/${Id}`)
        console.log(result);
        return result;
    } catch (err) {
        console.log("error");
        toast.loading("درحال بارگزاری")
    }
}

export default getBlogDetailapi