import React from 'react'
import Header from './Header'
import Footer from './Footer'
import {Outlet} from 'react-router-dom'
import Context from '../ContextAPI/Context'

export default function RootLayout() {
  return (
    <>
    <Context>
        <Header/>

        <Outlet/>  

        <Footer/>
    </Context>
      
    </>
  )
}
