import React from 'react'
import { Outlet } from 'react-router-dom'
import MainLayoutNavbar from '../Components/MainLayoutNavbar'
import LeftFilter from '../Components/LeftFilter'

const MainLayout = () => {
  return (
    <div className=''>
      <MainLayoutNavbar/>
      <Outlet />
    </div>
  )
}

export default MainLayout