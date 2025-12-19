import { useParams, Link } from 'react-router-dom';
import movies from '../data/movies.js';
import { addToCart } from '../api/storage.js';

const MovieDetails = () => {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  const handleAdd = () => {
    addToCart(movie);
    alert('Билет добавлен в корзину!');
  };

  if (!movie) {
    return (
      <div className="container">
        <h1 className="page-title">Фильм не найден</h1>
        <Link to="/movies" className="back-link">← Вернуться к фильмам</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/movies" className="back-link">← Назад к фильмам</Link>

      <div className="movie-detail">
        {movie.poster && (
          <img src={movie.poster} alt={movie.title} className="poster" />
        )}

        <div className="movie-detail-info">
          <h1>{movie.title}</h1>
          
          <p><strong>Год:</strong> {movie.year}</p>
          <p><strong>Рейтинг:</strong> {movie.rating} / 10</p>
          <p><strong>Режиссёр:</strong> {movie.director}</p>
          <p><strong>Жанр:</strong> {movie.genre}</p>
          
          <p style={{ marginTop: '30px', fontSize: '1.3rem', lineHeight: '1.8' }}>
            {movie.description}
          </p>

          <button onClick={handleAdd} className="btn-large" style={{ marginTop: '40px' }}>
            Добавить в корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;