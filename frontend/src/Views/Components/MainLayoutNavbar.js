import React from 'react'
import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../Common/Const'
const MainLayoutNavbar = () => {
  return (
    <div className='flex h-16 w-full main_layout_nav_container sticky shadow-sm shadow-orange-400'>
      <div className='w-4/5 flex flex-row  m-auto'>
        <div className='w-12 h-full relative'>
          <img src='/images/logo.png' className='w-12 h-12 m-auto'/>
        </div>
        <div className='grow flex items-center main_layout_menu_list'>
          <div className='main_layout_menu_item'><NavLink to={ROUTES.home}>Trang chủ</NavLink></div>
          <div className='main_layout_menu_item'>Sản phẩm</div>
          <div className='main_layout_menu_item'>Liên hệ</div>
        </div>
        <div className='flex flex-row bg-white w-2/5 rounded'>
          <input type='text' placeholder='Tìm kiếm' className='grow ml-2 outline-none text-base font-semibold'/> 
          <button className='mr-2 hover:opacity-80'><img className='w-9 h-9' src='/images/search.png'/></button>
        </div>
      </div>
   </div>
  )
}

export default MainLayoutNavbar