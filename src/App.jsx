import React, { useState, createContext, useEffect } from 'react'
import './App.css';
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Search from './pages/Search';
import MovieInfo from './pages/MovieInfo';
import axios from 'axios';

export const AppContext = createContext()

function App() {
  const [search, setSearch] = useState('')
  const [movies, setMovies] = useState([])
  const [searchText, setSearchText] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  async function getMovies() {
    const { data } = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=a1d98b4f`)
    const moviesData = data.Search
    setMovies(moviesData)
    setIsLoading(false)
    console.log(moviesData)
  }

  return (
    <Router>
      <div className="App">
        <AppContext.Provider value={{getMovies, search, setSearch, getMovies, movies, setMovies, searchText, setSearchText, isLoading, setIsLoading}} >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<Search />} />
            <Route path ='/search/:id' element={<MovieInfo/>} />
          </Routes>
        </AppContext.Provider>
      </div>
    </Router>
  );
}

export default App;
