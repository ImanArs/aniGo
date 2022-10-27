import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import styles from '../styles/AnimePage.module.scss'

export const AnimeList = ({value}) => {
    const {animes} = useContext(ApiContext)

    const newArrPets = animes.data.filter(item => {
        return item.title_english.toLowerCase().includes(value.toLowerCase())
    })
    console.log(newArrPets);
    console.log(value);

  return (
    <div className='container'>
        <div className={styles.animeList_grid}>
        {
            newArrPets.map(item => {
                return(
                <div key={item.mal_id}>
                    <img src={item.images.jpg.image_url} alt={item.title_english} />
                    <p>{item.title_english}</p>
                </div>
                )
            })
        }
        </div>
    </div>
  )
}
