import {
  BrowserRouter, 
  Routes, 
  Route
} from 'react-router-dom';import React from 'react'

import Leyaout from './Leyaout';
import ItemList from '../components/ItemList/ItemList';
import ItemDetail from '../components/ItemDetail/ItemDetail';





export const Rutas = () => {
  
  return (
    <>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Leyaout />}>
            <Route index element={<ItemList/>}/> 
            <Route path="/detail/:id" element={<ItemDetail/>}/>
          </Route>
        </Routes>
    </BrowserRouter>
    </>
)
}
