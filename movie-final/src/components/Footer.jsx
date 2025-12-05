export default function Footer() {
    return (
      <footer style={{
        backgroundColor: '#0d1b2a',
        color: '#88c0d0',
        textAlign: 'center',
        padding: '30px 20px',
        marginTop: 'auto',
        borderTop: '1px solid #00d4ff33',
        fontSize: '16px'
      }}>
        <p>© 2025 MOVIELAND — Все права защищены</p>
        <p style={{ marginTop: '10px' }}>
          <a href="/" style={{ color: '#00d4ff', textDecoration: 'none', margin: '0 15px' }}>Главная</a> • 
          <a href="/movies" style={{ color: '#00d4ff', textDecoration: 'none', margin: '0 15px' }}>Фильмы</a>
        </p>
      </footer>
    );
  }