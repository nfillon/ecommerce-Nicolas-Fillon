import React, { useContext } from "react";
import { CartContext } from "../../context/GlobalStateContext";
import Item from "../Item/Item";


export const ItemList = () => {

  const {products} = useContext(CartContext)

  return (
    <>
        {
          products.length > 0 ? products.map((productos, key) => (
            <Item
              key={productos.id}
              id={productos.id}
              title={productos.name}
              image={productos.image}
              description={productos.short_description}
              price={productos.price}
              botton={productos.botton}
            />
          )) : <h4>Cargando...</h4>
          }
    </>
  )
}

export default ItemList;
