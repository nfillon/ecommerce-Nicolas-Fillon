import React, {useEffect, useState} from "react";
import {ButtonGroup, Button} from "react-bootstrap";

export const ItemCount = ({minimo, disponibilidad, onAdd}) => { 

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
                <Button className="mx-4" disabled ={disponibilidad <= 0} variant="success" onClick={() => onAdd(count)}>AGREGAR AL CARRITO</Button>
            </ButtonGroup>
        </div>
    )

}
export default ItemCount