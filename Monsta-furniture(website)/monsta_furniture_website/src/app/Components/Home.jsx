'use client';
import React, { useState } from 'react'
import { FaGlobeAmericas } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";


export default function Home() {


  let [bannerToggle, setBannerToggle] = useState(true);

  const toggleBannerr = (v) => {

    if (v == 2) {
      setBannerToggle(false);
    } else {
      setBannerToggle(true);
    }

  }

  return (
    <>
      <div className='w-screen relative'>
        {
          bannerToggle
            ?
            <img src="/HomePageImages/homeBanner1.jpg" alt="Home Banner" />
            :
            <img src="/HomePageImages/homeBanner2.jpg" alt="Home Banner" />
        }

        <div className='flex items-center gap-2 absolute bottom-8 left-[50%]'>

          {bannerToggle
            ?
            <>
              <button className='rounded-[50%] w-[15px] h-[15px] bg-[#C09578] cursor-pointer' onClick={() => toggleBannerr(1)}></button>
              <button className='rounded-[50%] w-[10px] h-[10px] bg-white cursor-pointer' onClick={() => toggleBannerr(2)}></button>
            </>
            :
            <>
              <button className='rounded-[50%] w-[10px] h-[10px] bg-white cursor-pointer' onClick={() => toggleBannerr(1)}></button>
              <button className='rounded-[50%] w-[15px] h-[15px] bg-[#C09578] cursor-pointer' onClick={() => toggleBannerr(2)}></button>
            </>
          }


        </div>
      </div>

      <div className='w-screen border-b border-gray-200'>
        <div className='w-[1320px] mx-auto flex justify-center items-center gap-6 py-10'>
          <div className='w-[33%]  overflow-hidden relative'>
            <img src="/HomePageImages/yellowchair.webp" alt="" className='w-[100%] hover:scale-110 duration-500' />
            <div className=' p-8 absolute top-0 left-0 hover:bg-black-100'>
              <h3 className='text-sm'>Design Creative</h3>
              <h2 className='text-2xl font-bold'>Chair Collection</h2>
            </div>
          </div>
          <div className='w-[33%] overflow-hidden relative'>
            <img src="/HomePageImages/redchair.webp" alt="" className='w-[100%] hover:scale-110 duration-500' />
            <div className=' p-8 absolute top-0 left-0 hover:bg-black-100'>
              <h3 className='text-sm'>Bestselling Products</h3>
              <h2 className='text-2xl font-bold'>Chair Collection</h2>
            </div>
          </div>
          <div className='w-[33%] overflow-hidden relative'>
            <img src="/HomePageImages/yellowchair.webp" alt="" className='w-[100%] hover:scale-110 duration-500' />
            <div className=' p-8 absolute top-0 left-0 hover:bg-black-100'>
              <h3 className='text-sm'>Onsale Products </h3>
              <h2 className='text-2xl font-bold'>Chair Collection</h2>
            </div>
          </div>
        </div>
      </div>
      

          


      <div className='w-screen bg-[#F8F9F9] p-15'>
        <div className='w-[1320px] mx-auto flex justify-between'>
          <div className='flex flex-col gap-4 justify-center items-center w-[30%]'>
            <div className='border border-2 border-gray-800 text-gray-500 text-xl rounded-[50%] p-7 hover:text-[#C09578] hover:border-[#C09578]'>
              <FaGlobeAmericas />
            </div>
            <h3 className='text-2xl text-gray-800 font-bold'>Free Shipping</h3>
            <h4 className='text-gray-500 text-md'>Free Shipping on All Order</h4>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center w-[30%]'>
            <div className='border border-2 border-gray-800 text-gray-500 text-2xl rounded-[50%] p-7 hover:text-[#C09578] hover:border-[#C09578]'>
              <IoCheckmarkDoneCircleOutline  />
            </div>
            <h3 className='text-2xl text-gray-800 font-bold'>Money return</h3>
            <h4 className='text-gray-500 text-md'>Back Guarantee Unde 7 Days</h4>
          </div>
          <div className='flex flex-col gap-4 justify-center items-center w-[30%]'>
            <div className='border border-2 border-gray-800 text-gray-500 text-2xl rounded-[50%] p-7 hover:text-[#C09578] hover:border-[#C09578]'>
              <IoMdTime  />
            </div>
            <h3 className='text-2xl text-gray-800 font-bold'>Online Support</h3>
            <h4 className='text-gray-500 text-md'>Support Online 24 hours a Day</h4>
          </div>
        </div>
      </div>

      <div className='w-screen py-10'>
        <div className='w-[1320px] mx-auto'>
          <h2 className='text-center mx-auto text-2xl font-bold'>What Our Customers Say ?</h2>
          <div className='w-[75%] text-center mx-auto text-gray-600 leading-7 my-6'>
            <p>These Guys have been absolutely outstanding. Perfect Themes and the best of all that you have many options to choose! Best Support team ever! Very fast responding! Thank you very much! I highly recommend this theme and people!</p>
          </div>
          <div className='w-[10%] mx-auto flex flex-col gap-3'>
            <div className='w-[95%] mx-auto rounded-[50%]'>
              <img src="/HomePageImages/kathyyoung.jpg" alt="" className='mx-auto' />
            </div>
            <h2 className='uppercase text-center font-bold text-lg text-gray-700'>Kathy Young</h2>
            <h3 className='text-gray-500 text-sm text-center'>CEO of SunPark</h3>
            <p className='text-gray-500 text-sm text-center'>stars</p>
          </div>
        </div>
        <div className='w-[1320px] mx-auto flex gap-3 my-8 justify-center items-center'>
          <div className='w-[10px] h-[10px] rounded-[50%] bg-[#C09578]'></div>
          <div className='w-[10px] h-[10px] rounded-[50%] bg-[#C09578]'></div>
          <div className='w-[10px] h-[10px] rounded-[50%] bg-[#C09578]'></div>
        </div>
      </div>


      <div className='w-screen bg-[#F8F9F9] flex flex-col gap-8 items-center justify-center py-[5%]'>
        <div className='text-center flex flex-col gap-3 items-center justify-center'>
          <h3 className='font-bold text-3xl'>Our Newsletter</h3>
          <p>Get E-mail updates about our latest shop and special offers.</p>
        </div>
        <div className='w-[40%] flex justify-center'>
          <input type="text" placeholder='Email Address...' className='rounded border border-gray-300 p-2 px-3 w-[65%]' />
          <button className='bg-[#C09578] rounded p-2 px-3 text-white font-bold w-[25%]'>Subscribe</button>
        </div>
      </div>
    </>
  )
}
