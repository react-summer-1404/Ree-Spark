import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderPanel } from './Panel/HeaderPanel'
import { RightSidePanel } from './Panel/RightSidePanel'

const DashboardLayout = () => {
  return (
    <div className="flex justify-center  bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 min-h-screen relative">
      <div className="w-[1440px] relative  bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 ">
        <div className="w-[20%] h-[100%] float-right  ">
          <RightSidePanel/>
        </div>
        <div className="w-[80%] h-[7%] ">
          <HeaderPanel/>
        </div>
        <div className="w-[78%] border-blue-400 h-[908px] float-end rounded-[50px] bg-[#fcfcfc] dark:bg-gray-800 dark:text-white">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
