import React, { useContext, useEffect, useState } from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { CartContext } from "../../context/GlobalStateContext";
import { ItemCart } from "../ItemCart/ItemCart";

export const CartWidget = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [productsLength, setProductsLength] = useState(0);
  const { cartItems } = useContext(CartContext);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
  }, [cartItems]);

  const total = cartItems.reduce(
    (previous, current) => previous + current.amount * current.price,
    0
  );

  console.log(total);

  return (
    <div>
      {cartOpen ? (
        <span>
          <BsFillCartCheckFill color="white" size={30} />
          {productsLength}
        </span>
      ) : (
        <span>
          <BsFillCartCheckFill color="green" size={30} />
          {productsLength}
        </span> 
      )}
      {cartItems && cartOpen && (
        <div>
          <h2>Tu Carrito</h2>
          {cartItems.length === 0 ? (
            <p>Tu Carrito esta vacio</p>
          ) : (
            <div>
              {cartItems.map((item, i) => (
                <ItemCart key={i} item={item} />
              ))}{" "}
            </div>
          )}
          <h2>Total: ${total} </h2>
        </div>
      )}
    </div>
  );
};

export default CartWidget;
