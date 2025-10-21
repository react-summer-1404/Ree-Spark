import React from 'react'
import { FiInstagram, FiTrello, FiTwitter, FiYoutube } from 'react-icons/fi'

const MenuIcons = () => {
  return (
    <div className='w-[550px] flex border-t-2 justify-center items-center '>
        <div className='flex text-white gap-3'>
            <button className='w-[19px] h-[19px]  '>
                <FiInstagram/>
            </button>
            <button className='w-[19px] h-[19px]'>
                <FiTwitter/>
            </button>
            <button className='w-[19px] h-[19px]'>
                <FiYoutube/>
            </button>
            <button className='w-[19px] h-[19px]'>
                <FiTrello/>
            </button>
        </div>
    </div>
)
}

export default MenuIcons