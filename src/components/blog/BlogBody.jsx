import React, { useCallback, useEffect, useState } from "react";
import { BlogList } from "./components/blogList/BlogList";
import { BlogFilter } from "./components/BlogFilter/BlogFilter";
import PageInationBlog from "./components/blogPageinit/PageInationBlog";
import toast from "react-hot-toast";
import GetNewsApi from "../../core/services/api/Blog/GetNewsApi";
import Loading from "../common/Loading";
import debounce from "debounce";
import { BlogSort } from "./components/blogSort/BlogSort";

const BlogBody = () => {
  const [newsList, setNewsList] = useState(null);
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [sortType, setSortType] = useState("DESC");
  const [sortingCol, setSortingCol] = useState("InsertDate");
  const [selectedCategory, setSelectedCategory] = useState("");

  const rowsPerPage = 6;


  // eslint-disable-next-line react-hooks/exhaustive-deps
  const GetNews = async (page = 1, search = "", sorting = sortType) => {
    try {

        const res = await GetNewsApi({
        PageNumber: currentPage,
        RowsOfPage: rowsPerPage,
        SortingCol: sortingCol,
        SortType: sortType,
        Query: query,
        NewsCategoryId: selectedCategory ?? null,
      });

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
    GetNews();
  }, [currentPage, query, sortType, sortingCol, selectedCategory]);


  const dibounce = useCallback(
    debounce((value) => {
      setQuery(value);
      setCurrentPage(1);
    }, 1000),
    []
  );

  const handleChangeSort = (type, col) => {
    setSortType(type);
    setSortingCol(col);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-[95%] m-auto mt-52 flex justify-between flex-col-reverse sm:flex-row gap-2 h-auto">
      <BlogSort
        sortType={sortType}
        sortingCol={sortingCol}
        onChangeSort={handleChangeSort}
      />

      <div className="w-full sm:w-[75%] mt-3 flex flex-row gap-5 flex-wrap dark:text-white">
        {newsList === null ? (
          <div className="w-full flex justify-center mt-20">
            <Loading />
          </div>
        ) : newsList.length === 0 ? (
          <div className="w-full text-center mt-20 dark:text-white">
            هیچ نتیجه‌ای یافت نشد
          </div>
        ) : (
          newsList.map((item) => (
            <BlogList
              key={item.id}
              Id={item.id}
              BlogName={item.title}
              BlogTeacher={item.addUserFullName}
              BlogImage={item.currentImageAddress}
              view={item.currentView}
              BlogAlt={item.currentImageAddress}
            />
          ))
        )}
      </div>

      <div className="border-2 border-[#DCDCDC] rounded-[32px] w-[90px] sm:w-[298px] h-[50px] sm:h-[370px] bg-white dark:bg-slate-800 mt-24 sm:mt-0">
        <BlogFilter
          Search={dibounce}
          startDate={startDate}
          setStartDate={setStartDate}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
