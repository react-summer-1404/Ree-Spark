import React, { useState } from "react";

const MobileTeacherFilter = ({
  onSelectTeacher,
  teacher,
  selectedTeacher,
  open,
  toggle,
}) => {
  const selectedObj = teacher.find((x) => x.teacherId === selectedTeacher);
     
  return (
    <div>
      <div className="w-[258px] h-[80px] gap-2 ml-[20px]  mt-4 relative">
        <div className="w-[75px] h-[24px] gap-2  float-right flex absolute ml-[260px]">
          <h3 className="w-[43px] h-[23px] text-[15px] font-medium leading-5 text-right ">
            اساتید
          </h3>
          <img
            src="../../../../public/AuthImage/teacher-stroke-rounded 1.png"
            className="w-[24px] h-[24px]  "
          />
        </div>

        <img
          src="../../../../public/AuthImage/arrow-down-01.png"
          className="absolute mt-[45px] ml-[10px] z-10"
        />
        <input
          readOnly
          value={selectedObj?.fullName || ""}
          onClick={toggle}
          placeholder="دسته مورد نظر را انتخاب کنید"
          className="  dark:text-black w-[345px] h-[48px]  relative  top-8 rounded-[16px] bg-[#F1F1F1] text-[11px] font-medium text-right pr-2 outline-none"
        />

        {open && (
          <ul className="absolute top-[30px] left-[px]  bg-[#F1F1F1] rounded-[13px] overflow-hidden w-[345px] h-[152px] z-20 dark:bg-slate-600">
            <img
              src="../../../../../../public/AuthImage/arrow-down-01.png"
              className="absolute mt-[16px] ml-[10px] z-20 "
            />
            {teacher.map((item) => (
              <li
                key={item.teacherId}
                onClick={() => onSelectTeacher(item.teacherId)}
                className="cursor-pointer text-slate-500 dark:text-white border-gray-200 hover:bg-slate-200 hover:rounded-[11px] dark:border-gray-500 border-b-2 last:rounded-b-[11px] text-center font-normal dark:hover:bg-gray-700 p-3 box-border"
              >
                {item.fullName}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export { MobileTeacherFilter };
