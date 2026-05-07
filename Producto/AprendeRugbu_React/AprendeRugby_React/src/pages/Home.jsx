import { useNavigate } from 'react-router-dom';
import '../components/Home.css';

export default function Home({ usuario, setUsuario }) {
  const navigate = useNavigate();

  const cerrarSesion = () => {
    setUsuario(null);
    navigate('/');
  };

  return (
    <div className="home-container">
      <nav className="navbar">
        <div className="nav-logo">AprendeRugby 🏉</div>
        <div className="nav-links">
          <span>Reglamento</span>
          <span>Comunidad</span>
          <span>Equipos</span>

          
          {!usuario ? (
            <>
              <button className="btn-nav" onClick={() => navigate('/')}>Registrar</button>
              <button className="btn-nav" onClick={() => navigate('/')}>Iniciar Sesión</button>
            </>
          ) : (
            <div className="user-badge">
              <span className="user-name">👤 {usuario}</span>
              <button className="btn-logout" onClick={cerrarSesion}>Salir</button>
            </div>
          )}
        </div>
      </nav>

      <div className="main-layout">
        <aside className="sidebar">
          <h3>Partidos</h3>
          <ul className="match-list">
            <li>UCH vs DB</li>
            <li>OldBoys vs UC</li>
          </ul>
        </aside>

        <main className="content">
          <div className="hero-banner">
            <h1>Aprende Rugby</h1>
          </div>
          <div className="info-box">
            <h2>Bienvenido {usuario ? usuario : 'Invitado'}</h2>
            <p>Selecciona una sección para comenzar tu entrenamiento.</p>
          </div>
        </main>
      </div>
    </div>
  );
}