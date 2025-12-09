import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const NavbarLinks = () => {

  const location = useLocation();
  console.log(location.pathname);

  const links = [
    { path: '/about', label: 'درباره ما' },
    { path: '/Courses', label: 'دوره ها' },
    { path: '/Blog', label: 'بلاگ ها' },
    { path: '/', label: 'خانه' },
  ];

  return (
    <div className='sm:flex w-[280px] h-8 hidden mt-[10px] justify-center gap-5 dark:text-black text-[#FCFCFC]'>
        {links.map(({ path, label }) => (
          <div key={path} className='flex flex-col items-center'>
            <Link to={path}>{label}</Link>
            {location.pathname === path && (
              <span className='w-1 h-1 rounded-full dark:bg-black bg-[#FCFCFC] mt-1'></span>
            )}
        </div>
      ))}
    </div>
  );
};

export default NavbarLinks;
