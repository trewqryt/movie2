import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getCart, createOrder } from '../api/storage.js';

const CreateOrder = () => {
  const cart = getCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.quantity * 500, 0);

  const rows = 8;
  const seatsPerRow = 10;
  const [selectedSeats, setSelectedSeats] = useState([]);

  const toggleSeat = (seatNumber) => {
    setSelectedSeats(prev => 
      prev.includes(seatNumber) 
        ? prev.filter(s => s !== seatNumber)
        : [...prev, seatNumber]
    );
  };

  const handleOrder = () => {
    if (selectedSeats.length === 0) {
      alert('Выберите хотя бы одно место в зале!');
      return;
    }

    createOrder(cart);
    alert(`Заказ создан! Выбранные места: ${selectedSeats.join(', ')}`);
    navigate('/orders');
  };

  return (
    <div className="container" style={{ padding: '60px 20px' }}>
      <h1 className="page-title">Оформление заказа</h1>

      <p style={{ textAlign: 'center', fontSize: '1.8rem', margin: '40px 0' }}>
        Товаров: {cart.length} | Сумма: {total} ₽
      </p>

      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', margin: '50px 0', color: '#ff4500' }}>
        Выберите места в зале
      </h2>

      <div className="screen">ЭКРАН</div>

      <div className="seat-grid">
        {Array.from({ length: rows * seatsPerRow }, (_, i) => {
          const seatNumber = i + 1;
          const isSelected = selectedSeats.includes(seatNumber);

          return (
            <div
              key={seatNumber}
              className={`seat ${isSelected ? 'selected' : ''}`}
              onClick={() => toggleSeat(seatNumber)}
            >
              {seatNumber}
            </div>
          );
        })}
      </div>

      <p style={{ textAlign: 'center', fontSize: '1.8rem', margin: '50px 0' }}>
        Выбрано мест: <strong>{selectedSeats.length}</strong>
      </p>

      <button onClick={handleOrder} className="btn-large">
        Подтвердить заказ
      </button>

      <Link to="/basket" className="back-link" style={{ display: 'block', textAlign: 'center', marginTop: '40px' }}>
        ← Вернуться в корзину
      </Link>
    </div>
  );
};

export default CreateOrder;