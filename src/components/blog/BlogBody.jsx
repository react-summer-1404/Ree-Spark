import React, { useCallback, useEffect, useState } from "react";
import { BlogList } from "./components/blogList/BlogList";
import { BlogFilter } from "./components/BlogFilter/BlogFilter";
import PageInationBlog from "./components/blogPageinit/PageInationBlog";
import toast from "react-hot-toast";
import GetNewsApi from "../../core/services/api/Blog/GetNewsApi";
import Loading from "../common/Loading";
import debounce from "debounce";
import { BlogSort } from "./components/blogSort/BlogSort";
import moment from "moment-jalaali";
const BlogBody = () => {
  const [newsList, setNewsList] = useState([]);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [sortType, setSortType] = useState("InsertDate");
  const rowsPerPage = 6;

  const GetNews = async (page = 1, search = "", sorting = sortType) => {
    try {
      const res = await GetNewsApi({
        PageNumber: page,
        RowsOfPage: rowsPerPage,
        SortingCol: sorting,
        SortType: "DESC",
        Query: search,
      });
      console.log("🔥 API Response:", res);
      setNewsList(res.news || []);
      if (res.totalCount) {
        setTotalPages(Math.ceil(res.totalCount / rowsPerPage));
      }
    } catch (error) {
      console.error(error);
      toast.error("خطا در دریافت اخبار");
    }
  };
  useEffect(() => {
    GetNews(currentPage, query, sortType);
  }, [currentPage, query, sortType]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const dibounce = useCallback(
    debounce((value) => {
      setQuery(value);
      setCurrentPage(1);
    }, 1000),
    []
  );

  return (
    <div className="w-[95%] m-auto mt-52 flex justify-between flex-col-reverse sm:flex-row gap-2  h-[1300px] sm:h-auto ">
      <BlogSort sortType={sortType} onChangeSort={setSortType} />
      <div className="w-full sm:w-[75%] h-[95%] sm:h-full mt-3 flex flex-row gap-5 flex-wrap dark:text-white overflow-hidden">
        {newsList.length > 0 ? (
          newsList.map((item) => (
            <BlogList
              key={item.id}
              BlogName={item.title}
              BlogTeacher={item.addUserFullName}
              BlogImage={item.currentImageAddress}
              view={item.currentView}
              BlogAlt={item.currentImageAddress}
              date={moment(item.insertDate).format("jYYYY/jMM/jDD")}
              bg={"bg-blue-500"}
            />
          ))
        ) : (
          <div className="absolute top-[500px] left-[450px]">
            <Loading />
          </div>
        )}
      </div>
      <div className="border-2 border-[#DCDCDC] rounded-[32px] w-[90px] sm:w-[298px] h-[50px] dark:bg-slate-800 sm:h-[370px] bg-[#2F2F2F] sm:bg-white overflow-hidden sm:overflow-auto  mt-24 sm:mt-0 ">
        <BlogFilter Search={dibounce} />
      </div>
      <PageInationBlog
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export { BlogBody };
