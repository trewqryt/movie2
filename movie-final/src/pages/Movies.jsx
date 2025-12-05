import MovieCard from "../components/MovieCard";
import { movies } from "../data/movies";

export default function Movies() {
  return (
    <div className="container">
      <h1 style={{fontSize: "4rem", textAlign: "center", margin: "2rem 0", background: "linear-gradient(to right, #facc15, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>
        Все фильмы
      </h1>
      <div className="movies-grid">
        {movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
}