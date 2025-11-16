import React from 'react'
import {HeaderCourse} from '../course/top/HeaderCourse'
import {CourseBody} from "./CoursePage/Corses/CourseBody"
import {Filter} from "../course/filter/Filter"

const Course = () => {
  return (
    <div className=' flex justify-centerflex justify-center  lg:flex lg:justify-center overflow-hidden '>
      <div className='h-[2050px] xl:h-[1300px] xl:w-[1200px]  lg:h-[1660px] lgg:h-[1660px] w-[400px] relative  lgg:w-[1050px] lg:w-[892px]   ' >
        <HeaderCourse/>
        <CourseBody/>
        <Filter/>
      </div>
    </div>
  )
}

export {Course}