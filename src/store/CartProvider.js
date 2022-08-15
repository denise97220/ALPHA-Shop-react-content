import CartContext from './cart-context'

const CartProvider = (props) => {
  const cartContext = {
    item: [
      {
        id: '1',
        name: '貓咪罐罐',
        img: 'https://picsum.photos/300/300?text=1',
        price: 100,
        quantity: 2
      },
      {
        id: '2',
        name: '貓咪干干',
        img: 'https://picsum.photos/300/300?text=2',
        price: 200,
        quantity: 1
      }
    ]
  }

  return <CartContext.Provider value={cartContext}>{props.children}</CartContext.Provider>
}

export default CartProvider
