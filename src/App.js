import React, { useState } from 'react'
import Header from './components/Layout/Header'
import Cart from './components/Cart/Cart'
import Footer from './components/Layout/Footer'
import StepProgress from './components/Step/StepProgress'
import StepForm1 from './components/Step/StepForm1'
import StepForm2 from './components/Step/StepForm2'
import StepForm3 from './components/Step/StepForm3'
import ProgressControl from './components/Step/ProgressControl'
import styles from './App.module.css'
import CartProvider from './store/CartProvider'

function App() {
  const [nowPage, setNowPage] = useState('address')

  const ClickHandler = (nowForm) => {
    setNowPage(nowForm)
  }
  return (
    <CartProvider>
      <Header />
      <main>
        <div className={styles['form-container']}>
          <StepProgress />
          <StepForm1 nowForm={nowPage} />
          <StepForm2 nowForm={nowPage} />
          <StepForm3 nowForm={nowPage} />
          <ProgressControl nowForm={nowPage} onClick={ClickHandler} />
        </div>
        <Cart />
      </main>
      <Footer />
    </CartProvider>
  )
}

export default App
