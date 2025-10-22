import React, { useState } from 'react'
import { FiArrowDown, FiMenu } from 'react-icons/fi';
import { Link } from 'react-router-dom'
import NavbarMenu from './Menu/NavbarMenu';
import AuthButton from './components/AuthButton';
import NavbarLinks from './components/NavbarLinks';
import MenuButtonMobile from './components/MenuButtonMobile';
import ProfileMobile from './components/ProfileMobile';


const NavbarLink = () => {
    const [isModalOpen, setIsModalOpen] = useState(false); 

    return (
        <div>
        <div className='flex gap-1 ml-2'>
            <div className='sm:flex sm:w-[440px] sm:h-[48px] bg-[#2F2F2F] 
                sm:rounded-[56px] justify-around items-center w-[48px] h-[48px] rounded-full flex'
            >
            {/* دکمه منو موبایل */}
            <MenuButtonMobile 
                setIsModalOpen={setIsModalOpen}
            />
            {/* دکمه ثبت‌نام دسکتاپ */}
            <AuthButton/>
            {/* لینک‌های دسکتاپ */}
            <NavbarLinks/>
            </div>

            {/* پروفایل موبایل */}
            <ProfileMobile/>
        </div>
        {/*//// Menu///// */}
        <NavbarMenu setIsModalOpen={setIsModalOpen} isModalOpen={isModalOpen} />
        </div>
    )
}

export default NavbarLink