
import React, { useEffect,useState } from "react";
import TopBlogInfo from "./TopBlogInfo";
import TopBlogApi from "../../../../core/services/api/TopBlogs.api";

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

  useEffect(() => {
    getTopBlogsApi();
  },[]);

  return (
    <div>
    
      
        <div className=" text-center text-3xl  relative right-[-10px] top-[500px]  font-bold lg:hidden">
          بلاگ های برتر هفته
        </div>

        <div className="lg:text-center lg:text-3xl  lg:bottom-8 lg:relative  lg:top-[930px] lg:block hidden font-bold ">
          بلاگ های برتر هفته
        </div>


        <div className="h-[366px] gap-[25px] w-[1360px]  top-[50px]  lg:top-[1000px] relative left-[30px] flex  lg:h-[366px]">

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
