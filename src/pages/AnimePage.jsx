import React, {useState} from 'react'
import { AnimeList } from '../components/AnimeList';
import styles from '../styles/AnimePage.module.scss'
export const AnimePage = () => {
  const [value, setValue] = useState(' ')
  return (
    <div className='container'>
        <section className={styles.animePage_section}>
                <h2>Ищите вам по вкусу</h2>
            <div>
                <input 
                  type="text"
                  value={value}
                  onChange={event => setValue(event.target.value)}
                />
            </div>
            <div className='container'>
              <AnimeList value={value} />
            </div>
        </section>
    </div>
  )
}
