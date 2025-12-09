import React from 'react'

const SearchFilter = ({Search})=> {
  return (
    <div>
    <div className="lg:w-[258px] lg:h-[80px] lg:gap-2 lg:mt-4 right-[20px] lg:relative">
              <h3 className="lg:font-medium lg:text-[16px] lg:w-[278px] lg:h-[34px] lg:absolute lg:top-[50px] lg:right-[-15px] lg:text-right">
                جستجو
              </h3>

              <div className="lg:w-[90px] lg:h-[24px] lg:gap-2 lg:float-right lg:flex">
                <img
                  src="../../../../public/AuthImage/icons8-search-64.png"
                  className="lg:w-[24px] lg:h-[24px] lg:absolute lg:top-[53px] lg:left-[275px]"
                />
              </div>

              <div className="lg:w-[258px] lg:h-[48px] lg:gap-2 lg:absolute lg:left-[40px] lg:top-[80px]">
                <input
                  type="search"
                  placeholder="دوره مورد نظر را جست‌جو کنید"
                  onChange={(e) => Search(e.target.value)}
                  className="lg:w-[258px] lg:h-[48px] lg:rounded-[16px] font-sans lg:text-[12px] lg:font-medium lg:text-right lg:bg-[#F1F1F1] outline-blue-500 dark:text-black"
                />
                <button className="lg:w-12 lg:h-12 lg:bg-[#3772FF] lg:absolute lg:left-0 lg:rounded-[16px]">
                  <img
                    src="../../../../public/AuthImage/search.png"
                    className="lg:w-8 lg:h-8 lg:ml-2"
                  />
                </button>
              </div>
            </div>
    </div>
  )
}

export default SearchFilter
