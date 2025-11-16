import React from 'react'
import Title from './Blogtitle/Title'
import BlogSituation from './BlogSituation/BlogSituation'
import BlogHistory from './BlogHistory/BlogHistory'
import BlogStar from './BlogStar/BlogStar'
import LikeActionAndFav from './LikeAndDisLikeAndFav/LikeActionAndFav/LikeActionAndFav'

const Informtion = () => {
  return (
     <div className="flex flex-wrap w-full lg:w-[60%] justify-center h-[400px] mt-4 ">
              <Title />
              {/* /// */}
              {/* BlogSituation */}
              <BlogSituation />
              {/* ///// */}
              {/* bloghistory */}
              <BlogHistory />
              {/* ///// */}
              <div className="flex justify-end h-[34px] w-full ">
                <BlogStar />
              </div>
              {/* //// */}
              <LikeActionAndFav />
            </div>
)
}

export default Informtion