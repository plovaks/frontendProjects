import {BrowserRouter, Routes, Route} from "react-router-dom"
import MovieList from "../components/pages/MoviesList"
import Movie from "../components/pages/Movie"
 export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path="/films" element={<MovieList/>}/>
      <Route path="/films/:id" element={<Movie/>}/>
    </Routes>
    </BrowserRouter>
  )
}


