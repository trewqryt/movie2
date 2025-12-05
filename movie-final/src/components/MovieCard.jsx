import { Link } from "react-router-dom";

export default function MovieCard({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <div className="movie-card">
        <img src={movie.poster} alt={movie.title} />
        <div className="movie-info">
          <h3>{movie.title}</h3>
          <p>{movie.year} • ★ {movie.rating}</p>
        </div>
      </div>
    </Link>
  );
}