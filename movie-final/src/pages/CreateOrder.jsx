import { Link, useNavigate } from 'react-router-dom';
import { getCart, createOrder } from '../api/storage.js';

const CreateOrder = () => {
  const cart = getCart();
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.quantity * 500, 0);

  const handleCreate = () => {
    createOrder(cart);
    navigate('/orders');
  };

  return (
    <div className="container">
      <h1 className="page-title">Оформление</h1>
      <p>Итого: {total} руб.</p>
      <button onClick={handleCreate}>Создать заказ</button>
      <Link to="/basket">← Назад</Link>
    </div>
  );
};

export default CreateOrder;