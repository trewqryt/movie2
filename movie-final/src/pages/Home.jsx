import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import MovieCard from '../components/MovieCard.jsx';
import movies from '../data/movies.js';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroMovies = movies; // все фильмы в слайдер

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
    }, 6000); // авто-смена каждые 6 секунд
    return () => clearInterval(interval);
  }, [heroMovies.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % heroMovies.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + heroMovies.length) % heroMovies.length);

  return (
    <div>
      {/* Hero Slider — стильный фон с постерами */}
      <div style={{ position: 'relative', height: '90vh', overflow: 'hidden' }}>
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
              transition: 'opacity 1.5s ease',
              background: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.8) 100%), url(${movie.heroPoster}) center/cover no-repeat`,
            }}
          >
            <div className="container" style={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              maxWidth: '800px',
            }}>
              <h1 style={{ fontSize: '5rem', marginBottom: '30px', textShadow: '2px 2px 10px black' }}>
                {movie.title}
              </h1>
              <p style={{ fontSize: '1.8rem', marginBottom: '40px', maxWidth: '600px', textShadow: '1px 1px 5px black' }}>
                {movie.description}
              </p>
              <Link to={`/movie/${movie.id}`} className="btn-large">
                Купить билет
              </Link>
            </div>
          </div>
        ))}

        {/* Стрелки */}
        <button onClick={prevSlide} className="slider-arrow left">‹</button>
        <button onClick={nextSlide} className="slider-arrow right">›</button>

        {/* Точки индикаторы */}
        <div style={{ position: 'absolute', bottom: '30px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '10px' }}>
          {heroMovies.map((_, index) => (
            <div
              key={index}
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: currentSlide === index ? '#ff4500' : '#ffffff66',
                cursor: 'pointer',
              }}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Секция "Популярное" */}
      <div className="container" style={{ padding: '80px 0' }}>
        <h2 className="section-title">Популярное сейчас</h2>
        <div className="movies-grid">
          {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;