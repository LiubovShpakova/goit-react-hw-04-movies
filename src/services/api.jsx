import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const api_key = "dd7a2db9a3b771c4a1b377a8471b1362";

//  for example https://api.themoviedb.org/3/movie/550?api_key=dd7a2db9a3b771c4a1b377a8471b1362
// Ключ доступа к API (v4 auth)  eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDdhMmRiOWEzYjc3MWM0YTFiMzc3YTg0NzFiMTM2MiIsInN1YiI6IjYwNzVmOGRlMmZhZjRkMDA0MTkzZTljMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ScPc9VT99bcurk4ReNaX34qQa-DvGlPvIjAMwBTpNJY

// Cписок самых популярных фильмов на сегодня для создания коллекции на главной странице
// https://developers.themoviedb.org/3/trending/get-trending

const searchTrending = () => {
  return axios.get(`${BASE_URL}/trending/movie/day?api_key=${api_key}`);
};

// поиск кинофильма по ключевому слову на странице фильмов
// https://developers.themoviedb.org/3/search/search-movies

const searchMovies = (query) => {
  return axios.get(
    `${BASE_URL}/search/movie?api_key=${api_key}&query=${query}&language=en-US&page=1&include_adult=false`
  );
};

// Запрос полной информации о фильме для страницы кинофильма
// https://developers.themoviedb.org/3/movies/get-movie-details

const searchMovieDetails = (movie_id) => {
  return axios.get(
    `${BASE_URL}/movie/${movie_id}?api_key=${api_key}&language=en-US`
  );
};

// Запрос информации о актёрском составе для страницы кинофильма
// https://developers.themoviedb.org/3/movies/get-movie-credits

const searchMovieCredits = (movie_id) => {
  return axios.get(
    `${BASE_URL}/movie/${movie_id}/credits?api_key=${api_key}&language=en-US`
  );
};

// Запрос обзоров для страницы кинофильма
// https://developers.themoviedb.org/3/movies/get-movie-reviews

const searchMovieReviews = (movie_id) => {
  return axios.get(
    `${BASE_URL}/movie/${movie_id}/reviews?api_key=${api_key}&language=en-US&page=1`
  );
};
const API = {
  searchTrending,
  searchMovies,
  searchMovieDetails,
  searchMovieCredits,
  searchMovieReviews,
};
export default API;
