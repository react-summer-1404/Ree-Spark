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
    

        <div className=" text-center text-3xl font-sans bottom-8 relative right-[-10px] top-[960px]  font-bold lg:hidden">
          بلاگ های برتر هفته
        </div>

        <div className="lg:text-center lg:text-3xl lg:font-sans lg:bottom-8 lg:relative  lg:top-[520px] lg:block hidden font-bold ">
          بلاگ های برتر هفته
        </div>


        <div className="h-[366px] gap-[25px] w-[1360px] -[25px]  top-[570px] relative left-[30px] flex">


          

          {BlogInfo.length > 0 && BlogInfo.map((item) => (
          <TopBlogInfo
            key={item.id}
            title={item.title}
            Teacher={item.addUserFullName}
            img={item.currentImageAddress}
            Date={item.insertDate}
            view={item.currentView}
            icView="view"
            icDate="Date"
            blogBg="bg-black"
          />
        ))}
        </div>
      </div>
  );
}

export default TopBlogs;
