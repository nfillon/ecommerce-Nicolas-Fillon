import React from 'react'


export const ItemCart = ({item}) => {
  console.log(item.name)
  return (
    <div>{item.name}</div>
  )
}


export default ItemCart