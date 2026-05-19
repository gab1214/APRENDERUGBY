import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatGlobal from './ChatGlobal';
import AdminPanel from './AdminPanel'; 
import '../components/Home.css';

export default function Home({ usuario, setUsuario }) {
  const navigate = useNavigate();
  const [pestañaActiva, setPestañaActiva] = useState('inicio');

  const CORREO_ADMIN_PERMITIDO = "admin@aprenderugby.com";
  const esAdministrador = usuario && usuario.email === CORREO_ADMIN_PERMITIDO;

  const [mensajes, setMensajes] = useState([
    { id: 1, user: "Diego", text: "¡Buen partido el de ayer!" },
    { id: 2, user: "Felipe", text: "Alguien para entrenar scrum el sábado?" }
  ]);

  const cerrarSesion = () => {
    setUsuario(null);
    navigate('/');
  };

  return (
    <div className="home-container">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-logo" onClick={() => setPestañaActiva('inicio')} style={{cursor:'pointer'}}>
          AprendeRugby 🏉
        </div>
        <div className="nav-links">
          <span onClick={() => setPestañaActiva('inicio')}>Reglamento</span>
          
          <span 
            className={pestañaActiva === 'comunidad' ? 'nav-item-active' : ''} 
            onClick={() => setPestañaActiva('comunidad')}
            style={{cursor: 'pointer'}}
          >
            Comunidad
          </span>
          
          <span>Equipos</span>
          
          {esAdministrador && (
            <span className="admin-link" onClick={() => setPestañaActiva('admin')}>
              Panel Admin ⚙️
            </span>
          )}

          {!usuario ? (
            <>
              <button className="btn-nav" onClick={() => navigate('/')}>Registrar</button>
              <button className="btn-nav" onClick={() => navigate('/')}>Iniciar Sesión</button>
            </>
          ) : (
            <div className="user-badge">
              <span className="user-name">👤 {usuario.nombre}</span>
              <button className="btn-logout" onClick={cerrarSesion}>Salir</button>
            </div>
          )}
        </div>
      </nav>

      <div className="main-layout">
        {/* SIDEBAR */}
        <aside className="sidebar">
          <h3>Partidos</h3>
          <ul className="match-list">
            <li>UCH vs DB</li>
            <li>OldBoys vs UC</li>
          </ul>
        </aside>

        {/* CONTENIDO PRINCIPAL EXTRAÍDO Y MODULAR */}
        <main className="content">
          
          {/* INICIO */}
          {pestañaActiva === 'inicio' && (
            <>
              <div className="hero-banner">
                <h1>Aprende Rugby</h1>
              </div>
              <div className="info-box">
                <h2>Bienvenido {usuario ? usuario.nombre : 'Invitado'}</h2>
                <p>Selecciona una sección para comenzar tu entrenamiento.</p>
              </div>
            </>
          )}

          {/* COMUNIDAD / CHAT */}
          {pestañaActiva === 'comunidad' && (
            <ChatGlobal 
              usuario={usuario ? usuario.nombre : null} 
              mensajes={mensajes} 
              setMensajes={setMensajes} 
            />
          )}

          {/* PANEL DE ADMIN SEGURO EN SU PROPIO JSX */}
          {pestañaActiva === 'admin' && (
            esAdministrador ? (
              <AdminPanel usuario={usuario} /> 
            ) : (
              <div className="admin-denied">
                <h2>🚫 Acceso Denegado</h2>
                <p>No tienes los permisos requeridos para ver este panel.</p>
              </div>
            )
          )}

        </main>
      </div>
    </div>
  );
}