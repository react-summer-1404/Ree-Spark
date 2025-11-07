import React, { useState } from "react";
import TopBlogInfo from "./TopBlogInfo";
import TopBlogApi from "../../../../core/services/api/TopBlogs.api";
import { useEffect } from "react";
function TopBlogs() {
  const [Blogs, setBlogs] = useState([]);
  const GetTopBlogsApi = async () => {
    try {
      const res = await TopBlogApi({
        RowsOfPage: rowsPerPage,
        SortingCol: "InsertDate",
        SortType: "DESC",
      });
      console.log("🔥 API Response:", res);
      setBlogs(res || []);
      if (res.totalCount) {
      }
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت بلاگ");
    }
  };

  useEffect(() => {
    GetTopBlogsApi();
  });

  return (
    <div>
      <div className="  h-[365px] flex justify-center flex-col relative top-[1083px] lg:dark:text-white ">
        <div className="text-center text-3xl font-sans bottom-8 relative right-[-10px] top-[320px] lg:hidden font-bold ">
          بلاگ های برتر هفته
        </div>

        <div className="h-[366px] lg:hidden  relative flex">
          {Blogs.map((item) => (
            <TopBlogInfo
             title={item.title}
            
            />
         
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopBlogs;
