import { Link } from 'react-router-dom';
import { getCart } from '../api/storage.js';
import { useState, useEffect } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('dark');
  const cart = getCart();
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    if (savedTheme === 'light') {
      document.body.classList.add('light-theme');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.classList.toggle('light-theme');
  };

  return (
    <header className="header">
      <div className="header-nav">
        <Link to="/" className="logo">CinemaHub</Link>
        <div className="nav-links">
          <Link to="/">Главная</Link>
          <Link to="/movies">Фильмы</Link>
          <Link to="/basket">Корзина ({cartCount})</Link>
          <Link to="/orders">Заказы</Link>
          <Link to="/register">Регистрация</Link>
          <Link to="/login">Войти</Link>

          <button onClick={toggleTheme} className="theme-toggle">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;