import React from "react";
import { CiSearch } from "react-icons/ci";

const SearchPanelBox = ({ Search }) => {
  return (
    <div>
      <div className="w-[258px] h-[80px] gap-2  relative">
        <div className="w-[90px] h-[24px] gap-2  float-right flex ">
          <h3 className="w-[58px] h-[23px]  text-[16px] font-medium leading-5 ">
            جست‌جو
          </h3>
          <CiSearch size={25} />
        </div>
        {/*  */}

        <div className="w-[258px] h-[48px] gap-2  absolute top-8">
          <input
            onChange={(e) => Search(e.target.value)}
            type="search"
            placeholder="دوره مورد نظر را جست‌جو کنید"
            className="w-[258px] h-[48px] rounded-[16px]  text-[12px] font-medium text-right bg-[#F1F1F1] outline-none text-[#707070]"
          />
          <button className="w-12 h-12 bg-[#3772FF] absolute left-0 rounded-[16px]">
            <CiSearch size={30} className="m-auto text-white" />
          </button>
        </div>
      </div>
    </div>
  );
};

export { SearchPanelBox };
