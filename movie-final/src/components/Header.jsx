import { Link } from 'react-router-dom';
import { getCart } from '../api/storage.js';

const Header = () => {
  const cart = getCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0, 0);

  return (
    <header className="header">
      <nav className="header-nav">
        <Link to="/" className="logo">
          CinemaHub
        </Link>

        <div className="nav-links">
          <Link to="/">Главная</Link>
          <Link to="/movies">Фильмы</Link>
          <Link to="/basket">
            Корзина {cartCount > 0 && <span style={{ color: '#ff4500' }}>({cartCount})</span>}
          </Link>
          <Link to="/orders">Заказы</Link>
          <Link to="/login">Вход</Link>
          <Link to="/register">Регистрация</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;