import React from 'react'
import { RiEditCircleFill } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoMdDocument, IoMdAdd } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { FaFilter } from "react-icons/fa";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";

export default function TestimonialsListing() {
    return (
        <>
            <div className='mt-[40px] mx-3 flex justify-between'>
                <h2 className='text-2xl'>Testimonials Listing</h2>
                <div className='flex gap-3 me-5 text-white'>
                    <button className='bg-[#478CEE] text-2xl p-2 rounded-[50%]'><FaFilter /></button>
                    <button className='bg-[#478CEE] text-2xl p-2 rounded-[50%]'><IoMdAdd /></button>
                </div>
            </div>

            <div className=' mt-[60px] border border-1 rounded p-5 mx-5'>
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
                        <div className='flex bg-[#F0F0F0] p-2 items-center gap-2'>
                            <FaArrowRightArrowLeft className='' />
                            <MdDelete className='text-red-500 text-xl ' />
                        </div>
                        <div className='flex p-1 gap-2 items-center border border-1 bg-white'>
                            <CgArrowsExchangeAltV className='text-2xl' />
                            <GrDocumentText className='hover:bg-gray-200' />
                            {/* <IoMdDocument className='text-xl hover:bg-gray-200' /> */}
                        </div>
                    </div>
                </div>


                <div class="relative overflow-x-auto shadow-md ">
                    <table class="w-full text-sm text-left rtl:text-right">
                        <thead class="text-xs text-white uppercase border border-1 bg-[#478CEE]">
                            <tr>
                                <th scope="col" class="p-4  border border-1">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Image
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Designation
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Rating
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Order
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className='text-gray-500 bg-white'>
                            <tr class="bg-white border-b">
                                <td class="w-4 p-4 border border-slate-300">
                                    <div class="flex items-center">
                                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                    </div>
                                </td>
                                <th scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                    <img src="#" alt="Image" />
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                    Name
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                    Designation
                                </th>
                                <th scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                    Rating
                                </th>
                                <td class="px-6 py-4 border border-slate-300">
                                    <input type="number" value='1' className='border border-1 border-gray-300 rounded p-2' />
                                </td>
                                <td class="px-6 py-4 border border-slate-300">
                                    <button className='w-[70px] h-[30px] border border-1 bg-[#4DC36F] text-white rounded'>Active</button>
                                </td>
                                <td class="px-6 py-4 border border-slate-300">
                                    <div className='flex'>
                                        <RiEditCircleFill className='text-[#0199B8] w-[50px] h-[30px]' />
                                    </div>
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
