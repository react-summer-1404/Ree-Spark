import React from 'react'
import academyBar from '../../../../assets/image/LayoutImage/academybahr.svg'
import Logo from '../../../../assets/image/LayoutImage/IconAcademy.svg'

const FooterLogo = () => {
    return (
        <div className=' flex h-[50px] items-start mt-3 sm:m-0 '>
            <div className='w-[190px] h-[50px] items-center hidden sm:flex'>
            <img src={academyBar} />
            </div>
            <div className='w-[42px] h-[30px] '>
            <img src={Logo} alt="logo"/>
            </div>
        </div> 
    )
}

export default FooterLogo