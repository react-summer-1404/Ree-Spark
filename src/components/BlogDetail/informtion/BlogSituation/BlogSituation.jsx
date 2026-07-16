import React from "react";

const BlogSituation = ({response}) => {
  return (
    <div
      className="= sm:flex hidden justify-center dark:text-white w-full h-[80px] 
                        rounded-2xl 
                        border-2"
    >
      <div className="flex w-[25%] mt-2 flex-wrap justify-end text-right border-r-2 pr-3 ">
        <div className="w-[110px] h-[20px] text-[#707070] text-[13px] sm:text-[14px] flex justify-end ">
          <div>منتشرکننده </div>
        </div>
        <div className="min-w-full h-[23px] sm:text-[14px] text-[13px] flex justify-end items-center">
         {response.addUserFullName}
        </div>
      </div>
      <div className="flex w-[25%] mt-2 flex-wrap justify-end  border-r-2 pr-3 ">
        <div className="w-[110px] h-[20px] text-[#707070] text-[13px] sm:text-[14px] flex justify-end  ">
          <div className="w-full text-right ">تاریخ انتشار </div>
        </div>
        <div className="w-full justify-end flex ">
          <div className="sm:w-[69px]  h-[27px] text-[13px] sm:text-[16px] flex justify-center items-center  ">
          {response.insertDate}
          </div>
        </div>
      </div>
      <div className="flex w-[25%] mt-2 flex-wrap justify-end border-r-2 pr-3 ">
        <div className="w-[120px] h-[20px] text-[#707070] text-[13px] sm:text-[14px] flex justify-end">
          <div className="w-full text-right">دسته بندی </div>
        </div>
        <div className=" flex w-full justify-end">
          <div className="sm:w-[99px] w-[80px] h-[27px] sm:text-[16px] text-[13px] flex items-center rounded-[32px] bg-[#3772FF] justify-center">
           {response.newsCatregoryName}
          </div>
        </div>
      </div>
      <div className="flex w-[25%] mt-2 flex-wrap justify-end pr-3 ">
        <div className="w-[110px] h-[20px] text-[13px] sm:text-[14px] text-[#707070] flex justify-end  ">
          <div className="w-full text-right">بازدیدکنندگان</div>
        </div>
        <div className="w-full flex justify-end">
          <div className="sm:w-[101px] w-[80px] text-[13px] sm:text-[16px] h-[27px] flex justify-center items-center ">
           {response.userId}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSituation;
