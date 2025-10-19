import React from 'react'
import academyBar from '../../../assets/image/LayoutImage/academybahr.svg'
import { Link } from 'react-router-dom'
import Logo from '../../../assets/image/LayoutImage/IconAcademy.svg'
import {FiInstagram, FiTwitter, FiYoutube, FiTrello} from 'react-icons/fi'
const Footer = () => {

  return (
    <>
    <div className='border-t-2 h-full flex justify-center sm:justify-between  sm:flex-nowrap flex-wrap items-center gap-5'>
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
      {/* //{} */}
      <div className='w-[100%] h-[38px] flex flex-wrap gap-5 ml-5 mr-5 justify-between items-center dark:text-[white] '>

        {/* <Link className='hover:underline' >خدمات ما</Link> */}
        <Link className='hover:underline'>ارتباط باما</Link>
        <Link className='hover:underline'>درباره ما</Link>
        <Link className='hover:underline'>اساتید</Link>
        <Link className='hover:underline'>بلاگ ها</Link>
        <Link className='hover:underline'>دوره ها</Link>
        <Link className='hover:underline'>خانه</Link>
      </div>
      {/* //{} */}
      <div className=' flex h-[50px] items-start mt-3 sm:m-0 '>
        <div className='w-[190px] h-[50px] items-center hidden sm:flex'>
          <img src={academyBar} />
        </div>
        <div className='w-[42px] h-[30px] '>
          <img src={Logo} alt="logo"/>
        </div>
      </div>
    </div>
    </>
  )
}

export default Footer;
