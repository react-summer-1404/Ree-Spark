import React from 'react'
import Peppe from "../../../../../../assets/image/LayoutImage/Peppe.svg"
import { Link } from 'react-router-dom'
const MenuHesder = () => {
  return (
    <Link to="/dashboard/panel">
      <img src={Peppe} alt="" />
    </Link>
  )
}

export  {MenuHesder}
