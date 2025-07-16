'use client';
import React, { useState } from 'react'

export default function Home() {


    let [bannerToggle , setBannerToggle] = useState(true);

    const toggleBannerr = (v) => {

        if(v == 2){
            setBannerToggle(false);
        }else{
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
           
           { bannerToggle
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
      
      <div className='w-screen bg-[#F8F9F9] flex flex-col gap-8 items-center justify-center py-[5%]'>
        <div className='text-center flex flex-col gap-3 items-center justify-center'>
            <h3 className='font-bold text-3xl'>Our Newsletter</h3>
            <p>Get E-mail updates about our latest shop and special offers.</p>
        </div>
        <div className='w-[40%] flex justify-center'>
            <input type="text" placeholder='Email Address...' className='rounded border border-gray-300 p-2 px-3 w-[65%]'/>
            <button className='bg-[#C09578] rounded p-2 px-3 text-white font-bold w-[25%]'>Subscribe</button>
        </div>
      </div>
    </>
  )
}
