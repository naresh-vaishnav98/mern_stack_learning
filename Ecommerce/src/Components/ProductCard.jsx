import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { commonContext } from '../ContextAPI/Context'

export default function ProductCard({data, key}) {

    const {cartItems, setCartItems} =  useContext(commonContext);

    var addToCart = (productInfo) => {

        const checkProduct = cartItems.filter( (v)=>{
            if(productInfo.id == v.id){
                return v;
            }
        })

        if(checkProduct.length >0 ){
            const cartData = cartItems.map( (v)=>{
                if(productInfo.id == v.id){
                    if(v.quantity < 3){
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

        } else {
            const info = {
                id : productInfo.id,
                name : productInfo.name,
                price : productInfo.price,
                image : productInfo.image,
                category_name : productInfo.category_name,
                description : productInfo.description,
                quantity : 1
            }
    
            // console.log(info);
    
            var finalData = [info, ...cartItems]
            setCartItems(finalData);
            localStorage.setItem('cartItems',JSON.stringify(finalData));
        }

        // console.log(productInfo);
        
    }

  return (
      <>
          <div class="col">
              <div class="card h-100 product-card">
                  <div class="position-relative">
                      <img src={data.image} class="card-img-top" alt="Ultra HD 4K Smart TV"/>
                          <span class="position-absolute top-0 start-0 badge bg-danger m-2">{(data.brand_name)?data.brand_name:''}</span>
                  </div>
                  <div class="card-body">
                    <Link to={`/product-details/${data.id}`}>
                     <h5 class="card-title">{data.name}</h5>
                    </Link>
                      
                      <p class="card-text text-muted small mb-0">{data.category_name}</p>
                      <div class="d-flex align-items-center mb-2">
                          <div class="text-warning me-1">
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star"></i>
                              <i class="fa fa-star-half-alt"></i>
                          </div>
                          <span class="text-muted small">4.5</span>
                      </div>
                      <div class="d-flex justify-content-between align-items-center">
                          <div>
                            {
                                (data.discount_percentage>0)
                                ?
                                    <>
                                        <span class="fs-5 fw-bold">${(data.price-((data.price/100)*data.discount_percentage)).toFixed(2)}</span>
                                        <span class="text-decoration-line-through text-muted ms-2">${data.price}</span>
                                    </>
                                :
                                <span class="fs-5 fw-bold">${data.price}</span>

                            }
                              
                          </div>
                          <button class="btn btn-sm btn-outline-primary" onClick={() => addToCart(data)}>
                              <i class="fa fa-shopping-cart"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      </>
  )
}
