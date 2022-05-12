import React from 'react'

import { BsFillCartCheckFill } from "react-icons/bs";



export const CartWidget = ({Cantidad}) => {
  
  return (
     <span><BsFillCartCheckFill size={30}/>{Cantidad}</span>
  )
}

export default CartWidget;