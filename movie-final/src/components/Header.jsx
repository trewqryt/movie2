import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">MOVIELAND</div>
      <nav className="nav">
        <NavLink to="/" className={({isActive}) => isActive ? "active" : ""}>Главная</NavLink>
        <NavLink to="/movies" className={({isActive}) => isActive ? "active" : ""}>Фильмы</NavLink>
      </nav>
    </header>
  );
}