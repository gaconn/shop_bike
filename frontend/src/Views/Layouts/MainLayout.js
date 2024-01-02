import React from 'react'
import { Outlet, redirect } from 'react-router-dom'
import MainLayoutNavbar from '../Components/MainLayoutNavbar'
import { ROUTES } from '../../Common/Const'

const MainLayout = () => {
  return (
    <div className=''>
      <MainLayoutNavbar/>
      <Outlet />
    </div>
  )
}

export default MainLayout