import React from 'react';
import NavbarAction from './components/NavbarAction/NavbarAction';
import NavbarLink from './components/NavbarLink/NavbarLink';
import NavbarLogo from './components/NavbarLogo/NavbarLogo';

const Navbar = () => {

  return (
    <div className='flex justify-between md:justify-between'>
      {/* بخش سمت چپ */}
      <NavbarAction/>

      {/* بخش وسط */}
      <NavbarLink/>

      {/* لوگو سمت راست */}
        <NavbarLogo/>

    </div>
  );
};

export default Navbar;
