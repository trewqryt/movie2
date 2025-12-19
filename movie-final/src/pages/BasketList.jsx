import { Link } from 'react-router-dom';
import { getCart, removeFromCart, updateQuantity } from '../api/storage.js';

const BasketList = () => {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.quantity * 500, 0);

  if (cart.length === 0) {
    return (
      <div className="container">
        <h1 className="page-title">Корзина пуста</h1>
        <Link to="/movies" className="back-link">← Вернуться к фильмам</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h1 className="page-title">Корзина</h1>

      <div className="movies-grid">
        {cart.map(item => (
          <div key={item.id} className="movie-card">
            {item.poster ? (
              <img src={item.poster} alt={item.title} />
            ) : (
              <div style={{height: '450px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666'}}>
                Нет постера
              </div>
            )}
            <div className="movie-info">
              <h3>{item.title}</h3>
              <p style={{ fontSize: '1.4rem', margin: '20px 0', color: '#ff4500', fontWeight: 'bold' }}>
                Билетов: {item.quantity} × 500 ₽
              </p>

              <div className="quantity-controls">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>

              <button 
                onClick={() => removeFromCart(item.id)} 
                style={{
                  backgroundColor: '#dc3545',
                  color: 'white',
                  padding: '15px 30px',
                  border: 'none',
                  borderRadius: '15px',
                  fontSize: '1.3rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  width: '100%',
                  marginTop: '25px',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#c82333'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#dc3545'}
              >
                Удалить
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="total-sum">
        Итого: <strong>{total} ₽</strong>
      </div>

      <Link to="/order/create" className="btn-large">
        Оформить заказ
      </Link>
    </div>
  );
};

export default BasketList;