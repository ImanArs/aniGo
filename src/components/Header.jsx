import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import styles from '../styles/Header.module.scss'

export const Header = () => {
  return (
    <div className='container'>
      <nav className={styles.header_navigation}>
        <div className={styles.header}>
          <Link to='/'>
            <div>
              <img src={Logo} alt="logo" />
            </div>
          </Link>
          <ul>
            <li>Главная</li>
            <li>Смотреть Аниме</li>
            <li>Регистрация</li>
          </ul>
        </div>
      </nav>  
    </div>
  )
}
