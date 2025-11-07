import React from 'react'
import {HeaderCourse} from '../course/top/HeaderCourse'
import {CourseBody} from "../course/CoursePage/CourseBody"
import {Filter} from "../course/filter/Filter"

const Course = () => {
  return (
    <div className='xs:flex xs:justify-center sm:flex sm:justify-center  flex justify-centerflex justify-center  lg:flex lg:justify-center overflow-hidden mm:overflow-hidden'>
      <div className='h-[2200px] xl:h-[2200px] lg:h-[2800px] lgg:h-[2800px] w-[1140px] relative  xl:w-[1200px] lgg:w-[1050px] lg:w-[892px] md:w-[388px] sm:w-[393px] xs:w-[310px] mm:w-[200px] nn:w-[200px]  ' >
        <HeaderCourse/>
        <CourseBody/>
        <Filter/>
      </div>
    </div>
  )
}

export {Course}