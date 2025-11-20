import React, { useRef,useEffect } from 'react'

const SortResponsive = ({onClose})=> {
 const rendered = useRef(false);

  useEffect(() => {
    if (!rendered.current) {
      console.log;
      rendered.current = true;
    }
  }, []);
  return (
    <div>
      <div className="">
  <div className="w-[295px] h-[200px] gap-[10px]  z-10 dark:border-[#FCFCFC] dark:text-white font-medium flex flex-wrap relative left-[50px] top-[80px]">
        <div className="w-[56px] h-[8px] border-[2px] border-gray-400 rounded-[4px] absolute top-[-95px] left-[72px]"></div>

               <button 
               onClick={onClose}
               className="w-[101px] h-[40px] rounded-[34px] absolute mt-[-68px] ml-[-80px]
               border-[#FF5353] border-[1px] text-[#FF5353] font-medium font-[18px] leading-[20px] "
               
               ><img 
               className='absolute ml-[70px] mt-[2px]'
               src="../../../../public/AuthImage/cancel-01.png" />
               
               بستن</button>


          {/* جدیدترین */}
              <button
                onClick={() => onChangeSort("InsertDate")}
                className={`w-[100px] hover:w-[125px] hover:text-[#FF5353] hover:border-[#FF5353] h-10 border border-black flex gap-2 rounded-[34px] transition-all duration-150 py-2 px-4 ${
                  sortType === "InsertDate"
                    ? ""
                    : "text-black dark:text-white border-black dark:border-slate-400"
                }`}
              >
                <span>جدیدترین</span>
                {sortType === "InsertDate" && <IoMdClose size={20} />}
              </button>
      
              {/* محبوب‌ترین */}
              <button
                onClick={() => onChangeSort("ViewCount")}
                className={`w-[110px] hover:text-[#FF5353] hover:border-[#FF5353] hover:w-[135px] border-black h-10 border flex gap-2 rounded-[34px] transition-all duration-150 py-2 px-4 ${
                  sortType === "ViewCount"
                    ? ""
                    : "text-black dark:text-white border-black dark:border-slate-400"
                }`}
              >
                <span>محبوب‌ترین</span>
                {sortType === "ViewCount" && <IoMdClose size={20} />}
              </button>

      <div className="relative flex flex-wrap gap-[10px] left-[60px]">

    </div>
  </div>
</div>
    <h1 className="font-bold text-[20px] absolute bottom-[170px] left-[320px] dark:text-white">ترتیب</h1>

    </div>
  )
}

export {SortResponsive}