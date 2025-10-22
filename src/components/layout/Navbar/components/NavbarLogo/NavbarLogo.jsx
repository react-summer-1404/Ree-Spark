import React from 'react'
import academyBar from '../../../../../assets/image/LayoutImage/academyBahr.svg'
import Logo from '../../../../../assets/image/LayoutImage/IconAcademy.svg'

const NavbarLogo = () => {
  return (
    <div className='w-auto h-[48px] flex mr-1 items-center'>
        <div className='w-[155px] h-[42px] lg:w-[190px] hidden md:flex'>
            <img src={academyBar} alt='nameAcademy' />
        </div>
        <div className='sm:w-[42px] sm:h-[40px]'>
            <img src={Logo} alt='Logo' />
        </div>
    </div>
)
}

export default NavbarLogo