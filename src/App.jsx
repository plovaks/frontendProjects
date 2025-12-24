import {BrowserRouter, Routes, Route} from "react-router-dom"
import MovieList from "../components/pages/MoviesList"
import Movie from "../components/pages/Movie"
import CreateMovie from "../components/pages/CreateMovie"
 export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MovieList/>}/>
      <Route path="/films" element={<MovieList/>}/>
      <Route path="/films/:id" element={<Movie/>}/>
      <Route path="/create-movie" element={<CreateMovie/>}/>
    </Routes>
    </BrowserRouter>
  )
}


