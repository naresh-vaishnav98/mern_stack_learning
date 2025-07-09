import React, { useState } from 'react'
import { RiEditCircleFill } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoMdDocument, IoMdAdd, IoIosSearch } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { FaFilter,FaRegSave } from "react-icons/fa";





export default function Admin() {

    const [filterToggle, setFilterToggle] = useState(false);
    const [popupToggle, setPopupToggle] = useState(false);

    const [editAdminn, setEditAdminn] = useState(false);



    const filterHideShow = () => {
        if (filterToggle) {
            setFilterToggle(false);
        } else {
            setFilterToggle(true);
        }
    }

    const popupHideShow = () => {
        if (popupToggle) {
            setPopupToggle(false);
        } else {
            setPopupToggle(true);
        }
    }


    const editPopupHideShow = () => {
        if (editAdminn) {
            setEditAdminn(false);
        } else {
            setEditAdminn(true);
        }

        if (popupToggle) {
            setPopupToggle(false);
        } else {
            setPopupToggle(true);
        }
    }


    const editAdmin = () => {
        if (editAdminn) {
            setPopupToggle(false);
            setEditAdminn(false);
        } else {
            setPopupToggle(true);
            setEditAdminn(true);
        }
    }

    return (
        <>

            {
               popupToggle
               ?
               editAdminn
               ?
               <div className='bg-black/50 w-screen z-10 h-screen'>
                <div className='w-[600px] border border-1 rounded mx-auto fixed  inset-x-[500px] bg-white p-5'>
                    <div className='flex text-gray-700 justify-between'>
                        <h4>Edit Admin</h4>
                        <button onClick={editPopupHideShow}><strong className='text-xl'>x</strong></button>
                        
                    </div>
                    <form action="" className='py-5 text-gray-500'>
                        <label htmlFor="">Name</label><br />
                        <input type="text" placeholder='Name'  className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5'/>
                        <label htmlFor="">Email Address</label><br />
                        <input type="text" placeholder='Email Address'  className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5'/>
                        <label htmlFor="">Mobile Number</label><br />
                        <input type="text" placeholder='Mobile Number'  className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5'/>
                        <div className='flex gap-2 justify-self-end mt-3'>
                            <button className='rounded bg-gray-300 px-3 py-1'  onClick={editPopupHideShow}>Close</button>
                            <button className='flex gap-2 items-center rounded px-3 py-1 border bg-[#448cee] text-white'><FaRegSave /> Update Admin</button>
                        </div>
                        
                    </form>
                </div>
               </div>
               :
               <div className='bg-black/50 w-screen z-10 h-screen'>
                <div className='w-[600px] border border-1 rounded mx-auto fixed z-10 inset-x-[500px] bg-white p-5'>
                    <div className='flex text-gray-700 justify-between'>
                        <h4>Create Admin</h4>
                        <button onClick={popupHideShow}><strong className='text-xl'>x</strong></button>
                        
                    </div>
                    <form action="" className='py-5 text-gray-500'>
                        <label htmlFor="">Name</label><br />
                        <input type="text" placeholder='Name'  className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5'/>
                        <label htmlFor="">Email Address</label><br />
                        <input type="text" placeholder='Email Address'  className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5'/>
                        <label htmlFor="">Mobile Number</label><br />
                        <input type="text" placeholder='Mobile Number'  className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5'/>
                        <div className='flex gap-2 justify-self-end mt-3'>
                            <button className='rounded bg-gray-300 px-3 py-1'  onClick={popupHideShow}>Close</button>
                            <button className='flex gap-2 items-center rounded px-3 py-1 border bg-[#448cee] text-white'><FaRegSave /> Create Admin</button>
                        </div>
                        
                    </form>
                </div>
               </div>
               :
               ''
            }        


            <div className='mt-[40px] mx-3 flex justify-between'>
                <h2 className='text-2xl'>Admin Listing</h2>
                <div className='flex gap-3 me-5 text-white'>
                    <button className='bg-[#478CEE] text-2xl p-2 rounded-[50%]' onClick={filterHideShow}><FaFilter /></button>
                    <button className='bg-[#478CEE] text-2xl p-2 rounded-[50%]' onClick={popupHideShow} ><IoMdAdd /></button>
                </div>
            </div>

            {
                filterToggle
                    ?
                    <div className=' mt-[60px] border border-1 rounded p-5 mx-5'>
                        <h3 className='text-gray-600 mb-2'>FILTERS</h3>
                        <div>
                            <form action="" className='flex gap-5'>
                                <input type="text" placeholder='Name' className='border border-1 border-gray-300 rounded p-[5px] w-[24%]' />
                                <input type="text" placeholder='Email Address' className='border border-1 border-gray-300 rounded p-[5px] w-[24%]' />
                                <input type="text" placeholder='Mobile Number' className='border border-1 border-gray-300 rounded p-[5px] w-[24%]' />
                                <button className='flex items-center rounded bg-[#478CEE] text-white px-3 gap-2'><IoIosSearch /> Filter Admins</button>
                                <button className='flex items-center rounded bg-[#478CEE] text-white px-3'>Clear</button>
                            </form>

                        </div>
                    </div>
                    :
                    ''
            }



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
                                <th scope="col" class="p-4  border border-1">
                                    <div class="flex items-center">
                                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Email ID
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Mobile Number
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
                                    Apple MacBook Pro 17"
                                </th>
                                <td class="px-6 py-4 border border-slate-300">
                                    Silver
                                </td>
                                <td class="px-6 py-4 border border-slate-300">
                                    Laptop
                                </td>
                                <td class="px-6 py-4 border border-slate-300">
                                    <button className='w-[70px] h-[30px] border border-1 bg-[#4DC36F] text-white rounded'>Active</button>
                                </td>
                                <td class="px-6 py-4 border border-slate-300">
                                    <RiEditCircleFill className='text-[#0199B8] w-[50px] h-[30px] cursor-pointer' onClick={editAdmin}/>
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
