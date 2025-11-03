import React from 'react'
import { FiArrowDown } from 'react-icons/fi'
import profile from '../../../../../../assets/image/LayoutImage/peppe.svg'

const ProfileMobile = () => {
  return (
    <button className='w-[88px] h-[48px] border rounded-full flex justify-around items-center sm:hidden'>
        <div className='w-[40px] h-[40px] rounded-full'>
            <img src={profile} alt='profileImage' />
        </div>
        <div className='mr-3 dark:text-white'>
            <FiArrowDown />
        </div>
    </button>
)
}

export default ProfileMobile