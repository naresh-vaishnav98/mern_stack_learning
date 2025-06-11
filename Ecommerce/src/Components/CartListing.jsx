import React, { useContext, useEffect, useState } from 'react'
import { commonContext } from '../ContextAPI/Context'
import { Link } from 'react-router-dom';

export default function CartListing() {

    let { cartItems, setCartItems } = useContext(commonContext);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect( ()=>{
        var sum = 0;
        cartItems.forEach( (v) => {
            sum += v.price*v.quantity;
        });
        setTotalAmount(sum);

    },[cartItems])

    const updateCart = (id,type)=>{
        if(type == 'decrease'){
            const cartData = cartItems.map( (v)=>{
                if(id == v.id){
                    if(v.quantity > 1){
                        v.quantity--;
                        return v;
                    }else{
                        return v;
                    }
                    
                }else{
                    return v;
                }
            })
            var finalData = [...cartData]
            setCartItems(finalData);
            localStorage.setItem('cartItems',JSON.stringify(finalData));
        }else{
            const cartData = cartItems.map( (v)=>{
                if(id == v.id){
                    if(v.quantity < 10){
                        v.quantity++;
                        return v;
                    }else{
                        return v;
                    }
                    
                }else{
                    return v;
                }
            })
            var finalData = [...cartData]
            setCartItems(finalData);
            localStorage.setItem('cartItems',JSON.stringify(finalData));
        }
    }

    const cartDelete = (id)=>{
        // console.log(id);
        if(confirm('Are you sure you want to delete ??')){
            var finalData = cartItems.filter((v)=>{
                if(id != v.id){
                    return v;
                }
            })
            const cartData = [...finalData]
                setCartItems(cartData);
                localStorage.setItem('cartItems',JSON.stringify(cartData));
        }
    }

    return (
        <>
            <div className='container-fluid p-5'>
                <div className='container'>
                    <div className='row'>
                        <div class="col-sm-12 col-md-12">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Description</th>
                                        <th>Quantity</th>
                                        <th class="text-center">Price</th>
                                        <th> Total </th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        cartItems.length>0
                                            ?
                                            cartItems.map((v) => {
                                                // console.log(v.id)
                                                return (
                                                    <tr>
                                                        <td class="col-sm-8 col-md-3">
                                                            <div class="media">
                                                                <a class="thumbnail pull-left" href="#"> <img class="media-object thumb-img" src={v.image} width={150}/> </a>
                                                                <div class="media-body">
                                                                    <h4 class="media-heading"><Link to={`/product-details/${v.id}`} className='text-decoration-none text-black'>{v.name}</Link></h4>
                                                                    <h5 class="media-heading"> Category :  {v.category_name}</h5>
                                                                    
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td class="col-md-4 text-left"><strong class="label label-danger">{v.description??'N/A'}</strong></td>
                                                        <td class="text-center d-flex justify-content-between" >
                                                            <button onClick={()=>updateCart(v.id,'decrease')}>-</button>
                                                            <div>
                                                                {v.quantity}
                                                            </div>
                                                            <button onClick={()=>updateCart(v.id,'increase')}>+</button>
                                                        </td>
                                                        <td class="col-sm-1 col-md-1 text-center"><strong>${v.price}</strong></td>
                                                        <td class="col-sm-1 col-md-1 text-center"><strong>${v.price*v.quantity}</strong></td>
                                                        <td class="col-sm-1 col-md-1">
                                                            <button type="button" class="btn btn-danger" onClick={()=>cartDelete(v.id)}>
                                                                Remove
                                                            </button></td>
                                                    </tr>
                                                )
                                            })
                                            :
                                            ""
                                    }




                                    <tr>
                                        <td className='col-1 text-center'><h5>Subtotal</h5></td>
                                        <td class="text-right"><h5><strong>$999.99</strong></h5></td>
                                    </tr>
                                    <tr>
                                        <td className='col-1 text-center'><h3>Total</h3></td>
                                        <td class="text-right"><h3><strong>${totalAmount}</strong></h3></td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
