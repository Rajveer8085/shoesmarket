import React, { useReducer, useState } from "react";
import "./app.css";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import DataProvider, { AppContext } from "./store/AppContext";
import Duplicat from "./Components/Duplicat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllProducts from "./Components/AllProducts";
import Footer from "./Components/Footer";
import Checkout from "./Components/Checkout";
import OrderDone from "./Components/OrderDone";
import AuthForm from "./Components/Login";
import UserInfo from "./Components/UserInfo";
import PopularBrand from "./Components/Popular_brand";
import ContactPage from "./Components/ContactPage";
import CartAnimation from "./Components/Cart_animation";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [Emailname, setEmailname] = useState();

  const [done, setdone] = useState(true);
  const [show, setShow] = useState(true); //login page distruction
  const [CartAnime,setCartAnime] = useState(false)

  // setdafault
  setInterval(() => {
    setCartAnime(false)
  }, 2000);
  return (
    <>
     <DataProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
        }}
      >
        {show ? (
          <AuthForm setShow={setShow} setEmailname={setEmailname} />
        ) : 
        <div className={''}>
          <Navbar />
          {CartAnime && <CartAnimation />}
          <ScrollToTop />
          <Routes>
            <Route path="/shoesmarket/user" element={<UserInfo Emailname={Emailname} />} />
            <Route path="/shoesmarket" element={<Duplicat setCartAnime={setCartAnime} />} />
            <Route path="/shoesmarket/Brands" element={<PopularBrand />} />
            <Route path="/shoesmarket/cart" element={<Cart />} />
            <Route path="/shoesmarket/Contact" element={<ContactPage />} />
            <Route path="/shoesmarket/Products" element={<AllProducts setCartAnime={setCartAnime} />} />
            <Route path="/shoesmarket/Products/cart/checkout" element={<Checkout />} />
            <Route
              path="/shoesmarket/cart/checkout"
              element={done ? <Checkout setdone={setdone} /> : <OrderDone />}
            />
          </Routes>
          <Footer />
        </div>
}
      </BrowserRouter >
    </DataProvider>
    </>
  )
}

export default App
