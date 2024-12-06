import React, { useContext,useEffect, useRef } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AppContext } from "../store/AppContext";
import { FaBarsStaggered, FaCircleUser } from "react-icons/fa6";
import Navlogo from "../assets/imgs/Store-Logo-removebg-preview.png"
const Navbar = () => {
  const { cart } = useContext(AppContext)
  const nav = useRef();
  const ClickHandler = () => {
    const navs = nav.current
    navs.classList.toggle("show_menu")
  }
  const Navbars = useRef(null);
  useEffect(() => {
    const handleScroll = () => {
      if (Navbars.current) {
        if (window.scrollY > 500) {
          Navbars.current.classList.add("Js_nav");
          nav.current.classList.add("jsnav_item");
        } else {
          Navbars.current.classList.remove("Js_nav");
          nav.current.classList.remove("jsnav_item")
          
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="navigation" ref={Navbars}>
      <header>
        <div className="logo">
          <img src={Navlogo} className="m-0 p-0" alt="not found" />
        </div>
        <ul className="nav_item" ref={nav}>
          <li>
            <Link to={"/shoesmarket"}>home</Link>
          </li>
          <li>
            <Link to={"/shoesmarket/Brands"}>Brands</Link>
          </li>
          <li>
            <Link to={"/shoesmarket/Products"}>Products</Link>
          </li>
          <li>
            <Link to={"/shoesmarket/Contact"}>Contact</Link>
          </li>
          <div className="top_icon mb-4">
            <Link to={"/shoesmarket/user"}>
              <FaCircleUser className="mx-3 text-primary fs-3" />
            </Link>

            <Link to={"/shoesmarket/cart"}>
              <span type="button" className="btn btn-primary position-relative">
                <FaShoppingCart />
                <span className="position-absolute top-0 text-center d-flex align-items-center start-100 translate-middle z-3 badge rounded-pill bg-danger">
                  {cart.length}
                </span>
              </span>
            </Link>
          </div>
        </ul>
        <div className="toggle" onClick={ClickHandler}>
          <FaBarsStaggered />
        </div>
      </header>
    </div>
  );
};

export default Navbar;
