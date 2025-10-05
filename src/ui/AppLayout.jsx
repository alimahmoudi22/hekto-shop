import React from 'react'
import { Outlet } from 'react-router'
import Header from './header/Header'
import Footer from './footer/Footer'

const AppLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default AppLayout