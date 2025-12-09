import React from 'react'

const CourseLevelFilter = ({onSelectLevels, levels, selectedLevels, open, toggle}) => {

  const selectedObj = levels.find(x => x.id === selectedLevels);

  return (
    <div>
      <div className="lg:w-[258px] lg:h-[80px] lg:gap-2 lg:ml-[20px] lg:mt-4 lg:relative">
        
        <div className="lg:w-[119px] lg:h-[24px] lg:gap-2 lg:float-right lg:flex">
          <h3 className="lg:w-[87px] lg:h-[23px] font-sans lg:text-[15px] lg:font-medium lg:leading-5 lg:text-right">
            سطح آموزشی
          </h3>
          <img
            src="../../../../public/AuthImage/layers-01-stroke-rounded.png"
            className="lg:w-[24px] lg:h-[24px]"
          />
        </div>

        <img
          src="../../../../public/AuthImage/arrow-down-01.png"
          className="lg:absolute lg:mt-[45px] lg:ml-[10px] lg:z-10"
        />

        <input
          readOnly
          onClick={toggle}
          value={selectedObj?.levelName || ""}
          placeholder="سطح مورد نظر را انتخاب کنید"
          className="dark:text-black lg:w-[258px] lg:h-[48px] lg:absolute lg:top-8 lg:rounded-[16px] lg:bg-[#F1F1F1] lg:text-[11px] lg:font-medium lg:text-right lg:pr-2 outline-none"
        />

        {open && (
          <ul className="absolute top-[32px] left-[-1px] bg-[#F1F1F1] rounded-[13px] overflow-hidden w-[264px] h-[245px] z-20 dark:bg-slate-600">
            
            {levels.map((item) => (
              <li
                key={item.id}
                onClick={() => onSelectLevels(item.id)}
                className={`cursor-pointer text-slate-500 dark:text-white border-gray-200 hover:bg-slate-200 hover:rounded-[11px] dark:border-gray-500 border-b-2 last:rounded-b-[11px] text-center font-normal dark:hover:bg-gray-700 p-3 box-border
                     ${selectedLevels === item.id ? "bg-blue-300 dark:bg-blue-800 font-bold" : ""}
                  `}
              >
                {item.levelName}
              </li>
            ))}
          </ul>
        )}

      </div>
    </div>
  )
}

export default CourseLevelFilter
