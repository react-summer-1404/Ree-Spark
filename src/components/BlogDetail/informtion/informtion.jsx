import React from 'react'
import Title from './Blogtitle/Title'
import BlogSituation from './BlogSituation/BlogSituation'
import BlogHistory from './BlogHistory/BlogHistory'
import LikeActionAndFav from './LikeAndDisLikeAndFav/LikeActionAndFav/LikeActionAndFav'
import SituationMobile from './BlogSituation/SituationMoble'
import Star from './BlogStar/Star'
import HisMobile from './BlogHistory/HistoryMobile'
import StarMobile from './BlogStar/StarMobile'
import LikeActionAndFavMobile from './LikeAndDisLikeAndFav/LikeActionAndFav/LikeActionAndFavMobile'

const Informtion = ({response}) => {
  return (
     <div className="flex flex-wrap w-full lg:w-[60%] gap-4 justify-center  mt-4 ">
              <Title response={response} />
              
              {/* BlogSituation */}
              <BlogSituation />
              <SituationMobile /> 
              {/* bloghistory */}
              <BlogHistory />
              <HisMobile />
              {/* ///// */}
                <Star />
                <StarMobile/> 
              {/* //// */}
              <LikeActionAndFav />
              <LikeActionAndFavMobile />
            </div>
)
}

export default Informtion