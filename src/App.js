import Header from './components/Layout/Header'
import Cart from './components/Cart/Cart'
import Footer from './components/Layout/Footer'
import StepContainer from './components/Step/StepContainer'
import styles from './App.module.css'

function App() {
  return (
    <div className='App'>
      <Header />
      <main>
        <div className={styles['form-container']}>
          <StepContainer />
        </div>
        <Cart />
      </main>
      <Footer />
    </div>
  )
}

export default App
