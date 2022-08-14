import React from 'react'
import minusLogo from '../assets/minus.svg'
import plusLogo from '../assets/plus.svg'

const LineItem = (props) => {
  return (
    <div className='product-container' data-count='0' data-price={props.price}>
      <img className='img-container' src={props.img} />
      <div className='product-info'>
        <div className='product-name'>{props.name}</div>
        <div className='product-control-container'>
          <div className='product-control'>
            <img src={minusLogo} className='App-logo' alt='logo' />
            <span className='product-count'></span>
            <img src={plusLogo} className='App-logo' alt='logo' />
          </div>
        </div>
        <div className='price'></div>
      </div>
    </div>
  )
}

export default LineItem