import React from 'react'
import { FaFilter,FaRegSave } from "react-icons/fa";

export default function EditSlider() {
  return (
    <>
      <div className='mt-[40px] mx-3'>
                  <h2 className='text-2xl'>Edit Slider</h2>
              </div>
      
          
              
            <div className=' mt-[60px] border border-1 rounded p-5 mx-5 flex gap-8 text-gray-600'>
              <div className='w-[30%]'>
                  <h3>Choose Image</h3>
                  <div className='border border-1 rounded w-[100%] h-[200px] mt-2'>
                      <img src="/monsta-slider.jpg" alt="Drag and Drop" className='w-[100%] h-[100%]' />
                  </div>
              </div>
              <div className='w-[70%] text-gray-600'>
                  <form action="#">
                      <label htmlFor="Title" >Title</label><br />
                      <input type="text" placeholder='Title' className='w-[98%] border border-1 rounded my-2 px-3 py-1'/>
                      <label htmlFor="">Order</label><br />
                      <input type="text" placeholder='Order' className='w-[98%] border border-1 rounded my-2 px-3 py-1' />
                      <button className='flex items-center justify-cenetr gap-2 rounded bg-[#3e8ef7] text-white text-sm p-1 px-2 mt-3'><FaRegSave/> Update Slider</button>
                  </form>
              </div>
            </div>
    </>
  )
}
