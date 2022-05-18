import React, { createContext, useEffect, useState } from 'react'


export const CartContext = createContext();

export const CartProvider = ({children}) => {

    const [cartItems, setCartItems] = useState(() => {
        try { 
            const productosEnLocalStorages = localStorage.getItem('cartProducts')
            return productosEnLocalStorages ? JSON.parse(productosEnLocalStorages) :[];
        } catch(error) {
            return[];
        }
    });
    
    useEffect(() => { 
        localStorage.setItem('cartProducts', JSON.stringify(cartItems));

    }, [cartItems]);

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
        <CartContext.Provider value={{cartItems, addItemToCart, deleteItemToCart}}>
            {children}
        </CartContext.Provider>
     
    );
}

