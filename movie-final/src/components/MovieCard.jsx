import { Link } from 'react-router-dom';
import { addToCart } from '../api/storage.js';

const MovieCard = ({ movie }) => {
  const handleAdd = () => {
    addToCart(movie);
    alert('Билет добавлен в корзину!');
  };

  return (
    <div className="movie-card">
      {movie.poster ? (
        <img src={movie.poster} alt={movie.title} />
      ) : (
        <div style={{
          height: '450px',
          background: '#222',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#666',
          fontSize: '1.2rem'
        }}>
          Нет постера
        </div>
      )}
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
        <div className="movie-buttons">
          <Link to={`/movie/${movie.id}`} className="btn-detail">
            Подробнее
          </Link>
          <button onClick={handleAdd} className="btn-cart">
            В корзину
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;