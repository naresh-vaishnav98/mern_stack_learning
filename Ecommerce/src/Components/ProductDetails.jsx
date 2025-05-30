import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetails() {
    
    const params = useParams();

    const [multiImages, setMultiImages] = useState([]);
    const [mainImage, setMainImage] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [brand, setBrand] = useState('');
    const [stock, setStock] = useState('');
    // const [rating, setRating] = useState('');
    

    useEffect(() => {
        axios.get(`https://wscubetech.co/ecommerce-api/productdetails.php?id=${params.id}`)
        .then( (result) => {
            setMainImage(result.data.product.multiple_images[0])
            setMultiImages(result.data.product.multiple_images)
            setTitle(result.data.product.name)
            setPrice(result.data.product.price)
            setDescription(result.data.product.description)
            setBrand(result.data.product.brand)
            setStock(result.data.product.stock)
            // setRating(result.data.product.rating)

        } )
        .catch( () => {
            
        } )
    }, [])

    const changeImage = (i) => {
        setMainImage(i);
        // console.log(i);
    }

    // for(var i=0; i<rating; i++){
    //     console.log(rating);
    // }
    
    return (
        <>
            <div class="container-fluid mt-2 mb-3">
                <div class="row no-gutters">
                    <div class="col-md-5 pr-2">
                        <div class="card">
                            <div class="demo">
                                <div className='main-image'>
                                    <img src={mainImage} alt="" />
                                </div>
                                <hr/>
                                <ul id="lightSlider">
                                    {
                                        multiImages.map((v,i) => {
                                            return(
                                                <li data-thumb="https://i.imgur.com/KZpuufK.jpg" onClick={() =>changeImage(v)}> <img src={v}/> </li>
                                            )
                                        })
                                    }                                    
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-7">
                        <div class="card">
                            <div class="d-flex flex-row align-items-center">
                                <div class="p-ratings"> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> <i class="fa fa-star"></i> </div> <span class="ml-1">5.0</span>
                            </div>
                            <div class="about"> <span class="font-weight-bold">{title}</span>
                                <h4 class="font-weight-bold">${price}</h4>
                            </div>
                            <div class="buttons"> <button class="btn btn-outline-warning btn-long cart">Add to Cart</button> <button class="btn btn-warning btn-long buy">Buy it Now</button> <button class="btn btn-light wishlist"> <i class="fa fa-heart"></i> </button> </div>
                            <hr />
                            <div class="product-description">
                                <div class="mt-2"> <span class="font-weight-bold">Description</span>
                                    <p>{description}</p>
                                </div>
                                <div class="mt-2"> <span class="font-weight-bold">Brand : {brand}</span> </div>
                                <div class="mt-2"> <span class="font-weight-bold">Stock : {stock}</span> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
