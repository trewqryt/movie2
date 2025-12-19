import MovieCard from '../components/MovieCard.jsx';
import movies from '../data/movies.js';

const Movies = () => {
  return (
    <div className="container">
      <h1 className="page-title">Фильмы</h1>
      <div className="movies-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Movies;