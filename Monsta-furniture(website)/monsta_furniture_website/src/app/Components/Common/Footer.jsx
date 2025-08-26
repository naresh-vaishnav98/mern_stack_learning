import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube, FaTelegramPlane } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <div className='w-[100%] border-t border-gray-200'>
                <div className='max-w-[1320px] h-[350px] mx-auto flex justify-between items-center text-sm border-b border-gray-200'>
                    <div className='w-[30%] h-[70%]'>
                        <h2 className='font-bold text-2xl pb-6 '>Contact us</h2>
                        <p className='text-gray-600 flex flex-col gap-3'>
                            <p>Address: Claritas est etiam processus dynamicus </p>
                            <p>Phone: 98745612330 </p>
                            <p>Email: furnitureinfo@gmail.com </p>
                        </p>
                        <div className='flex gap-3 items-center mt-4'>
                            <button className='rounded-[50%] border border-gray-300 p-2 hover:border-[#C09578]'><FaFacebookF className='w-[20px] h-[20px] text-sm text-gray-400 hover:text-[#C09578]' /></button>
                            <button className='rounded-[50%] border border-gray-300 p-2 hover:border-[#C09578]'><FaInstagram className='w-[20px] h-[20px] text-sm text-gray-400 hover:text-[#C09578]' /></button>
                            <button className='rounded-[50%] border border-gray-300 p-2 hover:border-[#C09578]'><FaTwitter className='w-[20px] h-[20px] text-sm text-gray-400 hover:text-[#C09578]' /></button>
                            <button className='rounded-[50%] border border-gray-300 p-2 hover:border-[#C09578]'><FaLinkedinIn className='w-[20px] h-[20px] text-sm text-gray-400 hover:text-[#C09578]' /></button>
                            <button className='rounded-[50%] border border-gray-300 p-2 hover:border-[#C09578]'><FaYoutube className='w-[20px] h-[20px] text-sm text-gray-400 hover:text-[#C09578]' /></button>
                            <button className='rounded-[50%] border border-gray-300 p-2 hover:border-[#C09578]'><FaTelegramPlane className='w-[20px] h-[20px] text-sm text-gray-400 hover:text-[#C09578]' /></button>
                        </div>
                    </div>
                    <div className='w-[20%] h-[70%]'>
                        <h2 className='font-bold text-2xl pb-6 '>Information</h2>
                        <ul className='flex flex-col gap-3 text-gray-600'>
                            <li className='hover:text-[#C09578] cursor-pointer'>About Us</li>
                            <li className='hover:text-[#C09578] cursor-pointer'>Contact Us</li>
                            <li className='hover:text-[#C09578] cursor-pointer'>Frequently Questions</li>
                        </ul>
                    </div>
                    <div className='w-[20%] h-[70%]'>
                        <h2 className='font-bold text-2xl pb-6 '>My Account</h2>
                        <ul className='flex flex-col gap-3 text-gray-600'>
                            <li className='hover:text-[#C09578] cursor-pointer'>My Dashboard</li>
                            <li className='hover:text-[#C09578] cursor-pointer'>Wishlist</li>
                            <li className='hover:text-[#C09578] cursor-pointer'>Cart</li>
                            <li className='hover:text-[#C09578] cursor-pointer'>Checkout</li>
                        </ul>
                    </div>
                    <div className='w-[30%] h-[70%]'>
                        <h2 className='font-bold text-2xl pb-6 '>Top Rated Products</h2>
                        <div className='flex flex-col gap-2 justify-center'>
                            <div className='h-[40%] flex gap-4 border-b border-gray-200 pb-3'>
                                <div className='w-[23%]'>
                                    <img src="/HomePageImages/footer-prod-1.jpg" alt="" className='w-[100%]' />
                                </div>
                                <div>
                                    <p className='pb-1'>3 Seater Sofa</p>
                                    <h3 className='text-lg'>Victoria Sheemash Wood Sofa Set</h3>
                                    <div className='flex gap-2 mt-4'>
                                        <p className='line-through text-gray-600'>Rs. 8000</p>
                                        <p className='text-[#C09578]'>Rs. 7000</p>
                                    </div>
                                </div>
                            </div>
                            <div className='h-[40%] flex gap-4 pb-3'>
                                <div className='w-[23%]'>
                                    <img src="/HomePageImages/footer-prod-1.jpg" alt="" className='w-[100%]' />
                                </div>
                                <div>
                                    <p className='pb-1'>3 Seater Sofa</p>
                                    <h3 className='text-lg'>Victoria Sheemash Wood Sofa Set</h3>
                                    <div className='flex gap-2 mt-4'>
                                        <p className='line-through text-gray-600'>Rs. 8000</p>
                                        <p className='text-[#C09578]'>Rs. 7000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='max-w-[1320px] h-[60px] mx-auto flex justify-center items-center text-sm border-b border-gray-200'>
                    <ul className='flex gap-10 text-gray-700 text-md'>
                        <li className='hover:text-[#C09578] cursor-pointer'>Home</li>
                        <li className='hover:text-[#C09578] cursor-pointer'>Online Store</li>
                        <li className='hover:text-[#C09578] cursor-pointer'>Privacy Policy</li>
                        <li className='hover:text-[#C09578] cursor-pointer'>Terms Of Use</li>
                    </ul>
                </div>
                <div className='max-w-[1320px] h-[153px] mx-auto flex flex-col gap-8 justify-center items-center text-sm'>
                    <div className='flex gap-2'>
                        <p>All Rights Reserved By Furniture</p>
                        <p className='border-s border-gray-600 ps-2'>© 2025</p>
                    </div>
                    <div>
                        <img src="/HomePageImages/footer-bottom.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}
