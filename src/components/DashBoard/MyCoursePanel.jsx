import React from 'react'
import figma from "../../assets/image/BlogImage/figma.png"
const MyCoursePanel = () => {
  return (
        <div>
        <h6 className='h-5 absolute top-[7px] left-[738px] text-sm font-semibold'>دوره من</h6>
        <div className='w-[106px] h-5 absolute top-2 left-4 flex justify-between'>
            <div className='size-4'>            
                <img src="./img/backicon.png" className='w-[10px] h-[10px] mt-1'/>
            </div>
            <h6 className='h-5 text-[#3772FF] text-sm  text-right leading-4 cursor-pointer'>مشاهده بیشتر</h6>
        </div>
        <div className='w-[769px] h-11 absolute top-10 left-4 bg-[#F1F1F1] rounded-2xl'>
            <h6 className='text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[747px]'>#</h6>
            <h6 className='text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[629px]'>نام</h6>
            <h6 className='text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[480px]'>مدرس</h6>
            <h6 className='text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[265px]'>تاریخ برگزاری</h6>
            <h6 className='text-[#707070] text-[14px] font-semibold absolute top-[12px] left-[130px]'>سطح</h6>
        </div>
        <div className='w-[83px] h-[52px] absolute top-[96px] left-[694px] rounded-xl bg-[#FF6C6C]'>
            <img src={figma} className='w-8 h-8 m-auto mt-2'/>
        </div>
        <h3 className='absolute top-[110px] left-[592px] font-bold'>دوره فیگما</h3>
        <h3 className='absolute top-[111px] left-[420px] font-semibold text-sm'>محمدحسین خلیل‌پور</h3>
        <h3 className='absolute top-[111px] left-[242px] font-semibold text-sm'>29 اردیبهشت 1403</h3>
        <div className='h-6 absolute top-[109px] left-[115px] bg-[#FF37F5] rounded-[32px] py-[2px] px-2 text-sm text-white'>پیشرفته</div>
    </div>
  )
}

export default MyCoursePanel