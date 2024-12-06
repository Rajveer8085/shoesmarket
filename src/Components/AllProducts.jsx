import React, { useContext } from 'react'
import { FaCartPlus } from "react-icons/fa";
import ProductRating from "./Rating";
import { productTotal } from './Product_dis'
import { AppContext } from '../store/AppContext';
import { Link } from 'react-router-dom';

const AllProducts = ({setCartAnime}) => {
    const {addtocart} = useContext(AppContext)

  return (
    <div className="products_list">
      <div className="container">
        <div className="row">
          <h1 className="heading_products">Endless-Step</h1>
        {productTotal.map((item)=>(

        <div key={item.id} className="col-md-4">
            <div className="products">
              <img src={item.imgs} alt="img not found" className="img-fluid" />
              <div className="product_name">
                <h4>{item.name}</h4>
                <h5>&#8377; {item.price}/-</h5>
                
                <p>"Comfortable and versatile sport shoes designed for everyday wear and athletic activities."</p>
                <ProductRating/>
                <p className="text-start my-2">{item.reviews} Reviews</p>
                <div className='d-flex'>
                <button onClick={()=>addtocart(item,setCartAnime)}>Add to Cart <FaCartPlus className="ms-2" /></button>
                <button >
                  <Link className="text-decoration-none text-secondary" to={"/shoesmarket/cart/checkout"}>
                  Buy Now <FaCartPlus className="ms-2" />
                  </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
    </div>
    </div>
  )
}

export default AllProducts