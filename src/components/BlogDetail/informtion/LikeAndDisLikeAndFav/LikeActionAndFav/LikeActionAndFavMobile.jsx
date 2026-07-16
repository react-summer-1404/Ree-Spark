import React from 'react'
import LikeAction from '../LikeAction/LikeAction'
import ButtonFav from './ButtonFav'

const LikeActionAndFavMobile = () => {
  return (
    <div className="sm:hidden w-[361px] justify-between flex mt-5 ">
        <LikeAction />
        <ButtonFav />
      </div>
)
}

export default LikeActionAndFavMobile