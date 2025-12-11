import React from "react";
import peepe from "../../../assets/image/LayoutImage/Peppe.svg";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
const Command = ({ comments = [] }) => {
  const item = comments[0];

  return (
    <div className="h-[200px] relative">
      <div className="w-[150px] h-12 flex gap-3 absolute right-0">
        <div className="w-[93px] flex flex-col gap-1">
          <div className="text-right text-sm">{item.author || "بدون نام"}</div>

          <div className="text-right text-xs text-[#707070] dark:text-slate-400">
            {new Date(item.insertDate).toLocaleDateString("fa-IR")}
          </div>
        </div>

        <div>
          <img src={peepe} className="w-12 h-12" />
        </div>
      </div>

      <h3 className="text-base font-bold absolute top-[70px] right-0">
        {item.title}
      </h3>

      <div className="absolute top-[110px] dark:text-slate-300 w-[360px] right-0 text-right text-sm text-[#2f2f2f]">
        {item.describe}
      </div>
      <div className=" w-[100px] h-6 absolute top-[140px] right-0 flex justify-between">
        <div className="w-[47px] text-right flex justify-end gap-2">
          {item.disslikeCount}
          <BiDislike size={20} />
        </div>
        <div className="w-[47px] flex justify-end gap-2">
          {item.likeCount}
          <BiLike size={20} />
        </div>
      </div>
    </div>
  );
};

export { Command };
