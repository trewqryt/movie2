import { useState } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard.jsx';
import movies from '../data/movies.js';

const Home = () => {
  // Слайдер: текущий индекс
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroMovies = movies.slice(0, 4); // 4 фильма для слайдера

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroMovies.length) % heroMovies.length);
  };

  // Фейковые новости
  const news = [
    { id: 1, title: "«Дэдпул и Росомаха» бьёт рекорды кассовых сборов!", date: "19 декабря 2025" },
    { id: 2, title: "Головоломка 2 — самый трогательный мультфильм года", date: "18 декабря 2025" },
    { id: 3, title: "Новые трейлеры «Моана 2» уже в кинотеатрах", date: "17 декабря 2025" },
  ];

  return (
    <div>
      {/* Hero Slider */}
      <div style={{ position: 'relative', height: '80vh', overflow: 'hidden' }}>
        {heroMovies.map((movie, index) => (
          <div
            key={movie.id}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              opacity: currentSlide === index ? 1 : 0,
              transition: 'opacity 1s ease',
              background: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.8)), ur[](https://image.tmdb.org/t/p/original${movie.poster_path}) no-repeat center center/cover`,
            }}
          >
            <div style={{
              maxWidth: '1200px',
              margin: '0 auto',
              padding: '0 20px',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}>
              <h1 style={{ fontSize: '4rem', marginBottom: '20px' }}>{movie.title}</h1>
              <p style={{ fontSize: '1.8rem', marginBottom: '40px', maxWidth: '600px' }}>
                {movie.overview || 'Смотрите в кинотеатрах прямо сейчас!'}
              </p>
              <Link to={`/movie/${movie.id}`} style={{
                display: 'inline-block',
                padding: '15px 40px',
                background: '#ff4500',
                color: 'white',
                borderRadius: '10px',
                fontSize: '1.5rem',
                fontWeight: 'bold',
              }}>
                Купить билет
              </Link>
            </div>
          </div>
        ))}

        {/* Стрелки слайдера */}
        <button onClick={prevSlide} style={{
          position: 'absolute',
          left: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          fontSize: '3rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}>‹</button>

        <button onClick={nextSlide} style={{
          position: 'absolute',
          right: '20px',
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'rgba(0,0,0,0.5)',
          color: 'white',
          border: 'none',
          fontSize: '3rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          cursor: 'pointer',
        }}>›</button>
      </div>

      {/* Секция "Сейчас в кино" */}
      <div className="container" style={{ padding: '80px 20px' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '60px', color: '#ff4500' }}>
          Сейчас в кино
        </h2>
        <div className="movies-grid">
          {movies.slice(0, 6).map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>

      {/* Секция "Новости" */}
      <div style={{ background: '#1a1a1a', padding: '80px 20px' }}>
        <div className="container">
          <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '60px', color: '#ff4500' }}>
            Новости кино
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '40px' }}>
            {news.map(item => (
              <div key={item.id} style={{
                background: '#222',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 8px 20px rgba(0,0,0,0.5)',
              }}>
                <h3 style={{ fontSize: '1.6rem', marginBottom: '15px' }}>{item.title}</h3>
                <p style={{ color: '#aaa', fontSize: '1.1rem' }}>{item.date}</p>
                <a href="#" style={{ color: '#ff4500', fontWeight: 'bold' }}>Читать полностью →</a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Секция "Рекомендации" */}
      <div className="container" style={{ padding: '80px 20px' }}>
        <h2 style={{ fontSize: '2.8rem', textAlign: 'center', marginBottom: '60px', color: '#ff4500' }}>
          Рекомендуем посмотреть
        </h2>
        <div className="movies-grid">
          {movies.slice(3, 9).map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;