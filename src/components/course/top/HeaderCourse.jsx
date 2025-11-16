import React from 'react'
import {ButtonRispansive} from "../filter/buttonFilter/ButtonRispansive";

 
const HeaderCourse = () => {

  return (
    
    <div className=' lg:flex lg:justify-center flex justify-center'>
        <div className='  absolute lg:top-[64px] top-[54px] gap-6   dark:text-white'>
            <div className='w-[379px] h-[57px] gap-2  font-sans font-bold text-[40px] text-center  '>شروع ماجراجویی جدید</div>
            <h6 className='w-[297px] h-[52px] font-sans text-[17px] text-center text-[#707070] font-medium m-auto dark:text-white mt-[20px]'>یک شروع قوی برای یادگیری یک مسئله جدید میتونه تو پیشرفت کمکت کنه</h6>
        </div>

        {/* {Button} */}
      <ButtonRispansive/>
    </div>
  )
}

export {HeaderCourse}
