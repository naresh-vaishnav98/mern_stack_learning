import React, { useEffect, useState } from 'react'
import { RiEditCircleFill } from "react-icons/ri";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { IoMdDocument, IoMdAdd, IoIosSearch } from "react-icons/io";
import { GrDocumentText } from "react-icons/gr";
import { FaFilter, FaRegSave } from "react-icons/fa";
import { CgArrowsExchangeAltV } from "react-icons/cg";
import { CiImageOn } from "react-icons/ci";
import { LuFilter, LuFilterX } from "react-icons/lu";
import axios from 'axios';
import $ from 'jquery';
import 'dropify/dist/js/dropify.min.js';
import 'dropify/dist/css/dropify.min.css';
import { toast } from 'react-toastify';
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/bootstrap-light-dark.css';

export default function TestimonialsListing() {

    const [filterToggle, setFilterToggle] = useState(false);
    const [popupToggle, setPopupToggle] = useState(false);
    const [popupToggleEdit, setPopupToggleEdit] = useState(false);

    const [editTestimonial, setEditTestimonial] = useState(false);

    let [testimonials, setTestimonials] = useState([]);
    let [image_path, setImage_path] = useState('');
    let [testimonialID, setTestimonialID] = useState('');
    let [imageURL, setImageURL] = useState('');
    let [searchName, setSearchName] = useState('');
    let [checkedValues ,setCheckedValues] = useState([]);
    let [currentPage, setCurrentPage] = useState(1);
    let [totalPages, setTotalPages] = useState(1);
    

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
        if (editTestimonial) {
            setEditTestimonial(false);
        } else {
            setEditTestimonial(true);
        }

        if (popupToggle) {
            setPopupToggle(false);
        } else {
            setPopupToggle(true);
        }
        if (popupToggleEdit) {
            setPopupToggleEdit(false);
            setImageURL('');
        } else {
            setPopupToggleEdit(true);
        }
    }

    // console.log(imageURL);
    const editTestimonials = (id) => {
        if (editTestimonial) {
            setPopupToggle(false);
            setPopupToggleEdit(false);
            setEditTestimonial(false);
        } else {
            setPopupToggle(true);
            setPopupToggleEdit(true);
            setEditTestimonial(true);
        }
        setTestimonialID(id);

        axios.post(env.VITE_API_BASE_URL + '/testimonials/details/' + id)
            .then((result) => {
                setImageURL(image_path + '/' + result.data._data.image);
            })
            .catch((error) => {
                toast.error('Something Went Wrong !!')
            })
    }

    // useEffect( () => {
    //     const dropifyElement = $('#image');

    //     if(dropifyElement.data('dropifyEdit')){
    //         dropifyElement.data('dropifyEdit').destroy();
    //         dropifyElement.removeData('dropifyEdit');
    //     }

    //     dropifyElement.replaceWith(
    //         `<input type="file" accept="image/*" id="image" className="dropifyEdit" data-default-file=${imageURL} src=${imageURL}/>`
    //     );

    //     $('#image').on('change', function (event) {
    //         if(event.target.file.length > 0){
    //             setValue('image',event.target.files[0]);
    //         }
    //     });
    // },[imageURL] );

    useEffect(() => {
        $('.dropify').dropify({
            messages: {
                'default': 'Drag and drop a file here or click',
                'replace': 'Drag and drop or click to replace',
                'remove': 'Remove',
                'error': 'Ooops, something wrong happended.'
            }
        });
    }, [popupToggle]);

    useEffect(() => {
        if (imageURL) {
            $('.dropifyEdit').dropify({
                messages: {
                    'default': 'Drag and drop a file here or click',
                    'replace': 'Drag and drop or click to replace',
                    'remove': 'Remove',
                    'error': 'Ooops, something wrong happended.'
                }
            });
        }
    }, [imageURL])


    useEffect(() => {
        axios.post(env.VITE_API_BASE_URL + '/testimonials/view',{name : searchName, page : currentPage})
            .then((result) => {
                setTestimonials(result.data._data);
                setTotalPages(result.data._pagination.total_pages);
                setImage_path(result.data._image_path);
            })
            .catch((error) => {
                toast.error('Something Went Wronggggg !!')
            })
    }, [popupToggle,searchName,currentPage,checkedValues]);

    // console.log(image_path)



    const createTestimonial = (e) => {
        e.preventDefault();
        // var CreateColorr = {
        //     name: e.target.name.value,
        //     order: e.target.order.value
        // }
        // console.log('hjfghjcv')

        if (!testimonialID) {
            // console.log('hujfjhhj')
            axios.post(env.VITE_API_BASE_URL+'/testimonials/create',e.target)
                .then((result) => {
                    // console.log(result.data)
                    if (result.data._status == true) {
                        toast.success('Created Successfully !!')
                        setEditTestimonial(false);
                        setPopupToggle(false);
                    } else {
                        toast.error(result.data._data[0]);
                    }

                })
                .catch((error) => {
                    toast.error('Something Went Wronggggg !!')
                })
        }



    }

    const filterSearch = (event) => {
        setSearchName(event.target.value);
    }


    
    const getValue = (id) => {
        if (checkedValues.includes(id)) {
            var data = checkedValues.filter((v, i) => {
                if (v != id) {
                    return v;
                }
            })
            // console.log(data)
            setCheckedValues(data);
        } else {
            var data = [...checkedValues, id];
            // console.log(data);
            setCheckedValues(data);
        }

    }



    const getAllTestimonials = () => {

        if (checkedValues.length == testimonials.length) {
            setCheckedValues([]);
        } else {
            var data = [];
            setCheckedValues([]);
            testimonials.forEach((v, i) => {
                data.push(v._id);

            })
            // console.log(data)
            setCheckedValues([...data]);
        }
    }



    const changeStatus = () => {
        if (checkedValues.length > 0) {
            axios.put(env.VITE_API_BASE_URL+'/testimonials/change-status', {
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
        }else{
            toast.error('Please Select Records to Change Status !!')
        }
    }

    const deleteRecord = () => {
        if(confirm('Are You Sure You Want To Delete Selected Record ??')){
            if (checkedValues.length > 0) {
                axios.put(env.VITE_API_BASE_URL+'/testimonials/delete', {
                    id: checkedValues
                })
                    .then((result) => {
                        if (result.data._status == true) {
                            toast.success('Records Deleted Successfully !!');
                            setCheckedValues([]);
                        } else {
                            toast.error(result.data._data[0]);
                        }

                    })
                    .catch((error) => {
                        toast.error('Something Went Wrong !!')
                    })
            }else{
                toast.error('Please Select Records to Delete !!')
            }
        }else{
            setCheckedValues([]);
        }
    }


    const updateTestimonial = (event) => {
        event.preventDefault();
        // var data = {
        //     name: event.target.name.value,
        //     order: event.target.order.value,
        //     rating: event.target.rating.value,
        //     designation: event.target.designation.value,
        //     message: event.target.message.value,
        //     // image: event.target.image.src
        // }
        // console.log(event.target.image.value);

        if (testimonialID) {
            console.log(event.target);
            axios.put(env.VITE_API_BASE_URL + '/testimonials/update/' + testimonialID, event.target)
                .then((result) => {
                    if (result.data._status == true) {
                        toast.success('Updated Successfully !!')
                        setEditTestimonial(false);
                        setPopupToggle(false);
                        // setColorId('');
                    } else {
                        toast.error(result.data._data[0])
                        setPopupToggle(false);
                    }
                    // console.log(result);
                    ;
                })
                .catch((error) => {
                    toast.error('Something Went Wrong !!')
                    setPopupToggle(false);
                })
        }
    }

    // console.log(imageURL)



    return (
        <>

            {
                popupToggle
                    ?
                    editTestimonial
                        ?
                        <div className='bg-black/50 w-screen z-10 h-screen'>
                            <div className='w-[600px] border border-1 rounded mx-auto fixed  inset-x-[500px] bg-white p-5'>
                                <div className='flex text-gray-700 justify-between'>
                                    <h4>Edit Testimonial</h4>
                                    <button onClick={editPopupHideShow}><strong className='text-xl'>x</strong></button>

                                </div>

                                {
                                    testimonials.map((v, i) => {
                                        if (v._id == testimonialID) {
                                            return (
                                                <>
                                                    <form action="" className='py-5 text-gray-500' onSubmit={updateTestimonial}>
                                                        <div className='flex justify-between'>
                                                            <div className='w-[48%]'>
                                                                <label htmlFor="">Name</label><br />
                                                                <input type="text" placeholder='Name' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='name' defaultValue={v.name} />
                                                                <label htmlFor="">Rating</label><br />
                                                                <input type="text" placeholder='Rating' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='rating' defaultValue={v.rating} />
                                                                <input type="file" class="dropifyEdit" data-default-file={imageURL} name='image' id='image' />
                                                            </div>
                                                            <div className='w-[48%]'>
                                                                <label htmlFor="">Designation</label><br />
                                                                <input type="text" placeholder='Designation' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='designation' defaultValue={v.designation} />
                                                                <label htmlFor="">Order</label><br />
                                                                <input type="text" placeholder='Order' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='order' defaultValue={v.order} />
                                                                <label htmlFor="">Message</label><br />
                                                                <textarea name="message" id="" rows="6" placeholder='Message' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5 resize-none' defaultValue={v.message}></textarea>
                                                            </div>
                                                        </div>
                                                        <div className='flex gap-2 justify-self-end mt-3'>
                                                            <button className='rounded bg-gray-300 px-3 py-1' onClick={editPopupHideShow}>Close</button>
                                                            <button className='flex gap-2 items-center rounded px-3 py-1 border bg-[#448cee] text-white' type='submit'><FaRegSave /> Update Testimonial</button>
                                                        </div>
                                                    </form >
                                                </>
                                            )
                                        }

                                    })

                                }




                            </div>
                        </div>
                        :
                        <div className='bg-black/50 w-screen z-10 h-screen'>
                            <div className='w-[600px] border border-1 rounded mx-auto fixed z-10 inset-x-[500px] bg-white p-5'>
                                <div className='flex text-gray-700 justify-between'>
                                    <h4>Create Testimonial</h4>
                                    <button onClick={popupHideShow}><strong className='text-xl'>x</strong></button>

                                </div>
                                <form action="" className='py-5 text-gray-500 ' onSubmit={createTestimonial}>
                                    <div className='flex justify-between'>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">Name</label><br />
                                            <input type="text" placeholder='Name' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='name' />
                                            <label htmlFor="">Rating</label><br />
                                            <input type="text" placeholder='Rating' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='rating' />
                                            <input type="file" class="dropify" name='image' />
                                        </div>
                                        <div className='w-[48%]'>
                                            <label htmlFor="">Designation</label><br />
                                            <input type="text" placeholder='Designation' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='designation' />
                                            <label htmlFor="">Order</label><br />
                                            <input type="text" placeholder='Order' autoComplete='off' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5' name='order' />
                                            <label htmlFor="">Message</label><br />
                                            <textarea name="message" id="" rows="6" placeholder='Message' className='w-[100%] border border-1 border-gray-300 rounded p-1 mb-5 resize-none'></textarea>
                                        </div>
                                    </div>


                                    <div className='flex gap-2 justify-self-end mt-3'>
                                        <button className='rounded bg-gray-300 px-3 py-1' onClick={popupHideShow}>Close</button>
                                        <button className='flex gap-2 items-center rounded px-3 py-1 border bg-[#448cee] text-white' type='submit'><FaRegSave /> Create Testimonial</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    :
                    ''
            }



            <div className='mt-[40px] mx-3 flex justify-between'>
                <h2 className='text-2xl'>Testimonials Listing</h2>
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
                                <input type="text" placeholder='Name' className='border border-1 border-gray-300 rounded p-[5px] w-[24%]' onKeyUp={filterSearch}/>
                                <button className='flex items-center rounded bg-[#478CEE] text-white px-3 gap-2'><IoIosSearch /> Filter Testimonial</button>
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
                            <FaArrowRightArrowLeft className='cursor-pointer' onClick={changeStatus}/>
                            <MdDelete className='text-red-500 text-xl cursor-pointer ' onClick={deleteRecord}/>
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
                                        <input onClick={getAllTestimonials} checked={checkedValues.length == testimonials.length ? 'checked' : ''} id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
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
                            {
                                testimonials.map((v, i) => {
                                    return (
                                        <tr class="bg-white border-b" key={i}>
                                            <td class="w-4 p-4 border border-slate-300">
                                                <div class="flex items-center">
                                                    <input id="checkbox-table-search-1"
                                                    onClick={() => getValue(v._id)} checked={checkedValues.includes(v._id) ? 'checked' : ''}
                                                    type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                                <img src={image_path + '/' + v.image} alt="Image" className='w-[80px] h-[80px]' />
                                            </td>
                                            <td scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                                {v.name}
                                            </td>
                                            <td scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                                {v.designation}
                                            </td>
                                            <td scope="row" class="px-6 py-4 font-medium border border-slate-300 whitespace-nowrap">
                                                {v.rating}
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
                                                    <RiEditCircleFill className='text-[#0199B8] w-[50px] h-[30px] cursor-pointer' onClick={() => editTestimonials(v._id)} />
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
