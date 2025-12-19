import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = JSON.parse(localStorage.getItem('user'));

    if (savedUser && savedUser.email === email && savedUser.password === password) {
      localStorage.setItem('isAuth', 'true');
      navigate('/profile');
    } else {
      alert('Неверный email или пароль!');
    }
  };

  return (
    <div className="container" style={{ padding: '100px 20px' }}>
      <div style={{
        maxWidth: '500px',
        margin: '0 auto',
        background: '#1a1a1a',
        padding: '50px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
        textAlign: 'center'
      }}>
        <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '40px' }}>
          Вход в аккаунт
        </h1>

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '18px',
              borderRadius: '12px',
              border: 'none',
              background: '#333333',
              color: '#ffffff',
              fontSize: '1.3rem'
            }}
          />

          <input
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: '18px',
              borderRadius: '12px',
              border: 'none',
              background: '#333333',
              color: '#ffffff',
              fontSize: '1.3rem'
            }}
          />

          <button type="submit" className="btn-large">
            Войти
          </button>
        </form>

        <p style={{ marginTop: '40px', fontSize: '1.2rem', color: '#aaaaaa' }}>
          Нет аккаунта? <Link to="/register" style={{ color: '#ff4500', fontWeight: 'bold' }}>Зарегистрироваться</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;