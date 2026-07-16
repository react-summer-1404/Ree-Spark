import React from 'react'
import BlogStar from './BlogStar'

const StarMobile = () => {
  return (
    <div className="sm:hidden  flex flex-col gap-y-4 mt-5 ">
      <div>
        <BlogStar />
      </div>
    </div>
)
}

export default StarMobile