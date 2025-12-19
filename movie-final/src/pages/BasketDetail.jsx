import { useParams, Link } from 'react-router-dom';
import { getCart } from '../api/storage.js';

const BasketDetail = () => {
  const { id } = useParams();
  const item = getCart().find(i => i.id === Number(id));

  if (!item) {
    return (
      <div className="container">
        <h1 className="page-title">Товар не найден в корзине</h1>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/basket" className="back-link">← Назад в корзину</Link>

      <div className="movie-detail">
        {item.imageUrl ? (
          <img src={item.imageUrl} alt={item.title} className="poster" />
        ) : (
          <div style={{width: '400px', height: '600px', background: '#222', borderRadius: '15px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666'}}>
            Нет постера
          </div>
        )}
        <div className="movie-detail-info">
          <h1>{item.title}</h1>
          <p>Количество билетов: {item.quantity}</p>
          <p>Цена за билет: 500 ₽</p>
          <p style={{ fontSize: '2.5rem', marginTop: '50px', color: '#ff4500' }}>
            Сумма: {item.quantity * 500} ₽
          </p>
        </div>
      </div>
    </div>
  );
};

export default BasketDetail;