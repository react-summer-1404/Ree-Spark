import React from 'react'
import { GoPencil } from 'react-icons/go'
import CircularRange from './components/CircularRange'

const ProfileInfo = () => {
  return (
    <div>
        <div className='size-5 absolute top-2 left-4 '>
          <GoPencil color='blue' />
        </div>
        <h5 className='h-5 absolute top-2 left-16 text-sm font-semibold'>وضعیت اطلاعات حساب کاربری</h5>
        <div className='size-[136px] absolute top-[50px] left-[59px]'>
            
        </div>
        <h5 className='h-5 absolute top-[210px] left-[17px] text-sm font-semibold'>اطلاعات حساب کاربری شما کامل نیست</h5>
        
        <CircularRange/>
    </div>
  )
}

export {ProfileInfo}