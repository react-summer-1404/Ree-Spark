import React from 'react'
import { Link } from 'react-router-dom'

const AuthButton = () => {
  return (
    <Link
        to='/Auth/Register'
        className='sm:flex w-[131px] h-[39px] rounded-full bg-[#3772FF] hidden items-center justify-center'
    >
        <p className='text-[#FCFCFC]'>ثبت نام یا ورود</p>
    </Link>
)
}

export default AuthButton