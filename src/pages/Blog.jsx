import React from 'react'
import { BlogHeroSection } from '../components/blog/BlogHeroSection'
import { BlogBody } from '../components/blog/BlogBody'

const Blog = () => {
  return (
    <div className='h-[2070px] xl:h-[1700px] overflow-hidden'>
      <BlogHeroSection/>
      <BlogBody/>
    </div>
  )
}

export  {Blog}
