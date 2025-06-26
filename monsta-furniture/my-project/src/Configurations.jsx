import React from 'react'
import { FaRegSave } from "react-icons/fa";

export default function Configurations() {
    return (
        <>
            <div className='mt-[40px] mx-3 flex justify-between'>
                <h2 className='text-2xl'>Configuration</h2>
                {/* <div className='flex gap-3 me-5 text-white'>
                    <button className='bg-[#478CEE] text-2xl p-2 rounded-[50%]'><FaFilter /></button>
                    {/* <button className='bg-[#478CEE] text-2xl p-2 rounded-[50%]'><IoMdAdd /></button> */}
                {/* </div> */} 
            </div>
            <div className=' mt-[60px] border border-1 rounded p-5 mx-5 font-xs text-gray-500'>
                <h4 className='font-xl text-gray-800'>Social Links Configuration</h4>
                <div className='flex flex-wrap gap-6'>
                    <div className='w-[32%]'>
                        <label htmlFor="">Facebook Link</label><br />
                        <input type="text" placeholder='https://facebook.com' className='border border-1 rounded w-[90%] p-1' />
                    </div>
                    <div className='w-[32%]'>
                        <label htmlFor="">Instagram Link</label><br />
                        <input type="text" placeholder='https://instagram.com' className='border border-1 rounded w-[90%] p-1' />
                    </div>
                    <div className='w-[32%]'>
                        <label htmlFor="">Twitter Link</label><br />
                        <input type="text" placeholder='https://twitter.com' className='border border-1 rounded w-[90%] p-1' />
                    </div>
                    <div className='w-[32%]'>
                        <label htmlFor="">Linkedin Link</label><br />
                        <input type="text" placeholder='https://linkedin.com' className='border border-1 rounded w-[90%] p-1' />
                    </div>
                    <div className='w-[32%]'>
                        <label htmlFor="">YouTube Link</label><br />
                        <input type="text" placeholder='https://youtube.com' className='border border-1 rounded w-[90%] p-1' />
                    </div>
                    <div className='w-[32%]'>
                        <label htmlFor="">Telegram Link</label><br />
                        <input type="text" placeholder='https://telegram.com' className='border border-1 rounded w-[90%] p-1' />
                    </div>
                </div>
            </div>
            <button className='flex items-center border border-1 p-3 mx-5 my-5 rounded-[5px] bg-[#5E9DEF] text-white gap-3'><FaRegSave />Update Configuration</button>
        </>
    )
}
