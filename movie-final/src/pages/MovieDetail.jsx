import { useParams, Link } from "react-router-dom";
import { movies } from "../data/movies";

export default function MovieDetail() {
  const { id } = useParams();
  const movie = movies.find(m => m.id === Number(id));

  if (!movie) return <div style={{textAlign: "center", paddingTop: "200px", fontSize: "3rem"}}>Фильм не найден</div>;

  return (
    <div className="container">
      <Link to="/movies" className="back">← Назад</Link>
      <div className="detail">
        <img src={movie.poster} alt={movie.title} />
        <div className="detail-info">
          <h1>{movie.title}</h1>
          <div className="rating">★ {movie.rating}</div>
          <p><strong>Год:</strong> {movie.year}</p>
          <p><strong>Режиссёр:</strong> {movie.director}</p>
          <p><strong>Жанр:</strong> {movie.genre}</p>
          <p style={{marginTop: "2rem", fontSize: "1.4rem", lineHeight: "2"}}>{movie.description}</p>
        </div>
      </div>
    </div>
  );
}