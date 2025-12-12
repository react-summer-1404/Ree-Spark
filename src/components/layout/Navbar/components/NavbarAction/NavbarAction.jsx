import DarkMode from '../../../../common/Darkmode/DarkMode.jsx';
import { FiBell } from 'react-icons/fi';
import React from 'react';
import { Link } from 'react-router-dom';

const NavbarAction = () => {
  return (
    <div className='hidden gap-1 w-auto ml-1 lg:w-[220px] sm:flex md:w-[100px]'>
            <DarkMode />
        <Link to={"/dashboard/notification"} className='w-[48px] h-[48px] border rounded-full flex justify-center items-center'>
            <FiBell size={30} className='dark:text-white' />
        </Link>
    </div>
  )
}

export default NavbarAction