
const API_KEY = 'D3Z5TAB-T9CMSY3-K6H8RE1-B6526KG';
const API_URL = 'https://api.kinopoisk.dev/v1.4/movie';


 async function fetchMovies() {
  try {
    const response = await fetch(`${API_URL}?page=3&limit=10`, {
      headers: {
        'X-API-KEY': API_KEY
      }
    });
    
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    
    const data = await response.json();
    
    data.docs.forEach((movie) => {
      console.log(movie.genres[0].name)
      // console.log('Жанры:', movie.genres?.map(genre => genre.name).join(', ') || 'Не указаны');
    });
    
  } catch (error) {
    console.error('Ошибка при получении данных:', error);
  }
}


const moviesData = fetchMovies();

