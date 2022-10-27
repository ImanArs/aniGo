import React from 'react'
import { Link } from 'react-router-dom'
import Pochita from '../images/pochita.webp'
import styles from '../styles/MainPage.module.scss'

export const MainPage = () => {

  return (
    <div className='container' >
      <section className={styles.main_section}>
        <div className={styles.main_left}>
          <h1>Добро Пожаловать на сайт AniGO</h1>
          <p>Вот уже много лет японская анимация пользуется огромным успехом по всему миру, включая Россию. Эти ленты любят за яркий сюжет, оригинальную рисовку и неизменный накал эмоций.</p>
          <Link>
            <button>войти</button>
          </Link>
          <Link to='/anime'>
            <button>Смотреть список Аниме</button>
          </Link>
        </div>
        <div className={styles.main_right}>
          <div className={styles.main_right_overlay}><img src={Pochita} alt="" /></div>
        </div>
      </section>
      
    </div>
  )
}
