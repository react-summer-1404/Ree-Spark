const ReserveStatus = ({title , AcceptReserve , ReserveImg , reserveBg , AcceptBg}) => {
  return (
    <div>
        <div className='w-[1046px] h-11 bg-[#F1F1F1] rounded-2xl absolute top-5 left-4'>
            <h5 className='absolute top-3 left-[1024px] text-[#707070] text-sm font-medium'>#</h5>
            <h5 className='absolute top-3 left-[906px] text-[#707070] text-sm font-medium'>نام</h5>
            <h5 className='absolute top-3 left-[685px] text-[#707070] text-sm font-medium'>مدرس</h5>
            <h5 className='absolute top-3 left-[470px] text-[#707070] text-sm font-medium'>تاریخ برگزاری</h5>
            <h5 className='absolute top-3 left-[305px] text-[#707070] text-sm font-medium'>تاریخ اتمام</h5>
            <h5 className='absolute top-3 left-[144px] text-[#707070] text-sm font-medium'>وضعیت</h5>
        </div>

        <div className=''>
            <div className={`w-[83px] h-[52px] rounded-xl ${reserveBg} absolute top-[72px] left-[971px]`}>
                <img src={`./images/${ReserveImg}.png`} className='size-[33px] mx-auto mt-2'/>
            </div>
            <h3 className='h-[23px] absolute top-[86px] left-[869px] font-bold'>{title}</h3>
            <h3 className='h-[20px] absolute top-[86px] left-[620px] font-semibold text-sm'>محمدحسین خلیل‌پور</h3>
            <h3 className='h-[20px] absolute top-[86px] left-[447px] font-semibold text-sm'>29 اردیبهشت 1403</h3>
            <h3 className='h-[20px] absolute top-[86px] left-[274px] font-semibold text-sm'>29 اردیبهشت 1403</h3>
            <div className={`h-6 absolute top-[85px] left-[144px] ${AcceptBg} rounded-[32px] py-[2px] px-2 text-white text-sm`}>{AcceptReserve}</div>
        </div>
    </div>
  )
}

export {ReserveStatus}