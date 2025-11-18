import {useParams} from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = import.meta.env.VITE_API_URL;

export default function Movie(){
    const {id} = useParams();
    const [movieData, setMovieData] = useState(null);

    useEffect(function(){
        async function fetchMovie(){
            try{
                const res = await fetch(`${API_URL}/movie/${id}`, {
                    headers: {
                        'X-API-KEY': API_KEY,
                    }
                });
                
                if (!res.ok){
                    throw new Error(`Error: ${res.status}`)
                }

                const data = await res.json();
                console.log(data)
                setMovieData(data);
            }
            catch (error){
                console.log('Fetch error:', error)
            }
            
        }
        fetchMovie();
    }, [id]);

    
    if (!movieData) return <div>Фильм не найден</div>;

    return (
        <div className="movie__page">
           <Link to="/films"><button className="movie__pageBackBtn" >К списку фильмов</button></Link> 
            <div className="movie__pageBlock">
                <img src={movieData.poster?.url} alt="movie poster" className="movie__pageImage"/>
                <div className="movie__pageInfo">
                    <h3 className="movie__pageTitle">{movieData.name}</h3>
                    <div className="movie__pageGenre">
                        <span>Жанр:  </span>
                            {movieData.genres?.[0]?.name}
                    </div>
                    <div className="movie__pageCountry"> <span>Страна:</span> {movieData.countries && movieData.countries[0].name}</div>
                    <div className="movie__pageYear">
                        <span>Год выпуска:  </span>
                        {movieData.year}
                    </div>
                    <p className="movie__pageAge"><span>Возрастное органичение:  </span> {movieData.ageRating ? movieData.ageRating :18}+</p>
                    <div className="movie__pageDesc"><span>Сюжет:  </span> {movieData.description}</div>
                    <p className="movie__pageRating"><span>Рейтинг Кинопоиска:  </span> {movieData.rating? parseFloat((movieData.rating.kp).toFixed(1)) : 5}</p>
                    <div className="movie__pageActors">
                   <span>В главных ролях:  </span> 
                     {movieData.persons && 
                    movieData.persons.slice(0, 4).map(person => 
                        <p key={person.id} className="movie__pageActors--list">{person.name} </p>
                    )
                }
                </div>
                </div>
            </div>
        </div>
    )
}