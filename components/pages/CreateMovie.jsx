import React , {useState} from "react"
export default function CreateMovie(){
    const [formData, setFormData] = useState({
        name: '',
        genre: '',
        year:'',
    });

    const handleChange = (event)=>{
        const {id, value} = event.target;
        setFormData(prev => ({
            ...prev,
            [id]: value,
        }));
    }

    function handleSubmit(event){
        event.preventDefault();

        // объект фильма

        const newMovie = {
            id:Date.now(),
            name:formData.name,
            genre:formData.genre,
            year:formData.year
        }

        // старые фильмы из local storage

        const oldMovies = JSON.parse(localStorage.getItem('movies')) || [];

        // новые фильмы

        const updateMovies= [...oldMovies, newMovie];

        localStorage.setItem('movies', JSON.stringify(updateMovies));
        setFormData({
            name: '',
            genre:'',
            year:'',
        })

        console.log('Все сохраненные фильмы:', updatedMovies);
    }

    return (
        <div className="createMoviePage">
        <h1 className="createMovie__title">Создайте свою карточку фильма!</h1>
        <form action="" method="POST" className="form__createCard" onSubmit={handleSubmit}>
            <label htmlFor="name">Введите название фильма</label>
            <input 
                type="text" 
                placeholder="Название" 
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="genre">Выберете жанр фильма</label>
            <select name="" id="genre" value={formData.value} onChange={handleChange}>
                <option value="драма">Драма</option>
                <option value="боевик">Боевик</option>
                <option value="комелия">Комедия</option>
                <option value="триллер">Триллер</option>
                <option value="детектив">Детектив</option>
            </select>
            <label htmlFor="year">Введите год выпуска фильма</label>
            <input 
                type="text" 
                placeholder="Год"
                id="year"
                value={formData.year}
                onChange={handleChange}
                required
            />
            <button type="submit" >Сохранить фильм</button> 
        </form>
        </div>
    )
}