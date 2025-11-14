import React, { useEffect,useState } from "react";
import TopBlogInfo from "./TopBlogInfo";
import TopBlogApi from "../../../../core/services/api/TopBlogs.api";
import moment from "moment-jalaali";
import Button from "../../../common/Button/Button";

const TopBlogs = () => {
  const [BlogInfo, setBlogInfo] = useState([]);
  const getTopBlogsApi = async (RowsOfPage = 2) => {
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

        <div className="lg:text-center lg:text-3xl  lg:bottom-8 lg:relative xl:top-[675px] lg:top-[1300px] lgg:top-[700px] lg:block hidden font-bold ">
          بلاگ های برتر هفته
        </div>


        <div className="h-[366px] gap-[25px] w-[1360px]  top-[50px]  lg:top-[1350px] lgg:top-[750px]
        xl:top-[700px] xl:w-[1370px] lgg:w-[1190px] lg:h-[800px] lg:overflow-hidden xl:overflow-hidden lgg:overflow-hidden  relative lg:gap-[32px] lg:left-[131px] left-[-342px] xl:left-[50px] flex  lgg:relative lgg:left-[47px] lgg:flex-nowrap lg:flex-wrap lg:w-[1300px]">

                {BlogInfo.length > 0 && BlogInfo.map((item) => (
          <TopBlogInfo
            key={item.id}
            title={item.title}
            Teacher={item.addUserFullName}
            img={item.currentImageAddress}
            Date={moment(item.insertDate).format("jYYYY/jMM/jDD")}
            view={item.currentView}
            icView="view"
            icDate="Date"
            blogBg="bg-black"
          />
        ))}
             {BlogInfo.length > 0 && BlogInfo.map((item) => (
          <TopBlogInfo
            key={item.id}
            title={item.title}
            Teacher={item.addUserFullName}
            img={item.currentImageAddress}
            Date={moment(item.insertDate).format("jYYYY/jMM/jDD")}
            view={item.currentView}
            icView="view"
            icDate="Date"
            blogBg="bg-black"
          />
        ))}
        </div>
              <div className="relative xl:left-[4px] lg:left-[-146px] lg:top-[1270px] xl:top-[200px] lgg:top-[240px]  top-[310px]  lgg:left-[-90px]">
        <Button />
      </div>
      </div>
  );
}

export default TopBlogs;
