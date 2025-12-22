import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      alert('Заполните все поля!');
      return;
    }

    if (password !== confirmPassword) {
      alert('Пароли не совпадают!');
      return;
    }

    if (password.length < 6) {
      alert('Пароль должен быть не менее 6 символов!');
      return;
    }

    const user = {
      firstName,
      lastName,
      email,
      password
    };
    localStorage.setItem('user', JSON.stringify(user));
    alert('Регистрация успешна! Теперь войдите в аккаунт.');
    navigate('/login');
  };

  return (
    <div className="container" style={{ padding: '80px 20px' }}>
      <div style={{
        maxWidth: '600px',
        margin: '0 auto',
        background: '#1a1a1a',
        padding: '50px',
        borderRadius: '20px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.7)',
        textAlign: 'center'
      }}>
        <h1 className="page-title" style={{ fontSize: '3rem', marginBottom: '50px' }}>
          Регистрация
        </h1>

        <form onSubmit={handleRegister} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          <input
            type="text"
            placeholder="Имя"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            type="text"
            placeholder="Фамилия"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            placeholder="Пароль (минимум 6 символов)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength="6"
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
            placeholder="Подтвердите пароль"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
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
            Зарегистрироваться
          </button>
        </form>

        <p style={{ marginTop: '40px', fontSize: '1.2rem', color: '#aaaaaa' }}>
          Уже есть аккаунт? <Link to="/login" style={{ color: '#ff4500', fontWeight: 'bold' }}>Войти</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;