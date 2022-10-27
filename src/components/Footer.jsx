import React from 'react'
import Logo from '../images/logo.png'
import styles from '../styles/Header.module.scss'

export const Footer = () => {
  return (
    <div className='container'>
      <nav className={styles.header}>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <ul>
          <li>Главная</li>
          <li>Смотреть Аниме</li>
          <li>Регистрация</li>
        </ul>
      </nav>  
    </div>
  )
}
