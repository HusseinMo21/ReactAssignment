import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../NavBar/NavBar'
import Footer from './../Footer/Footer';
import Info from './../Info/Info';
export default function LayOut() {
  return (
    <>
      <NavBar/>

      <Outlet/>
      <Info/>
    <Footer/>
    </>
  )
}
