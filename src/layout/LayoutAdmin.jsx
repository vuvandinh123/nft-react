import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Backend/Header'
import Footer from '../components/Backend/Footer'
import Aside from '../components/Backend/Aside'
import { ToastContainer } from 'react-toastify'

const LayoutAdmin = () => {
  return (
    <div >
      <div className='bg-admin'></div>
      <ToastContainer />
      <div className='container'>
        <Header />
        <div className="row">
          <Aside />
          <Outlet />
        </div>
        <Footer />

      </div>
    </div>
  )
}

export default LayoutAdmin
