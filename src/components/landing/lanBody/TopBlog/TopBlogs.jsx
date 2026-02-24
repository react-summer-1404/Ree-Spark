import React, { useEffect, useState } from "react";
import TopBlogInfo from "./TopBlogInfo";
import TopBlogApi from "../../../../core/services/api/TopBlogs.api";
import moment from "moment-jalaali";
import Button from "../../../common/Button/Button";
import toast from "react-hot-toast";
import MobileTopBlogs from "../Respansive/MobileTopBlogs";
import ButtonResponsive from "../../../common/Button/ButtonResponsive";

const TopBlogs = () => {
  const [BlogInfo, setBlogInfo] = useState([]);
  const getTopBlogsApi = async (RowsOfPage = 4) => {
    try {
      const res = await TopBlogApi({
        RowsOfPage: RowsOfPage,
        SortingCol: "InsertDate",
        SortType: "DESC",
      });
      console.log("Response topBlog:", res);
      setBlogInfo(res.news || []);
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت بلاگ");
    }
  };

  useEffect(() => {
    getTopBlogsApi();
  }, []);

  return (
    <>
    <div className="relative  block"><MobileTopBlogs/></div>
      <div className="lg:block lgg:block xl:block hidden">
        <div className="xl:left-0 relative  lg:right-[-134px] lg:bottom-[500px] lgg:left-[90px] lgg:top-[100px] xl:top-[140px]">
          <div className="lg:text-center lg:text-3xl lg:bottom-8 lg:relative xl:top-[565px] xl:left-[5px] lg:right-[120px] lg:top-[1900px] lgg:top-[620px] lgg:left-[-90px] lg:block hidden font-bold ">
            بلاگ های برتر هفته
          </div>

          <div
            className=" lg:top-[1960px] lgg:top-[660px]
        xl:top-[610px] xl:w-[1370px] lgg:w-[1190px] lg:h-[800px] lg:overflow-hidden xl:overflow-hidden lgg:overflow-hidden  relative lg:gap-[32px] lg:left-[131px] left-[-342px] flex  lgg:relative lgg:left-[20px] lgg:flex-nowrap lg:flex-wrap lg:w-[1300px]"
          >
            {BlogInfo.length > 0 &&
              BlogInfo.map((item) => (
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
          <div className="relative left-[50px]  xl:left-[-20px] lg:left-[-146px] lg:top-[1880px] xl:top-[110px] lgg:top-[170px]  top-[310px]  lgg:left-[-120px]">
            <Button buttonAdders={"blog"} />
          </div>


       
        </div>
      </div>
    </>
  );
};

export default TopBlogs;
