import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import Breadcum from './Breadcum'
import axios from 'axios'
import ProductCard from './ProductCard'
import { IoSearch } from "react-icons/io5";
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic-light-dark.css';
// import { Toast } from 'bootstrap/dist/js/bootstrap.bundle.min'

export default function ProductListing() {

    const [categories, setCategories] = useState([]);
    const [brands, setbrands] = useState([]);
    const [productListing, setproductListing] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [totalRecords, setTotalRecords] = useState(0);
    const [sorting, setSorting] = useState('');
    const [filterCat, setFilterCat] = useState([]);
    const [filterBrand, setFilterBrand] = useState([]);
    const [priceFrom, setPriceFrom] = useState('');
    const [priceTo, setPriceTo] = useState('');
    const [filterName, setFilterName] =  useState('');
    const [totalPages, setTotalPages] =  useState('');
    

    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((result) => {
                setCategories(result.data.data)
            })
            .catch(() => {
                // Toast('Something Went Wrong')
            })
    }, [])


    useEffect(() => {
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then((result) => {
                // console.log(result.data.data)
                setbrands(result.data.data)
            })
            .catch(() => {
                // Toast('Something Went Wrong')
            })
    }, [])


    // useEffect(() => {
    //     axios.get(`https://wscubetech.co/ecommerce-api/products.php?limit=20&page=${currentPage}`)
    //         .then((result) => {
    //             console.log(result.data.data)
    //             setproductListing(result.data.data)
    //         })
    //         .catch(() => {
    //             // Toast('Something Went Wrong')
    //         })
    // }, [currentPage])

    useEffect(() => {
        axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{
            params : {
                page : currentPage,
                limit : 15,
                sorting : sorting,
                name : filterName,
                price_from : priceFrom,
                price_to : priceTo,
                discount_from : '',
                discount_to : '',
                rating : '',
                brands : filterBrand.toString(),
                categories : filterCat.toString()
            }
        })
            .then((result) => {
                // console.log(result.data.data)
                setproductListing(result.data.data)
                setTotalRecords(result.data.total_records)
                setTotalPages(result.data.total_pages)
            })
            .catch(() => {
                // Toast('Something Went Wrong')
            })
    }, [currentPage,sorting,filterCat,priceFrom,priceTo,filterName,filterBrand])

    var sortProducts = (e) => {
        // console.log(e.target.value)
        setSorting(e.target.value)

    }


    var filterCategories = (slug) => {
        
        if(filterCat.includes(slug)){
            var data = filterCat.filter( (v) => {
                if(slug != v){
                    return v;
                }
            } )
            var data = [...data]
            setFilterCat(data);
            // console.log(data)
        } else {
            var data = [...filterCat, slug]
            setFilterCat(data);
            // console.log(data)
        }
    }

    var filterBrands = (slug) => {
        
        if(filterBrand.includes(slug)){
            var data = filterBrand.filter( (v) => {
                if(slug != v){
                    return v;
                }
            } )
            var data = [...data]
            setFilterBrand(data);
            // console.log(data)
        } else {
            var data = [...filterBrand, slug]
            setFilterBrand(data);
            // console.log(data)
        }
    }

    

    var clearAll = () => {
        setFilterCat([])
        setFilterBrand([])
        setPriceFrom('')
        setPriceTo('')
    }

    var filterPrice = (e) => {
        // console.log(e.target.value)
        setPriceFrom(0)
        setPriceTo(e.target.value);
    }

    var fromPrice = (e) => {
        // console.log(e.target.value)
        setPriceFrom(e.target.value)
    }
    var toPrice = (e) => {
        // console.log(e.target.value)
        setPriceTo(e.target.value)
    }

    var searchName = (e) => {
        setFilterName(e.target.value)
    }

    return (
        <>
            <Breadcum />
            <div class="container py-5">
                <div class="row">
                    {/* <!-- Filter Button (Mobile) --> */}
                    <div class="col-12 d-lg-none mb-3">
                        <button class="btn btn-outline-secondary w-100 d-flex justify-content-center align-items-center gap-2"
                            type="button"
                            data-bs-toggle="offcanvas"
                            data-bs-target="#filterSidebar">
                            <i class="fa fa-filter"></i> Filter Products
                        </button>
                    </div>

                    {/* <!-- Sidebar Filters --> */}
                    <div class="col-lg-3">
                        {/* <!-- Desktop Filters --> */}
                        <div class="card shadow-sm d-none d-lg-block">
                            <div class="card-body">
                                <div class="d-flex justify-content-between align-items-center mb-3">
                                    <h5 class="card-title mb-0">Filters</h5>
                                    <button class="btn btn-sm btn-link text-decoration-none p-0" onClick={clearAll}>Clear All</button>
                                </div>

                                {/* <!-- Categories Filter --> */}
                                <div class="mb-4 filter-cat">
                                    <h6 class="fw-bold mb-3">Categories</h6>
                                    {
                                        categories.map((v, i) => {
                                            return (
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" checked={filterCat.includes(v.slug)? 'checked':''} type="checkbox" id={v.slug} onClick={() => filterCategories(v.slug)} />
                                                    <label class="form-check-label" for={v.slug}>{v.slug}</label>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                                {/* <!-- Brands Filter --> */}
                                <div class="mb-4 filter-brands">
                                    <h6 class="fw-bold mb-3">Brands</h6>
                                    {
                                        brands.map((v, i) => {
                                            return (
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" checked={filterBrand.includes(v.slug)? 'checked':''} type="checkbox" id={v.slug} onClick={() => filterBrands(v.slug)} />
                                                    <label class="form-check-label" for={v.slug}>{v.slug}</label>
                                                </div>
                                            )
                                        })
                                    }

                                </div>

                                {/* <!-- Price Range Filter --> */}
                                <div class="mb-3">
                                    <h6 class="fw-bold mb-3">Price Range</h6>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>$0</span>
                                        <span>${
                                            priceTo ? priceTo : '1500'
                                            }</span>
                                    </div>
                                    <input type="range" class="form-range" min="0" max="1500" step="10" id="priceRange" onChange={filterPrice} />
                                    <div class="row g-2 mt-2">
                                        <div class="col-6">
                                            <div class="input-group input-group-sm">
                                                <span class="input-group-text">$</span>
                                                <input type="number" class="form-control" placeholder="Min" min="0" onKeyUp={fromPrice}/>
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group input-group-sm">
                                                <span class="input-group-text">$</span>
                                                <input type="number" class="form-control" placeholder="Max" min="0" onKeyUp={toPrice}/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Mobile Filters (Offcanvas) --> */}
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="filterSidebar">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title">Filters</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                {/* <!-- Categories Filter --> */}
                                <div class="mb-4">
                                    <h6 class="fw-bold mb-3">Categories</h6>
                                    {
                                        categories.map((v, i) => {
                                            return (
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" type="checkbox" id={v.slug} />
                                                    <label class="form-check-label" for={v.slug}>{v.slug}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                {/* <!-- Brands Filter --> */}
                                <div class="mb-4">
                                    <h6 class="fw-bold mb-3">Brands</h6>
                                    {
                                        brands.map((v, i) => {
                                            return (
                                                <div class="form-check mb-2">
                                                    <input class="form-check-input" type="checkbox" id={v.slug} />
                                                    <label class="form-check-label" for={v.slug}>{v.slug}</label>
                                                </div>
                                            )
                                        })
                                    }
                                </div>

                                {/* <!-- Price Range Filter --> */}
                                <div class="mb-4">
                                    <h6 class="fw-bold mb-3">Price Range</h6>
                                    <div class="d-flex justify-content-between mb-2">
                                        <span>$0</span>
                                        <span>$1500</span>
                                    </div>
                                    <input type="range" class="form-range" min="0" max="1500" step="10" id="mobilePriceRange" />
                                    <div class="row g-2 mt-2">
                                        <div class="col-6">
                                            <div class="input-group input-group-sm">
                                                <span class="input-group-text">$</span>
                                                <input type="number" class="form-control" placeholder="Min" min="0" />
                                            </div>
                                        </div>
                                        <div class="col-6">
                                            <div class="input-group input-group-sm">
                                                <span class="input-group-text">$</span>
                                                <input type="number" class="form-control" placeholder="Max" min="0" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button class="btn btn-primary w-100">Apply Filters</button>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Main Product Content --> */}
                    <div class="col-lg-9">
                        <div class="col-md-5 col-12 order-md-1 order-3 mt-2 mt-md-0">
                                                    <div class="input-group">
                                                        <span class="input-group-text bg-white border-end-0">
                                                            <IoSearch/>
                                                        </span>
                                                        <input type="text" class="form-control border-start-0" placeholder="Search products..." onKeyUp={searchName}/>
                                                    </div>
                                                </div>
                        {/* <!-- Top bar with results count and sorting --> */}
                        <div class="card shadow-sm mb-4">
                            <div class="card-body">
                                <div class="row align-items-center">
                                    <div class="col-md-6 mb-2 mb-md-0">
                                        <h6 class="mb-0">{totalRecords} Products</h6>
                                        <small class="text-muted">Filtered results</small>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="d-flex align-items-center justify-content-md-end">
                                            <i class="fa fa-sort text-muted me-2"></i>
                                            <span class="text-nowrap me-2 d-none d-sm-inline">Sort by:</span>
                                            <select class="form-select form-select-sm w-auto" onChange={sortProducts}>
                                                <option value="">Sort By -</option>
                                                <option value="1">A - Z</option>
                                                <option value="2">Z - A</option>
                                                <option value="3">Low - High</option>
                                                <option value="4">High - Low</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Product Grid --> */}
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-3 g-4">
                            {/* <!-- Product 1 --> */}

                            {
                                productListing.map((v,i) => {
                                    return(
                                        <ProductCard key={i} data={v}/>
                                    )
                                    
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <ResponsivePagination
                current={currentPage}
                total={totalPages}
                onPageChange={setCurrentPage}
            />
        </>
    )
}
