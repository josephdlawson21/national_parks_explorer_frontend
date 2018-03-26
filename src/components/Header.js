

import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = (props) => {
  return (
    <div className="navbar-fixed">
      <nav>
       <div className="nav-wrapper black fixed">
         <NavLink className="nav-logo" to={"/"}>National Parks LUL</NavLink>
       </div>
     </nav>
    </div>
  )
}

export default Header
