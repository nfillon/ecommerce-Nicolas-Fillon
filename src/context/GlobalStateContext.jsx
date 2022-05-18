import React, { createContext, useEffect, useState } from 'react'

import {data} from "../components/Data/Data.js"



export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const promesaProductos = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data)
        }, 2000)
        })
    promesaProductos.then((res) => {
        setProducts(res)
    }).catch((err) =>
    console.log(err)
    ).then(() => 
    console.log(data)
    )
    },[])

    const addItemToCart = (product) => { 

        console.log(product);

        const inCart = cartItems.find(
            (item => item.id === product.id)
        );
        if(inCart){
        setCartItems(
            cartItems.map((Item)=> {
                if(Item.id === product.id){ 
                    return { ...inCart, amount: inCart.amount + 1 };
                }else return Item;
            })
        );
    }  else { 
        setCartItems([ ...cartItems, { ...product, amount: 1 }]) 
    }
};

    const deleteItemToCart = (product) => {
        const inCart = cartItems.find(
            (Item) => (Item.id === product.id)
        );
        if(inCart.amount === 1) {
            cartItems.filter((Item) => Item.id === product.id)

        }else {
            setCartItems((Item) => { 
                if(Item.id === product.id){ 
                    return {...inCart, amount: inCart.amount -1}
                }else return Item

            });
        }
    };


    return (
        <CartContext.Provider value={{cartItems, products,addItemToCart, deleteItemToCart}}>
            {children}
        </CartContext.Provider>
     
    );
}

