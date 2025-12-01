import React, { useRef,useEffect } from 'react'

const Order = ({onClose})=> {
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

    <div
      className="relative  group w-[123px] h-[40px] rounded-[34px] border-[1px] text-center leading-[40px] font-medium transition-all duration-300 ease-in-out 
      hover:w-[133px] hover:border-[#FF5353] hover:text-[#FF5353] cursor-pointer overflow-hidden"
    >
      <span className="transition-all duration-300 ml-2">محبوب ترین</span>
      <img
        className="w-[20px] h-[20px] absolute right-[4px] top-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        src="../../../../public/AuthImage/cancel-01.png"
      />
    </div>

    <div
      className="relative group w-[123px] h-[40px] rounded-[34px] border-[1px] text-center leading-[40px] font-medium transition-all duration-300 ease-in-out 
      hover:w-[133px] hover:border-[#FF5353] hover:text-[#FF5353] cursor-pointer overflow-hidden"
    >
      <span className="transition-all duration-300 ml-2">جدیدترین</span>
      <img
        className="w-[20px] h-[20px] absolute right-[4px] top-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        src="../../../../public/AuthImage/cancel-01.png"
      />
    </div>


      <div className="relative flex flex-wrap gap-[10px] left-[60px]">
    <div
      className="relative bottom-[50px] group w-[100px] h-[40px] rounded-[34px] border-[1px] text-center leading-[40px] font-medium transition-all duration-300 ease-in-out 
      hover:w-[113px] hover:border-[#FF5353] hover:text-[#FF5353] cursor-pointer overflow-hidden"
    >
      <span className="transition-all duration-300 ml-2">ارزان ترین</span>
      <img
        className="w-[20px] h-[20px] absolute right-[4px] top-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        src="../../../../public/AuthImage/cancel-01.png"
      />
    </div>

    <div
      className="relative bottom-[50px] group w-[100px] h-[40px] rounded-[34px] border-[1px] text-center leading-[40px] font-medium transition-all duration-300 ease-in-out 
      hover:w-[113px] hover:border-[#FF5353] hover:text-[#FF5353] cursor-pointer overflow-hidden"
    >
      <span className="transition-all duration-300 ml-2">گرانترین </span>
      <img
        className="w-[20px] h-[20px] absolute right-[4px] top-[10px] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        src="../../../../public/AuthImage/cancel-01.png"
      />
    </div>

  </div>
</div>
</div>
    <h1 className="font-bold text-[20px] absolute bottom-[170px] left-[320px] dark:text-white">ترتیب</h1>

    </div>
  )
}

export {Order}