import React from 'react'
import LeftFilter from '../Components/LeftFilter'
import MainProductCard from '../Components/MainProductCard'

const Product = () => {
  return (
    <div className='flex flex-row'>
      <LeftFilter />
      <div className='ml-3 mt-2'>
        <MainProductCard />
      </div>
    </div>
  )
}

export default Product