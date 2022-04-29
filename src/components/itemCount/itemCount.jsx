import React, {useState} from "react";
import {ButtonGroup, Button} from "react-bootstrap";


export const ItemCount = ({minimo, disponibilidad, addCarrito}) => { 
    const [count, setCount] = useState(minimo);

    const restar = () => { 
        setCount(count - 1);
    }
    const suma = () => {
        
        setCount(count + 1);
    }
    
    return (
        <div className="mx-2, pt-3">
            <ButtonGroup className="mx-2" aria-label="Basic example">
                <Button disabled={count <= 1} variant="secondary" onClick={restar}>-</Button>
                <span style={{width: 125, textAlign: 'center'}}>{count}</span>
                <Button  disabled={count >= disponibilidad} variant="secondary" onClick={suma}>+</Button>
            </ButtonGroup>
            <div className="p-2">
                <Button disabled ={disponibilidad <= 0} variant="secondary" onClick={() => addCarrito((count))}>AGREGAR AL CARRITO</Button>
            </div>
        </div>
    )
}
export default ItemCount