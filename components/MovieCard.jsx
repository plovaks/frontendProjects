import { Link } from "react-router-dom"

 export default function MovieCard(props){
    const handleLikeClick = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        props.onToggleLike(props.movieId);
    };
    const handleDelete = (e) => {
        e.preventDefault();
        e.stopPropagation(); 
        props.onDelete(props.movieId)
    }
    return (
        <Link to={`/films/${props.movieId}`} className="link">
        <div className="movie__card">
             <i className={`movie__likeIcon ${props.isLiked ? 'movie__likeIcon--active' : ''}`}
                onClick={handleLikeClick}
            ></i>
            <i className="movie__delete" onClick={handleDelete}></i>
                <img src={props.poster} alt=""  className="movie__image"/>
                <h3 className="movie__title">{props.name}</h3>
                <div className="movie__info">
                    <div className="movie__genre">
                        <span>Жанр:</span>
                        <span className="movie__genre main">{props.genre}</span>
                    </div>
                    <div className="movie__year">
                        <span>Год выпуска:</span>
                        <span className="movie__year main">{props.year}</span>
                    </div>
                </div>
        </div>
         </Link>
    )
}