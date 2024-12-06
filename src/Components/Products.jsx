import React, { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import Product_dis from "./Product_dis";
import ProductRating from "./Rating";
import { AppContext } from "../store/AppContext";
import { Link,  useLocation } from "react-router-dom";

const Products = ({setCartAnime}) => {
  const {addtocart} = useContext(AppContext);
  const location = useLocation()
  return ( 
    <div className="products_list">
      <div className="container">
        <div className="row">
          <h1 className="heading_products">Find Your Perfect Pair</h1>
        {Product_dis.map((item)=>(

        <div key={item.id} className="col-md-4">
            <div className="products">
              <img src={item.imgs} alt="img not found" className="img-fluid" />
              <div className="product_name">
                <h4>{item.name}</h4>
                <h5>&#8377; {item.price}/-</h5>
                
                <p>"Comfortable and versatile sport shoes designed for everyday wear and athletic activities."</p>
                <ProductRating/>
                <p className="text-start my-2">{item.reviews} Reviews</p>
                <div className="d-flex ">
                <button onClick={()=>addtocart(item,setCartAnime)}>Add to Cart <FaCartPlus className="ms-2" /></button>
                <button >
                  <Link className="text-decoration-none text-secondary" to={"cart/checkout"}>
                  Buy Now <FaCartPlus className="ms-2" />
                  </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
        </div>
        <Link className="view_all" to={"Products"}>view  All Products</Link>

    </div>
    </div>
  );
};

export default Products;
