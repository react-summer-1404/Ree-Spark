import React from 'react'
import {HeaderCourse} from '../course/top/HeaderCourse'
import {CourseBody} from "../course/CoursePage/CourseBody"
import {Filter} from "../course/filter/Filter"

const Course = () => {
  return (
    <div className=' flex justify-centerflex justify-center  lg:flex lg:justify-center overflow-hidden '>
      <div className='h-[2000px] xl:h-[1700px] lg:h-[2500px] lgg:h-[2400px] w-[360px] relative  xl:w-[1200px] lgg:w-[1050px] lg:w-[892px]   ' >
        <HeaderCourse/>
        <CourseBody/>
        <Filter/>
      </div>
    </div>
  )
}

export {Course}