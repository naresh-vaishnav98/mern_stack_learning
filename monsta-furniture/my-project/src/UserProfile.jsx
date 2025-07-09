import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { GrDocumentText } from "react-icons/gr";
import { IoMdDocument, IoMdAdd, IoIosSearch } from "react-icons/io";

export default function UserProfile() {
    return (
        <>
            <div className='flex border border-1 rounded mt-[60px] h-[250px] me-10 ms-5'>
                <div className='bg-[url("/profilebg.png")] bg-cover w-[32%]'>
                    <div className='bg-black/50 w-[100%] h-[100%] flex items-center'>
                        <div className='mx-auto w-[40%] h-[60%] flex flex-col gap-2 justify-center items-center text-white'>
                            <div className='rounded-[50%] w-[40%] h-[55%] mx-auto overflow-hidden bg-[green]'>
                                <img src="/monsta-Logo.png" alt="Profile-Image" />

                            </div>
                            <div className='flex items-center gap-1 text-lg'>
                                <MdOutlineMail /> info@gmail.com
                            </div>

                            <p>Created:</p>

                        </div>

                    </div>
                </div>
                <div className='w-[32%] py-6 px-10 text-gray-700 font-semibold'>Billing Info</div>
                <div className='w-[32%] py-6 px-10 text-gray-700 font-semibold'>Shipping Info</div>
            </div>


            <div className=' mt-[60px] border border-1 rounded p-5 mx-5'>
                <div className='border-b mb-5'>
                    <div className='border-b-2 border-blue-400 w-[100px] flex justify-center text-blue-500 p-3'>
                        Order
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className=''>
                        <div className='flex items-center pb-5 ps-1'>
                            <div className='flex items-center gap-3'>
                                <h4 className='font-xs text-gray-500'>Show</h4>
                                <select className='w-[50px] h-[30px] border border-1 border-gray-300 rounded shadow focus:shadow-[#0199B8]'>
                                    <option></option>
                                    <option>25</option>
                                    <option>35</option>
                                    <option>40</option>
                                    <option>All</option>
                                </select>
                                <h4 className=' text-gray-500'>Entries</h4>
                            </div>
                            <div className='flex ms-8 items-center gap-3' >
                                <h4 className=' text-gray-500'>Search</h4>
                                <input type='text' className='w-[180px] h-[30px] border border-1' />
                            </div>
                        </div>
                    </div>
                    <div className=' flex items-center rounded px-3'>
                        
                        <div className='flex p-2 gap-2 items-center border border-1 bg-white'>
                            <GrDocumentText className='hover:bg-gray-200' />
                            <IoMdDocument className='text-xl hover:bg-gray-200' />
                        </div>
                    </div>
                </div>


                <div class="relative overflow-x-auto shadow-md ">
                    <table class="w-full text-sm text-left rtl:text-right">
                        <thead class="text-xs text-white uppercase border border-1 bg-[#478CEE]">
                            <tr>
                                
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Order Info
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    User Info
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Price Info
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Order Status
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-500 bg-white'>
                            <tr class="bg-white border-b">
                                
                                <th scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4 border border-slate-300">
                                    Silver
                                </td>
                                <td class="px-6 py-4 border border-slate-300">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 border border-slate-300">
                                    <button className='w-[70px] h-[30px] border border-1 bg-[yellow] text-blacck rounded'>pending</button>
                                </td>
                                <td class="px-6 py-4 border border-slate-300">
                                    {/* <RiEditCircleFill className='text-[#0199B8] w-[50px] h-[30px]' /> */}
                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='flex justify-between items-center mt-3 text-gray-500'>
                    <h4>Showing 1 to 3 of 3 entries</h4>
                    <div>
                        <button className='border border-1 p-1 rounded'>Previous</button>
                        <button className='border border-1 p-1 bg-[#478CEE] text-white px-3'>1</button>
                        <button className='border border-1 p-1 rounded'>Next</button>
                    </div>
                </div>
            </div>
        </>
    )
}
