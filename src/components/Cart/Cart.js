import React, { useContext } from 'react'
import CartContext from '../../store/cart-context'
import LineItem from './LineItem'

const Cart = () => {
  const cartCtx = useContext(CartContext)
  const items = cartCtx.item
  // const ITEMS = [
  //   {
  //     id: '1',
  //     name: '貓咪罐罐',
  //     img: 'https://picsum.photos/300/300?text=1',
  //     price: 100,
  //     quantity: 2
  //   },
  //   {
  //     id: '2',
  //     name: '貓咪干干',
  //     img: 'https://picsum.photos/300/300?text=2',
  //     price: 200,
  //     quantity: 1
  //   }
  // ]

  return (
    <section className='cart-container'>
      <h3 className='cart-title'>購物籃</h3>

      <section className='product-list' data-total-price='0'>
        {items.map((item) => (
          <LineItem key={item.id} name={item.name} img={item.img} quantity={item.quantity} price={item.price} />
        ))}
      </section>

      <section className='cart-info shipping'>
        <div className='text'>運費</div>
        <div className='price'></div>
      </section>
      <section className='cart-info total'>
        <div className='text'>小計</div>
        <div className='price'></div>
      </section>
    </section>
  )
}

export default Cart
