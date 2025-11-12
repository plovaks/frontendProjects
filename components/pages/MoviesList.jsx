import MovieCard from "../MovieCard";
import {useState, useEffect} from "react"

const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export default function MovieList(){

    const [moviesData, setMoviesData] = useState([]);
    const [likedMovies, setLikedMovies] = useState({});


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

    return (
        <div className="cards-wrapper">
            {moviesData
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
                    />
                ))
            }
        </div>
    )
}