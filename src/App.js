import Header from './components/Layout/Header'
import Cart from './components/Cart/Cart'
import Footer from './components/Layout/Footer'
import StepContainer from './components/Step/StepContainer'
import styles from './App.module.css'
import CartProvider from './store/CartProvider'

function App() {
  return (
    <CartProvider>
      <Header />
      <main>
        <div className={styles['form-container']}>
          <StepContainer />
        </div>
        <Cart />
      </main>
      <Footer />
    </CartProvider>
  )
}

export default App
