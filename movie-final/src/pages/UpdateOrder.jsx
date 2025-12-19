import { useParams, Link } from 'react-router-dom';
import { getOrders, updateOrderStatus } from '../api/storage.js';

const UpdateOrder = () => {
  const { id } = useParams();
  const orders = getOrders();
  const order = id ? orders.find(o => o.id === Number(id)) : null;

  const changeStatus = (status) => {
    updateOrderStatus(Number(id), status);
    alert('Статус обновлён!');
    window.location.reload(); // обновляем страницу, чтобы увидеть изменения
  };

  // Список всех заказов (роут /orders)
  if (!id) {
    if (orders.length === 0) {
      return (
        <div className="container">
          <h1 className="page-title">У вас нет заказов</h1>
          <Link to="/movies" className="back-link">← Вернуться к фильмам</Link>
        </div>
      );
    }

    return (
      <div className="container">
        <h1 className="page-title">Мои заказы</h1>

        <div className="movies-grid">
          {orders.map(o => (
            <div key={o.id} className="movie-card" style={{ padding: '20px' }}>
              <h3>Заказ №{o.id}</h3>
              <p>Дата: {o.date}</p>
              <p>Товаров: {o.items.length}</p>
              <p>Сумма: {o.total} ₽</p>
              <p>Статус: <strong>{o.status}</strong></p>

              <Link to={`/order/update/${o.id}`} className="btn-primary">
                Подробнее и изменить статус
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Детали конкретного заказа
  if (!order) {
    return (
      <div className="container">
        <h1 className="page-title">Заказ не найден</h1>
        <Link to="/orders" className="back-link">← К списку заказов</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <Link to="/orders" className="back-link">← К списку заказов</Link>

      <h1 className="page-title">Заказ №{order.id}</h1>
      <p style={{ fontSize: '1.4rem', margin: '15px 0' }}>Дата оформления: {order.date}</p>
      <p style={{ fontSize: '1.6rem', margin: '20px 0' }}>Общая сумма: <strong>{order.total} ₽</strong></p>
      <p style={{ fontSize: '1.6rem', margin: '20px 0' }}>
        Текущий статус: <strong style={{ color: '#ff4500' }}>{order.status}</strong>
      </p>

      <div className="status-buttons">
        <button onClick={() => changeStatus('Оплачен')} className="status-paid">
          Оплачен
        </button>
        <button onClick={() => changeStatus('В обработке')} className="status-processing">
          В обработке
        </button>
        <button onClick={() => changeStatus('Выполнен')} className="status-completed">
          Выполнен
        </button>
        <button onClick={() => changeStatus('Отменён')} className="status-cancelled">
          Отменён
        </button>
      </div>

      <h2 style={{ fontSize: '2.2rem', margin: '60px 0 40px', textAlign: 'center' }}>
        Товары в заказе
      </h2>

      <div className="movies-grid">
        {order.items.map(item => (
          <div key={item.id} className="movie-card">
                        {item.poster ? (
                        <img src={item.poster} alt={item.title} />
                        ) : (
                        <div style={{ height: '450px', background: '#222', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666' }}>
                            Нет постера
                        </div>
                        )}
            <div className="movie-info">
              <h3>{item.title}</h3>
              <p>Год: {item.year}</p>
              <p>Рейтинг: {item.rating}</p>
              <p>Количество билетов: {item.quantity}</p>
              <p>Стоимость: {item.quantity * 500} ₽</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdateOrder;