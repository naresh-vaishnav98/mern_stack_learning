import React, { useEffect, useState } from 'react'
import { RiEditCircleFill } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoMdDocument, IoMdAdd, IoIosSearch } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { FaFilter, FaRegSave } from "react-icons/fa";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { LuFilter, LuFilterX } from "react-icons/lu";
import axios from 'axios';
import { toast } from 'react-toastify';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/bootstrap-light-dark.css';

export default function CategoriesListing() {

    const [filterToggle, setFilterToggle] = useState(false);
    const [popupToggle, setPopupToggle] = useState(false);
    const [editCategory, setEditCategory] = useState(false);
    // let [getCategoryValue, setGetCategoryValue] = useState('');
    let [getSubCategory, setGetSubCategory] = useState([]);
    let [categories, setCategories] = useState([]);
    let [categoryID, setCategoryID] = useState('');
    let [checkedValues, setCheckedValues] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let [totalPages, setTotalPages] = useState(1);


    console.log(currentPage)

    var env = import.meta.env;

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
        if (editCategory) {
            setEditCategory(false);
        } else {
            setEditCategory(true);
        }

        if (popupToggle) {
            setPopupToggle(false);
        } else {
            setPopupToggle(true);
        }
    }


    const editCategoryy = (id) => {
        // console.log(id)
        setCategoryID(id);
        if (editCategory) {
            setPopupToggle(false);
            setEditCategory(false);
        } else {
            setPopupToggle(true);
            setEditCategory(true);
        }
    }


    var CategoryArray = [
        { mainCategory: 'Root Level', subCategory: 'Sofa' },
        { mainCategory: 'Root Level', subCategory: 'Living' },
        { mainCategory: 'Living', subCategory: 'Mirrors' },
        { mainCategory: 'Living', subCategory: 'Living Storage' },
        { mainCategory: 'Living', subCategory: 'Tables' },
        { mainCategory: 'Sofa', subCategory: 'Swing Jhula' },
        { mainCategory: 'Sofa', subCategory: 'Sofa sets' },
        { mainCategory: 'Sofa', subCategory: 'Sofa Cum Bed' },
    ];

    const categoryValue = async (event) => {
        var val = event.target.value;
        // setGetCategoryValue(val);
        if (val) {
            var data = CategoryArray.filter((v, i) => val === v.mainCategory);
            setGetSubCategory(data);
        }else{
            setGetSubCategory([]);
        }
    }
    // console.log(getSubCategory);


    useEffect(() => {
        axios.post(env.VITE_API_BASE_URL + '/categories/view',{page : currentPage})
            .then((result) => {
                setCategories(result.data._data);
                // setCurrentPage(result.data._pagination.current_page);
                setTotalPages(result.data._pagination.total_pages)
                // console.log(result.data._data)
            })
            .catch((error) => {
                toast.error('Something Went Wronggggg !!')
            })
    }, [popupToggle, editCategory, checkedValues,currentPage]);


    const createCategory = (event) => {
        event.preventDefault();
        // console.log(event.target.order.value)
        var data = {
            main_category: event.target.category.value,
            sub_category: event.target.subCategory.value,
            image: '',
            name: event.target.name.value,
            order: event.target.order.value
        }
        // console.log(data)
        axios.post(env.VITE_API_BASE_URL + '/categories/create', data)
            .then((result) => {
                // console.log(result.data)
                if (result.data._status == true) {
                    toast.success('Created Successfully !!')
                    setEditCategory(false);
                    setPopupToggle(false);
                } else {
                    toast.error(result.data._data[0]);
                    setEditCategory(false);
                    setPopupToggle(false);
                }

            })
            .catch((error) => {
                toast.error('Something Went Wrong !!')
                setEditCategory(false);
                setPopupToggle(false);
            })
    }


    const updateCategory = (event) => {
        event.preventDefault();
        // console.log(event.target.order.value)
        var data = {
            main_category: event.target.category.value,
            sub_category: event.target.subCategory.value,
            image: '',
            name: event.target.name.value,
            order: event.target.order.value
        }
        if (categoryID) {
            axios.put(env.VITE_API_BASE_URL + '/categories/update/' + categoryID, data)
                .then((result) => {
                    // console.log(result.data)
                    if (result.data._status == true) {
                        toast.success('Updated Successfully !!')
                        setEditCategory(false);
                        setPopupToggle(false);
                    } else {
                        toast.error(result.data._data[0]);
                        setEditCategory(false);
                        setPopupToggle(false);
                    }

                })
                .catch((error) => {
                    toast.error('Something Went Wrong !!')
                    setEditCategory(false);
                    setPopupToggle(false);
                })
        }
    }



    const getValue = (id) => {
        if (checkedValues.includes(id)) {
            var data = checkedValues.filter((v, i) => {
                if (v != id) {
                    return v;
                }
            })
            setCheckedValues(data);
        } else {
            setCheckedValues([...checkedValues, id]);
        }
    }

    const getAllValues = () => {
        if (checkedValues.length != categories.length) {
            setCheckedValues([]);
            var data = categories.map((v, i) => {
                return v._id;
            })
            setCheckedValues(data);
        } else {
            setCheckedValues([]);
        }

    }


    const changeStatus = () => {
        if (checkedValues.length > 0) {
            axios.put(env.VITE_API_BASE_URL + '/categories/change-status', {
                id: checkedValues
            })
                .then((result) => {
                    if (result.data._status == true) {
                        toast.success('Status Changed Successfully !!');
                        setCheckedValues([]);
                    } else {
                        toast.error(result.data._data[0]);
                    }

                })
                .catch((error) => {
                    toast.error('Something Went Wrong !!')
                })
        } else {
            toast.error('Please Select Records to Change Status !!')
        }
    }

    const deleteRecord = () => {
        if (confirm('Are You Sure You Want to Delete ??')) {
            if (checkedValues.length > 0) {
                axios.put(env.VITE_API_BASE_URL + '/categories/delete', {
                    id: checkedValues
                })
                    .then((result) => {
                        if (result.data._status == true) {
                            toast.success('Deleted Successfully !!');
                            setCheckedValues([]);
                        } else {
                            toast.error(result.data._data[0]);
                        }

                    })
                    .catch((error) => {
                        toast.error('Something Went Wrong !!')
                    })
            } else {
                toast.error('Please Select Records to Change Status !!')
            }
        }else{
            setCheckedValues([])
        }
    }


    // console.log(checkedValues);

    return (
        <>

            {
                popupToggle
                    ?
                    editCategory
                        ?
                        <div className='bg-black/50 w-screen z-10 h-screen'>
                            <div className='w-[600px] border border-1 rounded mx-auto fixed  inset-x-[500px] bg-white p-5'>
                                <div className='flex text-gray-700 justify-between'>
                                    <h4>Edit Category</h4>
                                    <button onClick={editPopupHideShow}><strong className='text-xl'>x</strong></button>

                                </div>
                                <form action="" className='py-5 text-gray-500' onSubmit={updateCategory}>
                                    <label htmlFor="">Select Category</label><br />
                                    <select name="category" id="" className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' onChange={(e) => categoryValue(e)}>
                                        <option value="">Select Category</option>
                                        <option value="Root Level">Root Level</option>
                                        <option value="Living">Living</option>
                                        <option value="Sofa">Sofa</option>
                                    </select>
                                    <label htmlFor="">Select Sub Category</label><br />
                                    <select name="subCategory" id="" className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5'>
                                        {getSubCategory && getSubCategory.length > 0 ? (
                                            getSubCategory.map((v, i) => (
                                                <option key={i} value={v.subCategory}>
                                                    {v.subCategory}
                                                </option>
                                            ))
                                        ) : (
                                            <option value="">Select Sub Category</option>
                                        )}
                                    </select>
                                    <label htmlFor="">Name</label><br />
                                    <input type="text" placeholder='Name' autoComplete='off' defaultValue='{v.name}' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='name' />
                                    <label htmlFor="">Order</label><br />
                                    <input type="text" placeholder='Order' autoComplete='off' defaultValue='{v.order}' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='order' />
                                    <div className='flex gap-2 justify-self-end mt-3'>
                                        <button className='rounded bg-gray-300 px-3 py-1' onClick={editPopupHideShow}>Close</button>
                                        <button className='flex gap-2 items-center rounded px-3 py-1 border bg-[#448cee] text-white' type='submit'><FaRegSave /> Update Category</button>
                                    </div>
                                </form >
                            </div>
                        </div>
                        :
                        <div className='bg-black/50 w-screen z-10 h-screen'>
                            <div className='w-[600px] border border-1 rounded mx-auto fixed z-10 inset-x-[500px] bg-white p-5'>
                                <div className='flex text-gray-700 justify-between'>
                                    <h4>Create Category</h4>
                                    <button onClick={popupHideShow}><strong className='text-xl'>x</strong></button>

                                </div>
                                <form action="" className='py-5 text-gray-500' onSubmit={createCategory} >
                                    <label htmlFor="">Select Category</label><br />
                                    <select name="category" id="" className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' onChange={(e) => categoryValue(e)}>
                                        <option value="">Select Category</option>
                                        <option value="Root Level">Root Level</option>
                                        <option value="Living">Living</option>
                                        <option value="Sofa">Sofa</option>
                                    </select>
                                    <label htmlFor="">Select Sub Category</label><br />
                                    <select name="subCategory" id="" className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5'>{getSubCategory && getSubCategory.length > 0 ? (
                                        getSubCategory.map((v, i) => (
                                            <option key={i} value={v.subCategory}>
                                                {v.subCategory}
                                            </option>
                                        ))
                                    ) : (
                                        <option value="">Select Sub Category</option>
                                    )}
                                    </select>
                                    <label htmlFor="">Name</label><br />
                                    <input type="text" placeholder='Name' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='name' />
                                    <label htmlFor="">Order</label><br />
                                    <input type="text" placeholder='Order' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='order' />
                                    <div className='flex gap-2 justify-self-end mt-3'>
                                        <button className='rounded bg-gray-300 px-3 py-1' onClick={popupHideShow}>Close</button>
                                        <button className='flex gap-2 items-center rounded px-3 py-1 border bg-[#448cee] text-white' type='submit'><FaRegSave /> Create Category</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    :
                    ''
            }





            <div className='mt-[40px] mx-3 flex justify-between'>
                <h2 className='text-2xl'>Categories Listing</h2>
                <div className='flex gap-3 me-5 text-white'>
                    {
                        filterToggle
                            ?
                            <button className='bg-[#478CEE] text-2xl p-2 rounded-[50%]' onClick={filterHideShow}>< LuFilterX /></button>
                            :
                            <button className='bg-[#478CEE] text-2xl p-2 rounded-[50%]' onClick={filterHideShow}><LuFilter /></button>
                    }

                    <button className='bg-[#478CEE] text-2xl p-2 rounded-[50%]' onClick={popupHideShow}><IoMdAdd /></button>
                </div>
            </div>

            {
                filterToggle
                    ?
                    <div className=' mt-[60px] border border-1 rounded p-5 mx-5'>
                        <h3 className='text-gray-600 mb-2'>FILTERS</h3>
                        <div>
                            <form action="" className='flex gap-5'>
                                <select name="categories" id="" className='border border-1 border-gray-300 rounded p-[5px] w-[24%]'>
                                    <option value="">Select Category</option>
                                    <option value="">Living</option>
                                    <option value="">Sofa</option>
                                </select>
                                <input type="text" placeholder='Name' className='border border-1 border-gray-300 rounded p-[5px] w-[24%]' />
                                <button className='flex items-center rounded bg-[#478CEE] text-white px-3 gap-2'><IoIosSearch /> Filter Category</button>
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
                            <FaArrowRightArrowLeft className='cursor-pointer' onClick={changeStatus} />
                            <MdDelete className='text-red-500 text-xl cursor-pointer' onClick={deleteRecord} />
                        </div>
                        <div className='flex p-1 gap-2 items-center border border-1 bg-white'>
                            <CgArrowsExchangeAltV className='text-2xl' />
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
                                        <input onClick={getAllValues} checked={checkedValues.length == categories.length ? 'checked' : ''}
                                            id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                                    </div>
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Category
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Main Category
                                </th>
                                <th scope="col" class="px-6 py-3 border border-1">
                                    Sub Category
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
                            {
                                categories.map((v, i) => {
                                    return (
                                        <tr class="bg-white border-b" key={i}>
                                            <td class="w-4 p-4 border border-slate-300">
                                                <div class="flex items-center">
                                                    <input onClick={() => getValue(v._id)}
                                                        checked={checkedValues.includes(v._id) ? 'checked' : ''}
                                                        id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                                {v.name}
                                            </td>
                                            <td scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                                {v.main_category}
                                            </td>
                                            <td scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                                {v.sub_category}
                                            </td>
                                            <td class="px-6 py-4 border border-slate-300">
                                                <input type="number" value={v.order} className='border border-1 border-gray-300 rounded p-2' />
                                            </td>
                                            <td class="px-6 py-4 border border-slate-300">
                                                {
                                                    v.status
                                                        ?
                                                        <button className='w-[70px] h-[30px] border border-1 bg-[#4DC36F] text-white rounded'>Active</button>
                                                        :
                                                        <button className='w-[90px] h-[30px] border border-1 bg-[#EA6B56] text-white rounded'>Inactive</button>
                                                }

                                            </td>
                                            <td class="px-6 py-4 border border-slate-300">
                                                <div className='flex'>
                                                    <RiEditCircleFill className='text-[#0199B8] w-[50px] h-[30px] cursor-pointer' onClick={() => editCategoryy(v._id)} />
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
                
                <div className='flex justify-between items-center mt-3 text-gray-500'>
                    <h4>Showing 1 to 3 of 3 entries</h4>
                    <ResponsivePagination
                        current={currentPage}
                        total={totalPages}
                        onPageChange={setCurrentPage}
                    />
                    
                </div>
            </div>
        </>
    )
}
