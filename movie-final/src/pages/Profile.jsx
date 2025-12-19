import { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if (isAuth !== 'true') {
      navigate('/login');
    }
  }, [navigate]);

  const user = JSON.parse(localStorage.getItem('user')) || {};

  const handleLogout = () => {
    localStorage.removeItem('isAuth');
    navigate('/login');
  };

  return (
    <div className="container" style={{ padding: '100px 20px' }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: '#1a1a1a',
        padding: '60px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
        textAlign: 'center'
      }}>
        <h1 className="page-title" style={{ fontSize: '3.5rem', marginBottom: '50px' }}>
          Личный кабинет
        </h1>

        <p style={{ fontSize: '2rem', margin: '30px 0' }}>
          Привет, <strong style={{ color: '#ff4500' }}>
            {user.firstName} {user.lastName}
          </strong>!
        </p>

        <p style={{ fontSize: '1.5rem', color: '#aaaaaa', margin: '30px 0' }}>
          Email: {user.email}
        </p>

        <p style={{ fontSize: '1.4rem', color: '#aaaaaa', margin: '40px 0' }}>
          Вы успешно авторизованы в CinemaHub
        </p>

        <button onClick={handleLogout} className="btn-large" style={{ background: '#dc3545' }}>
          Выйти из аккаунта
        </button>

        <p style={{ marginTop: '50px' }}>
          <Link to="/" style={{ color: '#ff4500', fontSize: '1.3rem' }}>← На главную</Link>
        </p>
      </div>
    </div>
  );
};

export default Profile;