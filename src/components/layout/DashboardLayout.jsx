import React from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderPanel } from './Panel/HeaderPanel'
import { RightSidePanel } from './Panel/RightSidePanel'

const DashboardLayout = () => {
  return (
    <div className="flex justify-center bg-gray-200 dark:bg-[#242424] min-h-screen">
      <div className="w-[1440px]   relative bg-gray-200 dark:bg-[#242424] ">
        <div className="w-[20%] h-[100%] float-right  ">
          <RightSidePanel/>
        </div>

        <div className="w-[80%] h-[7%] ">
          <HeaderPanel/>
        </div>
        <div className="w-[78%] border-blue-400 h-[90%] float-end rounded-[50px] bg-[#fcfcfc]">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout
