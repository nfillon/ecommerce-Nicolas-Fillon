import React, {useContext, useEffect, useState} from "react";
import {ButtonGroup, Button} from "react-bootstrap";
import { CartContext } from "../../context/GlobalStateContext";

export const ItemCount = ({minimo, disponibilidad}) => { 
    // const { id } = useParams();
    const {products} = useContext(CartContext)
    console.log(products)

    const {addItemToCart} = useContext(CartContext)

    const [count, setCount] = useState((parseInt(minimo)));

    const restar = () => { 
        setCount(count - 1);
    }

    const suma = () => {
        
        setCount(count + 1);
    }

    useEffect(() => { 
        setCount(parseInt(minimo));
    }, [minimo])

    return (
        <div className="mx-2, pt-3">
            <ButtonGroup className="mx-2" aria-label="Basic example">
                <Button disabled={count <= 1} variant="success" onClick={restar}>-</Button>
                <span style={{width: 50, textAlign: "center", fontSize:25}}>{count}</span>
                <Button disabled={count >= disponibilidad} variant="success" onClick={suma}>+</Button>
                <Button className="mx-4" disabled ={disponibilidad <= 0} variant="success"  onClick={() => addItemToCart(products)}>AGREGAR AL CARRITO</Button>
            </ButtonGroup>
        </div>
    )
}

export default ItemCount