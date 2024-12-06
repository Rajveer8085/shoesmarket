import React, { useContext } from 'react'
import { MdRemoveShoppingCart } from 'react-icons/md'
import { AppContext } from '../store/AppContext'
import { Link } from 'react-router-dom'
import CartMessage from './CartMessage'

const Cart = () => {
  const { cart, DeleteCart, quantityHandler } = useContext(AppContext)
  const total = cart.reduce((total, item) => total + item.price * item.quantity, 0)
  return (
    <div className='text-center' cl="true">
      <div className="cart_main">
        {cart.length === 0 ? <CartMessage /> :
          <div className='cart'>
            <h1>Cart</h1>
            <div className="productlist">
              {cart.map((item) => (
                <div className="product" key={item.id}>
                    <img src={item.imgs} alt="" />
                  <div className='cart_imgSection'>
                    <h4>{item.name}</h4>
                  </div>
                  <h4>&#8377;{item.price}</h4>
                  <div className='quantitys'>
                    <h3 className='d-none'>
                      Quantity:-
                    </h3>
                  <h4>{item.quantity}</h4>
                  </div>
                  <div className='cart_handler'>

                  <button className='mx-2' onClick={() => quantityHandler(item.id, item.quantity + 1)}>+</button>
                  <button className='mx-2' onClick={() => quantityHandler(item.id, item.quantity - 1)}>-</button>
                  <button className='mx-2' onClick={() => DeleteCart(item)}><MdRemoveShoppingCart /></button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        }
        <div>

        </div>
      </div>
      <h3 className='Total'>Total : &#8377;{total}</h3>
      <div className='checkoutBTN'>

        <Link to={"/shoesmarket/cart/checkout"} className="checkout">
          process to checkout
        </Link>
      </div>
    </div>
  )
}

export default Cart