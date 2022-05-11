import {
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom';import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer"
import Leyaout from './Leyaout';



export const Rutas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Leyaout />}>
            <Route index element={<ItemListContainer/>}/> 
            <Route path="/detail/:id" element={<ItemDetailContainer/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
)
}
