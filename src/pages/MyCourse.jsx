import React from 'react'
import { SearchPanelBox } from '../components/MyCourse/SearchPanelBox'
import { CourseStatus } from '../components/MyCourse/CourseStatus'
import { LucideCalendarRange } from 'lucide-react'

const MyCourse = () => {
  return (
    <div>
      <h1 className="h-9 absolute top-[76px] left-[1005px] text-2xl font-bold ">
        دوره من
      </h1>

      <div className="w-[258px] h-20 absolute top-[122px] left-[848px] flex gap-2">
        <SearchPanelBox />
      </div>

      <div className="w-[258px] h-20 absolute top-[122px] left-[566px] flex gap-2">
        <div className="w-[258px] h-[80px] gap-2 relative ">
          <div className="w-[157px] h-[24px] gap-2  float-right flex ">
            <h3 className="w-[125px] h-[23px]  text-[15px] font-medium leading-5 text-right ">
              تاریخ برگزاری - اتمام
            </h3>
            <LucideCalendarRange />
          </div>
          <div className="w-[258px] h-[48px] rounded-[16px] bg-[#F1F1F1] absolute top-8 text-black font-medium text-[14px] p-4 text-right">
            29 اردیبهشت 1403 - 5 خرداد 1403
          </div>
        </div>
      </div>

      {/* course status */}
      <div className="bg-[#F6F6F6] w-[1078px] h-[710px] absolute top-[220px] left-6 rounded-[24px]">
        <CourseStatus />
      </div>
    </div>
  )
}

export  {MyCourse}
