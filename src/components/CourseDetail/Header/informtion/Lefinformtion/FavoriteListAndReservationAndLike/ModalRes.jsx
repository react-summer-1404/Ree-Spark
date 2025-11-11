import React from 'react'

const ModalRes = ({CloseModal}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div
            className="bg-white w-[400px] gap-2
          dark:bg-slate-800 h-[370px] min-w-md flex p-6  
          justify-center rounded-xl shadow-lg overflow-hidden
          flex-wrap"
          >
            <div
              className="w-[330px] h-[29px] text-[#3772FF] text-[20px] "
              dir="rtl"
            >
              دوره به لیست رزروی های شما اضافه شد!
            </div>
            <div
              className="flex justify-center items-center gap-[30px] w-full"
              dir="rtl"
            >
              <div className="flex gap-2 w-[200px]">
                <div className="flex items-center flex-col ">
                  <div className="h-[83px] w-0 border-4 border-[#3772FF] "></div>
                  <div className="w-6 h-6 bg-[#3772FF] rounded-full flex justify-center items-center ">
                    <div className="w-3 h-3  bg-white rounded-full "> </div>
                  </div>
                  <div className="h-[83px] w-0 border-4 border-dashed  "></div>

                  <div className="w-6 h-6 bg-[#D9D9D9] rounded-full flex justify-center items-center ">
                    <div className="w-3 h-3  bg-white rounded-full "> </div>
                  </div>
                </div>
                <div>
                  <div className=" flex items-end h-[108px] dark:text-white ">
                    <div> رزرو من </div>
                  </div>
                  <div className="flex items-end dark:text-white h-[108px]">
                    <div>دوره من</div>
                  </div>
                </div>
              </div>
              <div className="w-[400px]">
                <p className="text-[#707070] dark:text-slate-400 ">
                  بعد از تایید ادمین، دوره مورد نظر به لیست{" "}
                  <span className="text-black font-semibold dark:text-white ">دوره من</span> شما
                  اضافه خواهد شد
                </p>
              </div>
            </div>
            <div className="flex justify-between gap-3 h-[50px] w-[400px]" dir="rtl">
              <button className="w-[212px] h-[47px] bg-[#3772FF] rounded-[40px]">
                <div className=" text-[20px] text-[#fff] ">رزرو من</div>
              </button>
              <button 
              onClick={CloseModal}
              className="w-[154px] h-[47px] text-[20px] bg-[#DCDCDC] rounded-[40px]">
                  باشه
              </button>
            </div>
          </div>
        </div>
)
}

export default ModalRes