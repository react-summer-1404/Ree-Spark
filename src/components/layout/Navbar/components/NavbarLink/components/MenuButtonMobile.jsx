import React from 'react'
import { FiMenu } from 'react-icons/fi'

const MenuButtonMobile = ({setIsModalOpen}) => {
  return (
     <button
        className='sm:hidden flex text-white h-full w-full justify-center items-center'
        onClick={() => setIsModalOpen(true)}>
        <FiMenu />
            </button>
  )
}

export default MenuButtonMobile;