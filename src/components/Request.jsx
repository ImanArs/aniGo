import axios, { AxiosError } from 'axios'
import React, {useState, useEffect} from 'react'

export const Request = () => {
  const [ animes, setAnimes ] = useState({
  pagination:{},
  data:[]
})
  const [ error, setError ] = useState('')
    
  const getData = async () => {
    try {
        const resp = await axios('https://api.jikan.moe/v4/anime')
        setAnimes(resp.data)
    } catch (error) {
        setError(AxiosError.name)
    }
  }
  useEffect(()=> {
    getData()
  },[])
  console.log(animes);
  return (
    <div>Request
      <h1>{error}</h1>
      {
        animes.data.map(item => {
          return(
            <div key={item.mal_id}>
              <img src={item.images.jpg.image_url} alt={item.title_english} />
              <p>{item.title_english}</p>
            </div>
          )
        })
      }
    </div>
  )
}
