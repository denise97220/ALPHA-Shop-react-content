import React, { useState } from 'react'
import minusLogo from '../assets/minus.svg'
import plusLogo from '../assets/plus.svg'

const LineItem = (props) => {
  const [price, setPrice] = useState(0)
  const [count, setCount] = useState(0)
  const plusItemHandler = () => {
    setCount(count + 1)
  }

  const minusItemHandler = () => {
    if (count === 0) return
    setCount(count - 1)
  }

  return (
    <div className='product-container' data-count='0' data-price={props.price}>
      <img className='img-container' src={props.img} />
      <div className='product-info'>
        <div className='product-name'>{props.name}</div>
        <div className='product-control-container'>
          <div className='product-control'>
            <img src={minusLogo} className='App-logo' alt='logo' onClick={minusItemHandler} />
            <span className='product-count'>{count}</span>
            <img src={plusLogo} className='App-logo' alt='logo' onClick={plusItemHandler} />
          </div>
        </div>
        <div className='price'>{price}</div>
      </div>
    </div>
  )
}

export default LineItem
