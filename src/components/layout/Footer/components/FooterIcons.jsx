import React from 'react'
import { FiInstagram, FiTrello, FiTwitter, FiYoutube } from 'react-icons/fi'

const FooterIcons = () => {
    return (
        <div className='w-[150px] h-[20px] flex dark:text-[white] justify-between sm:mt-0 mt-5 ml-2 '>
            <button className='w-[19px] h-[19px]  '>
            <FiInstagram />
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
    )
}

export default FooterIcons