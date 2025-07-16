import React from 'react'
import { IoIosSearch,IoMdCart,IoIosArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";



export default function Header() {
  return (
    <>
      <div className='w-screen'>
        <div className='border-b border-gray-200'>
            <div className='max-w-[1320px] h-[40px] mx-auto flex justify-between items-center text-sm'>
                <div>Contact us 24/7 : +91-98745612330 / furnitureinfo@gmail.com</div>
                <div className='hover:text-[#C09578] cursor-pointer'>Login/Register</div>
            </div>
        </div>
        <div className='border-b border-gray-200'>
            <div className='max-w-[1320px] h-[87px] mx-auto flex justify-between items-center text-sm'>
                <div className='border border-2'>
                    <img src="/HomePageImages/logo.png" alt="" className='w-[150px] h-[40px]' />
                </div>
                <div className='hover:text-[#C09578] cursor-pointer flex gap-5'>
                    <div className='border border-gray-300 h-[40px] w-[265px] flex justify-between items-center px-2'>
                        <input type="text" placeholder='Search Product...'  />
                        <IoIosSearch className='text-xl'/>
                    </div>
                    <div className='cursor-pointer border border-gray-300 rounded flex justify-center items-center px-3 text-xl'>
                        <button>
                            <FaHeart />
                        </button>
                    </div>
                    <div className='border border-gray-300 rounded flex justify-center items-center px-3 gap-2 text-lg relative'>
                        <button className='rounded-[50%] w-[20px] h-[20px] bg-[#C09578] text-white text-xs absolute top-[10px] left-[-10px]'>1</button>
                        <IoMdCart/>
                        <div className='flex gap-1 justify-center items-center border-s border-gray-300 ps-2 font-bold text-sm'>Rs. 6000 
                            <IoIosArrowDown />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='border-b border-gray-200'>
            <div className='max-w-[1320px] h-[65px] mx-auto flex justify-center items-center text-sm'>
                <ul className='uppercase flex gap-10 text-gray-600 font-semibold text-sm'>
                    <li className='hover:text-[#C09578]'>Home</li>
                    <li className='flex gap-1 items-center hover:text-[#C09578]'>Living <IoIosArrowDown /></li>
                    <li className='flex gap-1 items-center hover:text-[#C09578]'>Sofa <IoIosArrowDown /></li>
                    <li className='flex gap-1 items-center hover:text-[#C09578]'>Pages <IoIosArrowDown /></li>
                    <li className='hover:text-[#C09578]'>Contact Us</li>
                </ul>
            </div>
        </div>
      </div>
    </>
  )
}
