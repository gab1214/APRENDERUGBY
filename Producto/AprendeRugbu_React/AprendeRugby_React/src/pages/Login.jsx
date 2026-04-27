
import { useState } from 'react';

import '../components/Login.css';

export default function Login() {
  const [vista, setVista] = useState('login');

  const manejarInvitado = () => {
    console.log("Accediendo como invitado");
    alert("¡Bienvenido! Entrando como invitado...");
  };

  return (
    <div className="login-screen">
      <div className="login-card">
        <div className="login-header">
          <span style={{fontSize: '3rem'}}>🏉</span>
          <h1>Aprende </h1>
          <h1>Rugby</h1>
          <p>Prepárate para el Scrum</p>
        </div>

        {vista === 'login' ? (
          <div className="auth-form">
            <h2>Iniciar Sesión</h2>
            <div className="input-group">
              <input type="email" placeholder="Correo electrónico" />
              <input type="password" placeholder="Contraseña" />
            </div>
            <button className="btn-primary">ENTRAR AL CAMPO</button>
            <p className="switch-text">
              ¿No tienes equipo? <span onClick={() => setVista('registro')}>Regístrate</span>
            </p>
          </div>
        ) : (
          <div className="auth-form">
            <h2>Crear Cuenta</h2>
            <div className="input-group">
              <input type="text" placeholder="Tu nombre" />
              <input type="email" placeholder="Tu correo" />
              <input type="password" placeholder="Crea una contraseña" />
            </div>
            <button className="btn-primary">UNIRSE AL CLUB</button>
            <p className="switch-text">
              ¿Ya eres miembro? <span onClick={() => setVista('login')}>Inicia sesión</span>
            </p>
          </div>
        )}

        <div className="divider">
          <span>O TAMBIÉN</span>
        </div>

        <button className="btn-guest" onClick={manejarInvitado}>
          ENTRAR COMO INVITADO
        </button>
      </div>
    </div>
  );
}