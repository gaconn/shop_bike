import React from 'react'
import { PRICE } from '../../Common/Const'

const LeftFilter = () => {
  return (
    <div className='p-3 mt-3 w-52 h-fit sticky border border-solid border-orange-500'>
        <div>
            <div className='font-bold'>Sắp xếp theo </div>
            <div className='border-1 ml-2'>
                <div className='font-semibold'>Giá:</div>
                <div className='flex flex-row justify-between ml-3'>
                    <div className='flex flex-col'>
                        <input type='radio' name='sort_price' value='0' id='sort_price_asc'/>
                        <label for="sort_price_asc">Tăng dần</label>
                    </div>
                    <div className='flex flex-col'>
                        <input type='radio' name='sort_price' value='1' id='sort_price_desc'/>
                        <label for="sort_price_desc">Giảm dần</label>
                    </div>
                </div>

                <div className='font-semibold mt-3'>Thời gian:</div>
                <div className='flex flex-row justify-between ml-3'>
                    <div className='flex flex-col'>
                        <input type='radio' name='sort_time_create' value='0' id='sort_time_new' className='block pl-1 pr-1'/>
                        <label for="sort_time_new" className='ml-1'>Mới nhất</label>
                    </div>
                    <div className='flex flex-col'>
                        <input type='radio' name='sort_time_create' value='1' id='sort_time_old'/>
                        <label for="sort_time_old" className='ml-1'>Cũ nhất</label>
                    </div>
                </div>
            </div>
        </div>
        <div className='mt-12'>
            <div className='font-bold'>Lọc sản phẩm</div>
            <div className='pl-2'>
                <div className='font-semibold'>Theo hãng</div>
                <div className='ml-2'>
                    <div className='flex flex-row'>
                        <input type='checkbox' name='filter_brand' value="yamaha" id='brand_1'/>
                        <label className='ml-2' for="brand_1">Yamaha</label>
                    </div>
                    <div className='flex flex-row'>
                        <input type='checkbox' name='filter_brand' value="Honda" id='brand_2'/>
                        <label className='ml-2' for="brand_2">Honda</label>
                    </div>
                    <div className='flex flex-row'>
                        <input type='checkbox' name='filter_brand' value="Vario" id='brand_3'/>
                        <label className='ml-2' for="brand_3">Vario</label>
                    </div>
                    <div className='flex flex-row'>
                        <input type='checkbox' name='filter_brand' value="Suzuki" id='brand_4'/>
                        <label className='ml-2' for="brand_4">Suzuki</label>
                    </div>
                </div>
            </div>
            <div className='ml-2 mt-3'>
                <div className='font-semibold '>Theo giá</div>
                <div className='ml-2'>
                    <div>
                        <div>Từ</div>
                        <input type='number' className='border border-solid border-black w-full' name='filter_price' min={PRICE.min} max={PRICE.max}/>
                    </div>
                    <div>
                        <div>Đến</div>
                        <input type='number' name='filter_price' className='border border-solid border-black w-full' min={PRICE.min} max={PRICE.max}/>
                    </div>
                </div>
            </div>
        </div>

        <button className='mt-3 border border-solid border-black rounded pt-1 pb-1 pl-1 pr-1 bg-gray-400 hover:bg-slate-500'>Bỏ lọc</button>
    </div>
  )
}

export default LeftFilter