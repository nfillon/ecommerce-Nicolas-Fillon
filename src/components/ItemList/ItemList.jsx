import React from "react";
import Item from "../Item/Item";


export const ItemList = ({listProdutos}) => {
  return (
    <>
        {
          listProdutos.length > 0 ? listProdutos.map(producto => (
            <Item
              key={producto.product_id}
              id={producto.product_id}
              title={producto.name}
              image={producto.image}
              description={producto.short_description}
              price={producto.price}
              botton={producto.botton}
            />
          )) : <h4>Cargando...</h4>
          }
    </>
  )
}

export default ItemList;
