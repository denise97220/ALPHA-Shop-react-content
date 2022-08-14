import React from 'react'
import rightArrow from '../assets/right-arrow.svg'
import leftArrow from '../assets/left-arrow.svg'

const ProgressControl = (props) => {
  const prevHandler = () => {
    if (props.nowForm === 'address') return
    if (props.nowForm === 'deliver') {
      props.onClick('address')
    } else if (props.nowForm === 'payment') {
      props.onClick('deliver')
    }
  }

  const nextHandler = () => {
    if (props.nowForm === 'payment') return
    if (props.nowForm === 'address') {
      props.onClick('deliver')
    } else if (props.nowForm === 'deliver') {
      props.onClick('payment')
    }
  }

  return (
    <section className='progress-control-container'>
      {props.nowForm === 'address' && <section className='button-group' data-phase='address'>
        <button className='next' onClick={nextHandler}>
          下一步
          <img src={rightArrow} className='App-logo' alt='logo' />
        </button>
      </section>}
      {props.nowForm === 'deliver' && <section className='button-group' data-phase='shipping'>
        <button className='prev' onClick={prevHandler}>
          <img src={leftArrow} className='App-logo' alt='logo' />
          上一步
        </button>
        <button className='next' onClick={nextHandler}>
          下一步
          <img src={rightArrow} className='App-logo' alt='logo' />
        </button>
      </section>}
      {props.nowForm === 'payment' && <section className='button-group' data-phase='credit-card'>
        <button className='prev' onClick={prevHandler}>
          <img src={leftArrow} className='App-logo' alt='logo' />
          上一步
        </button>
        <button className='next'>確認下單</button>
      </section>}
    </section>
  )
}

export default ProgressControl