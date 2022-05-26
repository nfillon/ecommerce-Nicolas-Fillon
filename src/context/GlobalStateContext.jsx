import React, { createContext, useEffect, useState } from "react";
import db from '../service/firebase'
import { getDocs, collection} from 'firebase/firestore'


// import { data } from "../components/Data/Data.js";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorages = localStorage.getItem("cartProducts");
      return productosEnLocalStorages
        ? JSON.parse(productosEnLocalStorages)
        : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  const [products, setProducts] = useState([]);



  const fetchData = async() => { 
    const col = collection(db,'foodList') 
    try {
      const data = await getDocs(col)
      const result = data.docs.map(doc => doc =  {id:doc.id, ...doc.data()})
      setProducts(result)
      console.log(result);
    } catch (error) {
      console.log(error);
      
    }

  }




  useEffect(() => {

    fetchData()
 
  

    // const promesaProductos = doc(db,'foodList','19632')
    // getDoc(promesaProductos).then((snapshot) => {
    //   if(snapshot.exists()) {
    //     setProducts([...products,{id:snapshot.id, ...snapshot.data()}])
    //   }
    // })

    // const promesaProductos = new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     resolve(data);
    //   }, 2000);
    // });
    // promesaProductos
    //   .then((res) => {
    //     setProducts(res);
    //   })
    //   .catch((err) => console.log(err))
    //   .then(() => console.log(data));
  }, []);//

  const [productsLength, setProductsLength] = useState(0);

  useEffect(() => {
    setProductsLength(
      cartItems.reduce((previous, current) => previous + current.amount, 0)
    );
   }, [cartItems])


  const addItemToCart = (product) => {
    const inCart = cartItems.find((item) => item.id === Number(product.id));

    if (inCart) {
      setCartItems(
        cartItems.map((Item) => {
          if (Item.id === Number(product.id)) {
            return { ...inCart, amount: inCart.amount + 1 };
          } else return Item;
        })
      );
    } else {
      setCartItems([...cartItems, { ...product, amount: 1 }]);
    }
  };

  const deleteItemToCart = (product) => {
    const inCart = cartItems.find((Item) => Item.id === Number(product.id));
    console.log(product.id);
    if (inCart.amount === 1) {
      setCartItems(cartItems.filter((Item) => Item.id !== Number(product.id)));
    } else {
      setCartItems(
        cartItems.map((Item) => {
        if (Item.id === Number(product.id)) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return Item;
        })
      );
    }
  };

  return (
    <CartContext.Provider

  value={{ cartItems, products, productsLength, addItemToCart, deleteItemToCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
