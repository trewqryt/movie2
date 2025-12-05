import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home container">
      <h1>
        <span style={{background: "linear-gradient(to right, #facc15, #ec4899)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent"}}>MOVIE</span>LAND
      </h1>
      <p>Смотрите лучшие фильмы всех времён в одном месте</p>
      <Link to="/movies" className="btn">Перейти к фильмам →</Link>
    </div>
  );
}