import React from 'react'
import { Outlet } from 'react-router-dom'
import Navegacion from '../components/Navbar/Navegacion'

const Leyaout = () => {
  return (
      <>
      <Navegacion/>
      <Outlet/>
      </>
  )
}

export default Leyaout