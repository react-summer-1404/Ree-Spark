import React from 'react'
import MenuHeader from './components/MenuHeader'
import MenuLinkMobile from './components/MenuLinkMobile'
import MenuIcons from './components/MenuIcon'

const NavbarMenu = ({isModalOpen, setIsModalOpen}) => {
  return (
    <div>
        {isModalOpen && (
            <div className='fixed inset-0 sm:hidden bg-black bg-opacity-80 flex justify-center items-center z-50'>
            <div className='w-[65%] h-[500px] bg-[#2F2F2F] p-3 flex flex-wrap'>
                {/* هدر منو موبایل */}
                <MenuHeader setIsModalOpen={setIsModalOpen} />
                    {/* لینک موبایل */}
                <MenuLinkMobile/>
                  {/* آیکون   */}
                <MenuIcons/>
                </div>
            </div>
        )}
    </div>
  )
}

export default NavbarMenu