import {BrowserRouter, Routes, Route} from "react-router-dom"
import React from 'react'
import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import ItemDetail from "../components/ItemDetail/ItemDetail"

export const Rutas = () => {
  return (
    <>
    <BrowserRouter>
        <Routes>
         <Route index element={<ItemListContainer/>}/>   
         <Route path="/detail/:id" element={<ItemDetail/>}/>
        </Routes>
    </BrowserRouter>
    </>
)
}
