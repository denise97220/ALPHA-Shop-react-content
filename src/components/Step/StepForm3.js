import React from 'react'

const StepForm3 = ({ nowForm }) => {
  const payment = (
    <form className='' data-phase='credit-card'>
      <h3 className='form-title'>付款資訊</h3>
      <section className='form-body '>
        <div className=''>
          <div className='input-group input-w-lg-4 input-w-sm-full'>
            <div className='input-label'>持卡人姓名</div>
            <input type='text' placeholder='John Doe' />
          </div>
        </div>
        <div className=''>
          <div className='input-group input-w-lg-4 input-w-sm-full'>
            <div className='input-label'>卡號</div>
            <input type='text' placeholder='1111 2222 3333 4444' />
          </div>
        </div>
        <div className=''>
          <div className='input-group input-w-lg-3 input-w-sm-s3'>
            <div className='input-label'>有效期限</div>
            <input type='text' placeholder='MM/YY' />
          </div>
          <div className='input-group input-w-lg-3 input-w-sm-s3'>
            <div className='input-label'>CVC / CCV</div>
            <input type='text' placeholder='123' />
          </div>
        </div>
      </section>
    </form>
  )
  return <>{nowForm === 'payment' && payment}</>
}

export default StepForm3
