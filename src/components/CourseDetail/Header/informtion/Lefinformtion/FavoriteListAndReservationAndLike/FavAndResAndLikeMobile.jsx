import React from 'react'
import LikeAndDisLike from './LikeAndDisLike'
import AddFavorite from './AddFavorite'

const FavAndResAndLikeMobile = () => {
  return (
    <div className="sm:hidden w-[361px] justify-between flex mt-5 ">
        <LikeAndDisLike />
        <AddFavorite />
      </div>
)
}

export default FavAndResAndLikeMobile