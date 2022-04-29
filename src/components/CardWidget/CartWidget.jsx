import React from 'react'

import { BsFillCartCheckFill } from "react-icons/bs";


const CartWidget = ({count}) => {
  return (
     <span><BsFillCartCheckFill size={30}/> {count} </span>
  )
}

export default CartWidget