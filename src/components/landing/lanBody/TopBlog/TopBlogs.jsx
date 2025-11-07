import React, { useState } from "react";
import TopBlogInfo from "./TopBlogInfo";
import TopBlogApi from "../../../../core/services/api/TopBlogs.api";
import { useEffect } from "react";
const TopBlogs = () => {
  const [BlogInfo, setBlogInfo] = useState([]);
  const getTopBlogsApi = async (RowsOfPage = 3) => {
    try {
      const res = await TopBlogApi({
        RowsOfPage:RowsOfPage ,
        SortingCol: "InsertDate",
        SortType: "DESC",
      });
      console.log("Response topBlog:", res);
      setBlogInfo(res.news || []);

      if (res.totalCount) {
      }
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت بلاگ");
    }
  };
console.log()
  useEffect(() => {
    getTopBlogsApi();
  },[]);

  return (
    <div>
    

        <div className=" text-center text-3xl font-sans bottom-8 relative right-[-10px] top-[320px]  font-bold lg:hidden">
          بلاگ های برتر هفت
        </div>

        <div className="lg:text-center lg:text-3xl lg:font-sans lg:bottom-8 lg:relative  lg:top-[520px] lg:block hidden font-bold ">
          بلاگ های برتر هفته
        </div>


        <div className="h-[366px] border-8 border-black top-[570px] relative flex">


          {BlogInfo.length > 0 && BlogInfo.map((item) => (
          <TopBlogInfo
            key={item.id}
            title={item.title}
            Teacher={item.addUserFullName}
            img={item.currentImageAddress}
          />
        ))}
        </div>
      </div>
  );
}

export default TopBlogs;
