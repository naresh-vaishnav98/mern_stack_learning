import React from 'react'
import { FaRegHeart } from "react-icons/fa";


export default function ProductCard({title,category,actual_price,sell_price}) {
  return (
    <>
      <div className='rounded shadow-lg box-border shadow-slate-400 m-2'>
        <div className='w-[100%]'>
            <img src="/HomePageImages/product1.jpg" alt="Product Image" className='w-[100%]'/>
        </div>
        <div className='w-[100%] flex flex-col items-center p-4 pb-6 pt-2'>
            <div className='text-center flex gap-4 flex-col border-b border-gray-200 w-[100%] pb-4'>
                <h3 className='text-gray-600 text-xs'>{category}</h3>
                <h2 className='text-gray-800 text-md font-bold cursor-pointer hover:text-[#C09578]'>{title}</h2>
            </div>
            
            <div className='text-center flex gap-4 flex-col pt-4'>
                <div className='flex gap-2'>
                    <p className='text-gray-800 line-through'>Rs. {actual_price}</p>
                    <p className='text-[#C09578] font-bold'>Rs. {sell_price}</p>
                </div>
                <div className='flex gap-2'>
                    <button className='bg-[#f1f1f1] hover:bg-[#C09578] p-2 text-lg cursor-pointer'><FaRegHeart /></button>
                    <button className='bg-[#f1f1f1] hover:bg-[#C09578] p-2 text-xs text-gray-600 cursor-pointer'>Add To Cart</button>
                </div>
            </div>            
        </div>
      </div>
    </>
  )
}
