import React from 'react'
import { Link } from 'react-router-dom'

const MenuLinkMobile = () => {
  return (
    <div className='flex flex-wrap w-[550px] h-[260px]  text-white text-[22px]'>
        <Link className='w-[100%] h-[50px] border-b-2 flex flex-row-reverse items-end'>خانه</Link>
        <Link className='w-[100%] h-[50px] border-b-2 flex flex-row-reverse items-end'>دوره ها</Link>
        <Link to="/blog" className='w-[100%] h-[50px] border-b-2 flex flex-row-reverse items-end'>بلاک ها</Link>
        <Link className='w-[100%] h-[50px] border-b-2 flex flex-row-reverse items-end'>ارتباط باما</Link>
    </div>
)
}

export default MenuLinkMobile