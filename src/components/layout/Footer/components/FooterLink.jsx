import React from 'react'
import { Link } from 'react-router-dom'

const FooterLink = () => {
  return (
    <div className='w-[100%] h-[38px] flex flex-wrap gap-5 ml-5 mr-5 
        justify-between 
        items-center 
        dark:text-[white]'
        >
        <Link className='hover:underline' >خدمات ما</Link>
        <Link className='hover:underline'>ارتباط باما</Link>
        <Link className='hover:underline'>درباره ما</Link>
        <Link className='hover:underline'>اساتید</Link>
        <Link className='hover:underline'>بلاگ ها</Link>
        <Link className='hover:underline'>دوره ها</Link>
        <Link className='hover:underline'>خانه</Link>
    </div>
)
}

export default FooterLink