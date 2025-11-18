import MovieCard from "../MovieCard";
import {useState, useEffect} from "react"

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export default function MovieList(){

    const [moviesData, setMoviesData] = useState([]);
    const [likedMovies, setLikedMovies] = useState({});

    // состояния для фильтров
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        async function fetchMovies(){
            try {
                const res = await fetch(`${API_URL}/movie?page=70&limit=20`, {
                    headers:{
                        'X-API-KEY': API_KEY
                    }
                });

                if (!res.ok){
                    throw new Error(`Ошибка: ${res.status}`)
                }

                const data = await res.json();
                setMoviesData(data.docs);
            }

            catch(error){
                  console.error('Ошибка при получении данных:', error);
            }
        }

        fetchMovies();
    }, []);

    const handleToggleLike = (movieId) => {
    setLikedMovies(prev => {
        const isCurrentlyLiked = prev[movieId];
        return{
            ...prev,
            [movieId] : !isCurrentlyLiked
        }

    })
}


    const isValidMovie = (movie) => {
        return (
            movie.poster?.url && 
            movie.name && 
            movie.genres && 
            movie.genres.length > 0 && 
            movie.genres[0].name && 
            movie.year 
        );
    };

    const handleDeleteMovie = (movieId) =>{
        setMoviesData(prev => prev.filter(movie => movie.id !== movieId))

    };

    const handleFilterChange = (filterType)=>{
        setActiveFilter(filterType);
    }


    const filteredMovies = moviesData.filter(movie =>{
        if(activeFilter === 'all') return true;
        if(activeFilter ==='favorites')return likedMovies[movie.id];
        return false;
    })
    return (
        <>
        <div className="filters">
            <button 
                className={activeFilter === "favorites" ? "active" : ""}
                onClick={() =>handleFilterChange('favorites')}>Избранное</button>
            <button 
                className={activeFilter === 'all' ? 'active' : ""}
                onClick={()=>handleFilterChange('all')}>Все фильмы</button>
        </div>
        
        <div className="cards-wrapper">
            {filteredMovies
                .filter(movie => isValidMovie(movie)) 
                .map(movie => (
                    <MovieCard 
                        key={movie.id}
                        poster={movie.poster.url}
                        name={movie.name}
                        genre={movie.genres[0].name}
                        year={movie.year}
                        movieId={movie.id}
                        isLiked={likedMovies[movie.id] || false}
                        onToggleLike={handleToggleLike}
                        onDelete={handleDeleteMovie}
                    />
                ))
            }
        </div>
        </>
        
    )
}