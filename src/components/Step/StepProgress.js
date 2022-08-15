import React from 'react'
import completeIcon from '../assets/pg-complete.svg'

const StepProgress = () => {
  return (
    <>
      <h2 className='register-title'>結帳</h2>
      <section className='progress-container'>
        <span className='progress-group' data-phase='address'>
          <span className='progress-icon'>
            <span className='text'>1</span>
            <img src={completeIcon} className='App-logo' alt='logo' />
          </span>
          <span className='progress-label'>寄送地址</span>
        </span>
        <span className='progress-bar' data-order='1'></span>
        <span className='progress-group' data-phase='shipping'>
          <span className='progress-icon'>
            <span className='text'>2</span>
            <img src={completeIcon} className='App-logo' alt='logo' />
          </span>
          <span className='progress-label'>運送方式</span>
        </span>
        <span className='progress-bar' data-order='2'></span>
        <span className='progress-group' data-phase='credit-card'>
          <span className='progress-icon'>
            <span className='text'>3</span>
            <img src={completeIcon} className='App-logo' alt='logo' />
          </span>
          <span className='progress-label'>付款資訊</span>
        </span>
      </section>
    </>
  )
}

export default StepProgress
