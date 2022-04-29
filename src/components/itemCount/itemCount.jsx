import React, {useState} from "react";
import {ButtonGroup, Button} from "react-bootstrap";


export const ItemCount = () => { 
    const [count, setCount] = useState(1);

    const restar = () => { 
        count = (count - 1)
    }
    
    
    return (
        <div className="mx-2, pt-3">
            <ButtonGroup className="mx-2" aria-label="Basic example">
                <Button variant="secondary">-</Button>
                <span style={{width: 125, textAlign: 'center'}}>{count}</span>
                <Button variant="secondary">+</Button>
            </ButtonGroup>
            <div className="p-2">
                <Button variant="secondary">AGREGAR AL CARRITO </Button>
            </div>
        </div>


    )


}
export default ItemCount