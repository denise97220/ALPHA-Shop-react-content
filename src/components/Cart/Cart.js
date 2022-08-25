import React, { useState, useContext } from 'react'
import CartContext from '../../store/cart-context'
import minusLogo from '../assets/minus.svg'
import plusLogo from '../assets/plus.svg'

const Cart = () => {
  const cartCtx = useContext(CartContext)
  const items = cartCtx.item
  const [totalPrice, setTotalPrice] = useState(0)
  const [count, setCount] = useState(0)
  const plusItemHandler = (itemPrice) => {
    setCount(count + 1)
    setTotalPrice(totalPrice + itemPrice)
  }

  const minusItemHandler = (itemPrice) => {
    if (count === 0) return
    setCount(count - 1)
    setTotalPrice(totalPrice - itemPrice)
  }

  return (
    <section className='cart-container'>
      <h3 className='cart-title'>購物籃</h3>

      <section className='product-list' data-total-price='0'>
        {items.map((item) => (
          <div className='product-container' data-count='0' data-price={item.price}>
            <img className='img-container' src={item.img} />
            <div className='product-info'>
              <div className='product-name'>{item.name}</div>
              <div className='product-control-container'>
                <div className='product-control'>
                  <img src={minusLogo} className='App-logo' alt='logo' onClick={minusItemHandler(item.price)} />
                  <span className='product-count'>{count}</span>
                  <img src={plusLogo} className='App-logo' alt='logo' onClick={plusItemHandler(item.price)} />
                </div>
              </div>
              <div className='price'>{item.price}</div>
            </div>
          </div>
        ))}
      </section>

      <section className='cart-info shipping'>
        <div className='text'>運費</div>
        <div className='price'></div>
      </section>
      <section className='cart-info total'>
        <div className='text'>小計</div>
        <div className='price'>{totalPrice}</div>
      </section>
    </section>
  )
}

export default Cart
