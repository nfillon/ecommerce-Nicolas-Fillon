import React from 'react'
import { CartContext } from '../../context/GlobalStateContext copy'







export const ItemCart = (item) => {ç
    const {deleteItemToCart, addItemToCart} = useContext(CartContext);
    const {id} = item;




  return (
    <div>ItemCart</div>
    
  )
}
