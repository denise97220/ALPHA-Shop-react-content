import React from 'react'
import logo from '../assets/logo.svg'
import searchLogo from '../assets/search.svg'
import cartLogo from '../assets/cart.svg'
import moonLogo from '../assets/moon.svg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header>
      <div className={styles.table}>
        <p className='table-item'>男款</p>
        <p className='table-item'>女款</p>
        <p className='table-item'>最新消息</p>
        <p className='table-item'>客製商品</p>
        <p className='table-item'>聯絡我們</p>
      </div>
      <div className={styles.logo}>
        <img src={logo} className='App-logo' alt='logo' />
      </div>
      <div className='button'>
        <img src={searchLogo} className='Search-logo' alt='search-logo' />
        <img src={cartLogo} className='Cart-logo' alt='cart-logo' />
        <img src={moonLogo} className='Moon-logo' alt='moon-logo' />
      </div>
    </header>
  )
}

export default Header