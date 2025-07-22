'use client'
import React, { useState } from 'react'
import { IoIosSearch,IoMdCart,IoIosArrowDown } from "react-icons/io";
import { FaHeart } from "react-icons/fa";



export default function Header() {

    let [livingToggle, setLivingToggle] = useState(false);
    let [sofaToggle, setSofaToggle] = useState(false);
    let [pagesToggle, setPagesToggle] = useState(false);

    const livingDropdown = () => {
        var bool = !livingToggle;
        setLivingToggle(bool);
    }

    const sofaDropdown = () => {
        var bool = !sofaToggle;
        setSofaToggle(bool);
    }

    const pagesDropdown = () => {
        var bool = !pagesToggle;
        setPagesToggle(bool);
    }
    // console.log(livingToggle);
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
                <div className='cursor-pointer flex gap-5'>
                    <div className='border border-gray-300 h-[40px] w-[265px] flex justify-between items-center px-2'>
                        <input type="text" placeholder='Search Product...' className='hover:text-[#C09578]' />
                        <IoIosSearch className='text-xl'/>
                    </div>
                    <div className='cursor-pointer hover:text-[#C09578] border border-gray-300 rounded flex justify-center items-center px-3 text-xl'>
                        <button>
                            <FaHeart />
                        </button>
                    </div>
                    <div className='border border-gray-300 rounded flex justify-center items-center px-3 gap-2 text-lg relative hover:text-[#C09578]'>
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
                    <li className='hover:text-[#C09578] cursor-pointer'>Home</li>
                    <li className='flex gap-1 items-center hover:text-[#C09578] cursor-pointer' onMouseEnter={livingDropdown} onMouseLeave={livingDropdown}>Living <IoIosArrowDown /></li>
                    <li className='flex gap-1 items-center hover:text-[#C09578] cursor-pointer' onMouseEnter={sofaDropdown} onMouseLeave={sofaDropdown}>Sofa <IoIosArrowDown /></li>
                    <li className='flex gap-1 items-center hover:text-[#C09578] cursor-pointer' onMouseEnter={pagesDropdown} onMouseLeave={pagesDropdown}>Pages <IoIosArrowDown /></li>
                    <li className='hover:text-[#C09578] cursor-pointer'>Contact Us</li>
                </ul>
            </div>
        </div>
      </div>
      {
        livingToggle
        ?
        <div className='absolute top-[21%] z-10 left-[42%] bg-white p-8 flex gap-8'>
            <div>
                <h3 className='hover:text-[#C09578] pb-5 text-base font-bold text-gray-700'>TABLES</h3>
                <ul>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Side And End Tables</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Nest Of Tables</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Console Table</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Coffee Table Sets</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Coffee Tables</li>
                </ul>
            </div>
            <div>
                <h3 className='hover:text-[#C09578] pb-5 text-base font-bold text-gray-700'>LIVING STORAGE</h3>
                <ul>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Prayer Units</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Display Unit</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Shoe Racks</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Chest Of Drawers</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Cabinets And Sideboards</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Bookshelves</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>TV Units</li>
                </ul>
            </div>
            <div>
                <h3 className='hover:text-[#C09578] pb-5 text-base font-bold text-gray-700'>MIRRORS</h3>
                <ul>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Wooden Mirrors</li>
                </ul>
            </div>
        </div>
        :
        ''
      }

      {
        sofaToggle
        ?
        <div className='absolute top-[21%] z-10 left-[47%] bg-white p-8 flex gap-8'>
            <div>
                <h3 className='hover:text-[#C09578] pb-5 text-base font-bold text-gray-700'>SOFA CUM BED</h3>
                <ul>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Wooden Sofa Cum Bed</li>
                </ul>
            </div>
            <div>
                <h3 className='hover:text-[#C09578] pb-5 text-base font-bold text-gray-700'>SOFA SETS</h3>
                <ul>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>L Shape Sofa</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>1 Seater Sofa</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>2 Seater Sofa</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>3 Seater Sofa</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Wooden Sofa Sets</li>
                </ul>
            </div>
            <div>
                <h3 className='hover:text-[#C09578] pb-5 text-base font-bold text-gray-700'>SWING JHULA</h3>
                <ul>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Wooden Jhula</li>
                </ul>
            </div>
        </div>
        :
        ''
      }

      {
        pagesToggle
        ?
        <div className='absolute top-[21%] z-10 left-[52.5%] bg-white p-8 flex gap-8'>
            <div>
                <ul>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>About Us</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Cart</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Checkout</li>
                    <li className='hover:text-[#C09578] text-gray-400 text-sm pb-2'>Frequently Questions</li>
                </ul>
            </div>
        </div>
        :
        ''
      }
    </>
  )
}
