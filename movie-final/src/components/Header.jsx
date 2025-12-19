import { Link } from 'react-router-dom';
import { getCart } from '../api/storage.js';

const Header = () => {
  const cart = getCart();
  const cartCount = cart.length;

  return (
    <header className="header">
      <div className="container">
        <nav className="nav">
          <Link to="/" className="logo">CinemaHub</Link>
          <div className="nav-links">
            <Link to="/">Главная</Link>
            <Link to="/movies">Фильмы</Link>
            <Link to="/basket">Корзина </Link>
            <Link to="/orders">Заказы</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;