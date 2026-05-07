import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css';

export default function Login({ setUsuario }) {
  const [vista, setVista] = useState('login');
  const [nombreInput, setNombreInput] = useState(''); 
  const navigate = useNavigate();

  const manejarAcceso = (e, tipo) => {
    if (e) e.preventDefault();
    
    if (tipo === 'login') {
      
      setUsuario(nombreInput || "Jugador 1");
    } else {
      
      setUsuario(null);
    }
    navigate('/home');
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-header">
          <span className="logo-icon">🏉</span>
          <h1>APRENDE RUGBY</h1>
          <p>La academia para los amantes del contacto</p>
        </div>

        {vista === 'login' ? (
          <form className="auth-form" onSubmit={(e) => manejarAcceso(e, 'login')}>
            <h2>Bienvenido de vuelta</h2>
            <div className="input-group">
              <input type="email" placeholder="Correo electrónico" required />
              <input type="password" placeholder="Contraseña" required />
            </div>
            <button type="submit" className="btn-primary">ENTRAR AL CAMPO</button>
            <p className="switch-text">
              ¿Nuevo? <span onClick={() => setVista('registro')}>Crea una cuenta</span>
            </p>
          </form>
        ) : (
          <form className="auth-form" onSubmit={(e) => manejarAcceso(e, 'login')}>
            <h2>Únete al equipo</h2>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Nombre completo" 
                onChange={(e) => setNombreInput(e.target.value)} 
                required 
              />
              <input type="email" placeholder="Correo electrónico" required />
              <input type="password" placeholder="Contraseña" required />
            </div>
            <button type="submit" className="btn-primary">REGISTRARME</button>
            <p className="switch-text">
              ¿Ya eres miembro? <span onClick={() => setVista('login')}>Inicia sesión</span>
            </p>
          </form>
        )}

        <div className="divider"><span>O TAMBIÉN</span></div>
        <button className="btn-guest" onClick={(e) => manejarAcceso(e, 'invitado')}>
          ENTRAR COMO INVITADO
        </button>
      </div>
    </div>
  );
}