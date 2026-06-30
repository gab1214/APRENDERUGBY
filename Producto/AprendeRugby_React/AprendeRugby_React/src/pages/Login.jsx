import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/Login.css';

export default function Login({ setUsuario }) {
  const [vista, setVista] = useState('login');
  

  const [emailInput, setEmailInput] = useState('');
  const [nombreInput, setNombreInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const navigate = useNavigate();

  
  const API_BASE_URL = import.meta.env.VITE_API_URL;

  const manejarAcceso = async (e, tipo) => {
    if (e) e.preventDefault();
    
    if (tipo === 'invitado') {
      setUsuario(null);
      navigate('/home');
      return;
    }

    
    const endpoint = tipo === 'login' ? '/api/usuarios/login' : '/api/usuarios';
    
    const datosFormulario = tipo === 'login' 
      ? { email: emailInput, password: passwordInput }
      : { nombre: nombreInput, email: emailInput, password: passwordInput };

    try {
      const respuesta = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(datosFormulario)
      });

      if (respuesta.ok) {
        
        const datosUsuarioDelBackend = await respuesta.json();
        
        setUsuario({
          nombre: datosUsuarioDelBackend.nombre || nombreInput || emailInput.split('@')[0],
          email: datosUsuarioDelBackend.email || emailInput
        });

        navigate('/home');
      } else {
        alert(tipo === 'login' 
          ? 'Credenciales incorrectas. Verifica tu correo y contraseña.' 
          : 'Error al registrar el usuario. El correo electrónico podría estar en uso.');
      }
    } catch (error) {
      console.error("Error de conexión con el backend:", error);
      alert("No se pudo conectar con el servidor. Por favor, intenta de nuevo más tarde.");
    }
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
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required 
              />
              <input 
                type="password" 
                placeholder="Contraseña" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="btn-primary">ENTRAR AL CAMPO</button>
            <p className="switch-text">
              ¿Nuevo? <span onClick={() => setVista('registro')}>Crea una cuenta</span>
            </p>
          </form>
        ) : (
          <form className="auth-form" onSubmit={(e) => manejarAcceso(e, 'registro')}>
            <h2>Únete al equipo</h2>
            <div className="input-group">
              <input 
                type="text" 
                placeholder="Nombre completo" 
                value={nombreInput}
                onChange={(e) => setNombreInput(e.target.value)} 
                required 
              />
              <input 
                type="email" 
                placeholder="Correo electrónico" 
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                required 
              />
              <input 
                type="password" 
                placeholder="Contraseña" 
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                required 
              />
            </div>
            <button type="submit" className="btn-primary">REGISTRARME</button>
            <p className="switch-text">
              ¿Ya eres miembro? <span onClick={() => setVista('login')}>Inicia sesión</span>
            </p>
          </form>
        )}

        <div className="divider"><span>O TAMBIÉN</span></div>
        <button type="button" className="btn-guest" onClick={(e) => manejarAcceso(e, 'invitado')}>
          ENTRAR COMO INVITADO
        </button>
      </div>
    </div>
  );
}