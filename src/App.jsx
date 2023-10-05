import { useState } from 'react'
import './App.css'
import MovieCard from './components/MovieCard'
import Navbar from './components/Navbar'
import SearchBar from './components/SearchBar'

function App() {

  const [movies,setMovies]= useState([])
  const [searchValue,setSearchValue]=useState('')
  const [loading,setLoading] = useState(false)

  const fetchMoviesApi = async () =>{
    try {
      setLoading(true)
      const resp = await fetch(`https://omdbapi.com/?s=${searchValue}&apikey=a1de9591`)
      const respJson = await resp.json()
      setMovies(respJson.Search)
      setLoading(false)
    }
     catch (error) {
      setLoading(false)
    }
  }

  return (
 <>
   <Navbar/>
  <div className="bg">
    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} fetchMoviesApi={fetchMoviesApi}/>
   <MovieCard movies={movies} setMovies={setMovies} loading={loading}/>
  </div>
 </>
  )
}

export default App
