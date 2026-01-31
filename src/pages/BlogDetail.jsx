// BlogDetail.js
import React, { useState, useEffect } from "react";
import Informtion from "../components/BlogDetail/informtion/informtion";
import BlogImage from "../components/BlogDetail/informtion/BlogImage/BlogImage";
import Discription from "../components/BlogDetail/BlogDiscription/Discription";
import BlogComment from "../components/BlogDetail/BlogComment/BlogComment";
import BlogRelated from "../components/BlogDetail/BlogComment/BlogRelated/BlogRelated";
import { useParams } from "react-router-dom";
import getBlogDetailapi from "../core/services/api/Blog/Detail/getBlogDetail.api";

const BlogDetail = () => {
  const [response, setResponse] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const GetData = await getBlogDetailapi(id);
        console.log("Blog detail:", GetData);
        setResponse(GetData);
      } catch (error) {
        console.error("خطا در گرفتن جزئیات بلاگ:", error);
      }
    };
    if (id) fetchData();
  }, [id]);

 if (!response) {
    return <div className="mt-20 text-center">در حال بارگذاری...</div>;
  }

  return (
    <div className="sm:mt-16 mt-5 mb-10 mr-2 ml-2 flex flex-wrap gap-y-10 md:gap-y-16 justify-center">
      <div className="flex justify-center lg:justify-between items-center gap-3 w-full flex-wrap lg:flex-nowrap">
        <Informtion response={response} />
        <BlogImage response={response} />
      </div>
      <Discription />
      <BlogComment />
      <BlogRelated />
    </div>
  );
};

export default BlogDetail;
