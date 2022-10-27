import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './App.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer'
import { Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { AnimePage } from './pages/AnimePage';
import {ApiContext} from './context/ApiContext'

function App() {
  const [ animes, setAnimes ] = useState({
    pagination:{},
    data:[]
  })

    const [ error, setError ] = useState()
      
    const getData = async () => {
      try {
          const resp = await axios('https://api.jikan.moe/v4/anime')
          setAnimes(resp.data)
      } catch (error) {
          setError('Ошибка 404, старинцы не существует!')
      }
    }
    useEffect(()=> {
      getData()
    },[])
    console.log(animes);
  return (
    <div className="App">
      <ApiContext.Provider value={{animes, setAnimes}}>
        <Header />
          <Routes>
              <Route path='/' element={<MainPage />} />
              <Route path='/anime' element={<AnimePage />} />
          </Routes>
        <Footer />  
      </ApiContext.Provider>
    </div>
  );
}

export default App;
