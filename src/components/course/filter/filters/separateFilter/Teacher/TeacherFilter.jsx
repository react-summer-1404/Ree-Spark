import React, { useState } from 'react'

const TeacherFilter = ({  onSelectTeacher,teacher,selectedTeacher,open,toggle}) => {

  const selectedObj = teacher.find(x => x.teacherId === selectedTeacher);
   console.log("click",open)
  return (
    <div>
      <div className="lg:w-[258px] lg:h-[80px] lg:gap-2 lg:ml-[20px] lg:mt-4 lg:relative">
            <div className="lg:w-[75px] lg:h-[24px] lg:gap-2 lg:float-right lg:flex">
              <h3 className="lg:w-[43px] lg:h-[23px] font-sans lg:text-[15px] lg:font-medium lg:leading-5 lg:text-right">
                اساتید
              </h3>
              <img
                src="../../../../public/AuthImage/teacher-stroke-rounded 1.png"
                className="lg:w-[24px] lg:h-[24px]"
              />
            </div>
            <img
              src="../../../../public/AuthImage/arrow-down-01.png"
              className="lg:absolute lg:mt-[45px] lg:ml-[10px] lg:z-10"
            />
            <input
              readOnly
              value={selectedObj?.fullName || ""}
              onClick={toggle}
              placeholder="دسته مورد نظر را انتخاب کنید"
              className="dark:text-black cursor-pointer lg:w-[258px] lg:h-[48px] lg:absolute lg:top-8 lg:rounded-[16px] lg:bg-[#F1F1F1] lg:text-[11px] lg:font-medium lg:text-right lg:pr-2 outline-none"
            />
          </div>

  {open && (
   <ul className="absolute top-[382px] left-[20px]  bg-[#F1F1F1] rounded-[13px] overflow-hidden w-[258px] h-[152px] z-20 dark:bg-slate-600">

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
  )
}

export  {TeacherFilter}
