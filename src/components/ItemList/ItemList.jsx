import React from "react";
import Item from "../Item/Item";


export const ItemList = ({listProdutos}) => {
  return (
    <>
        {
          listProdutos.length > 0 ? listProdutos.map(producto => (
            <Item
              title={producto.name}
              description={producto.short_description}
              presentation={producto.presentation}
              botton={producto.botton}
            />
          )) : <h4>Cargando...</h4>
          }
    </>
  )
}

export default ItemList;
