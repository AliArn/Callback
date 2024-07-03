import React from 'react'
import { memo } from 'react'


const Navbar = ({adjective, getAdjective}) => {
    console.log("Navbar is Rendered")
  return (
    <div>
      I am {adjective} Navbar
      <button onClick={()=>{getAdjective()}}>Change me</button>
    </div>
  )
}

export default memo(Navbar)
