import React from 'react'
import Logo from '../../../../../../../assets/image/LayoutImage/IconAcademy.svg'
import academyBahr from '../../../../../../../assets/image/LayoutImage/academyBahr.svg'

const MenuHeader = ({setIsModalOpen}) => {
    return (
        <div className='flex justify-between w-[550px] h-[56px] '>
            <button 
                onClick={() => setIsModalOpen(false)}
                className='w-[56px] h-[56px] flex justify-center items-center text-white text-[30px] '>
                ✕
            </button>
            <div className='flex h-[50px] '>
                <div className='flex items-center' > 
                    <img src={academyBahr} alt="NameAcademy"/> 
                </div>
                <div>
                    <img src={Logo} alt="Logo"/>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader