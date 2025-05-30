import React, { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import axios from 'axios';

export default function Home() {

    const [bestSeller, setBestSeller] = useState([]);
    const [topRated, setTopRated] = useState([]);


    useEffect(() => {
        axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{
            params : {
                limit : 8,
                categories : 'mens-shoes,mens-shirts'
            }
        })
            .then((result) => {
                // console.log(result.data.data)
                setBestSeller(result.data.data)
            })
            .catch(() => {
                // Toast('Something Went Wrong')
            })
    }, [])


    useEffect(() => {
        axios.get(`https://wscubetech.co/ecommerce-api/products.php`,{
            params : {
                limit : 8,
                categories : 'furniture,tops,laptops'
            }
        })
            .then((result) => {
                // console.log(result.data.data)
                setTopRated(result.data.data)
            })
            .catch(() => {
                // Toast('Something Went Wrong')
            })
    }, [])


    return (
        <>
            <div className='container-fluid'>
                <div className='container'>
                    <div className='row text-center p-3'>
                        <h1>Best Seller</h1>
                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {/* <!-- Product 1 --> */}

                        {
                            bestSeller.map((v, i) => {
                                return (
                                    <ProductCard key={i} data={v} />
                                )

                            })
                        }

                    </div>

                </div>
                <div className='container'>
                    <div className='row text-center p-3'>
                        <h1>Top Rated</h1>
                    </div>
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {/* <!-- Product 1 --> */}

                        {
                            topRated.map((v, i) => {
                                return (
                                    <ProductCard key={i} data={v} />
                                )

                            })
                        }

                    </div>

                </div>
            </div>
        </>
    )
}
