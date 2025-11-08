import React from 'react'
import { Link } from 'react-router-dom'

const NavbarLinks = () => {
  return (
    <div className='sm:flex w-[280px] h-[23px] hidden justify-center gap-5 dark:text-black text-[#FCFCFC]'>
        <Link to='/about'>درباره ما</Link>
        <Link to='/Blog'>بلاگ ها</Link>
        <Link to='/Courses'>دوره ها</Link>
        <Link to='/'>خانه</Link>
    </div>
)
}

export default NavbarLinks