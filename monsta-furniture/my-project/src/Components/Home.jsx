import React from 'react'
import { FiFileText } from "react-icons/fi";
import { FaRupeeSign } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <div className='container-fluid mx-auto'>
        <div className='row'>
          <div className='columns-1 w-[100%] p-[30px] text-[#37474f] text-[22px]'>Welcome! Admin</div>
          <div className='columns-4 justify-around flex flex-row w-[100%] h-[120px] gap-1'>
            <div className='bg-[#3e8ef7] flex  w-[23%] rounded p-5 box-border'>
              <div className='w-[80%] text-white box-border'>
                <h2 className='text-[30px]'>0</h2>
                <span className='text-[12px]'>TOTAL ORDERS</span>
              </div>
              <div className='w-[20%] text-[40px] text-gray-700 pt-[35px] ps-[25px]'>
                <FiFileText />
              </div>
            </div>
            <div className='bg-[#17b3a3] h-[100%] w-[23%] rounded p-5 box-border flex'>
              <div className='w-[80%] text-white box-border'>
                <h2 className='text-[30px]'>0</h2>
                <span className='text-[12px]'>TOTAL USERS</span>
              </div>
              <div className='w-[20%] text-[40px] text-gray-700 pt-[35px] ps-[25px]'>
                <FiFileText />
              </div>
            </div>
            <div className='bg-[#0bb2d4] h-[100%] w-[23%] rounded p-5 box-border flex'>
            <div className='w-[80%] text-white box-border'>
                <h2 className='text-[30px]'>&#8377;0</h2>
                <span className='text-[12px]'>TOTAL EARNINGS</span>
              </div>
              <div className='w-[20%] text-[40px] text-gray-700 pt-[35px] ps-[25px]'>
              <FaRupeeSign />
              </div>
            </div>
            <div className='bg-[#9463f7] h-[100%] w-[23%] rounded p-5 box-border flex'>
            <div className='w-[80%] text-white box-border'>
                <h2 className='text-[30px]'>0</h2>
                <span className='text-[12px]'>TOTAL PRODUCTS</span>
              </div>
              <div className='w-[20%] text-[40px] text-gray-700 pt-[35px] ps-[25px]'>
                <FiFileText />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
