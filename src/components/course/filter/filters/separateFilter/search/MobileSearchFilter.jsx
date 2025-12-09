import React from 'react'

const MobileSearchFilter = ({Search})=> {
  return (
    
    <div className="lg:w-[258px] lg:h-[80px] lg:gap-2 lg:mt-4 right-[20px] lg:relative">
          <div className="w-[90px] h-[24px]   flex absolute left-[280px] gap-[20px]">
                  <h3 className="font-medium text-[16px] w-[278px] h-[34px] absolute top-[50px] ">
                    جستجو
                  </h3>

                  <img
                    src="../../../../public/AuthImage/icons8-search-64.png"
                    className="w-[24px] h-[24px] absolute ml-[55px] top-[50px] "
                  />
                </div>

                <div className="w-[345px] h-[45px]  relative left-[20px] top-[80px]">
                  <input
                    dir="rtl"
                    type="search"
                    onChange={(e) => Search(e.target.value)}
                    placeholder="دوره مورد نظر را جست‌جو کنید...  "
                    className="w-[345px] h-[48px] rounded-[16px] text-[12px] font-medium text-right bg-[#F1F1F1] outline-blue-500 dark:text-black"
                  />
                  <button className="w-12 h-12 bg-[#3772FF] absolute left-0 rounded-[16px]">
                    <img
                      src="../../../../public/AuthImage/search.png"
                      className="w-8 h-8 ml-2"
                    />
                  </button>
            </div>
    </div>
  
  )
}

export default MobileSearchFilter
