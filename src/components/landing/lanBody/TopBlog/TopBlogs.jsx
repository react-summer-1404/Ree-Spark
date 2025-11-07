import React, { useState } from "react";
import TopBlogInfo from "./TopBlogInfo";
import TopBlogApi from "../../../../core/services/api/TopBlogs.api"
import { useEffect } from "react";
function TopBlogs() {
    const [Blogs, setBlogs] = useState([]);
    const TopBlogsApi = async () => {
        try {
          const res = await TopBlogsApi({
            
          });
          console.log("🔥 API Response:", res);
          setCourses(res || []);
          if (res.totalCount) {
            
          }
        } catch (error) {
          console.error(error);
          toast.error("خطا در دریافت بلاگ");
        }
      };

  useEffect(()=>{

  })

  return (
    <div>
      <div className="  h-[365px] flex justify-center flex-col relative top-[1083px] lg:dark:text-white ">
        <div className="text-center text-3xl font-sans bottom-8 relative right-[-10px] top-[320px] lg:hidden font-bold ">
          بلاگ های برتر هفته
        </div>

        <div className="h-[366px] lg:hidden  relative bottom-[400px] flex">
       
        </div>
      </div>
    </div>
  );
}

export default TopBlogs;
