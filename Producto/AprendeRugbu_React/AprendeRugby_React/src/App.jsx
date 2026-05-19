import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  // 1. Al cargar la app, revisamos si ya había un usuario guardado en el navegador
  const [usuario, setUsuario] = useState(() => {
    const usuarioGuardado = localStorage.getItem('usuario_rugby');
    // Si existe, lo transformamos de texto a Objeto de JavaScript, si no, empezamos en null
    return usuarioGuardado ? JSON.parse(usuarioGuardado) : null;
  });

  // 2. se activa cada vez que el estado 'usuario' cambia
  useEffect(() => {
    if (usuario) {
      // Si el usuario existe (se logueó), lo guardamos como texto en localStorage
      localStorage.setItem('usuario_rugby', JSON.stringify(usuario));
    } else {
      // Si el usuario es null (cerró sesión o es invitado), lo borramos del almacenamiento
      localStorage.removeItem('usuario_rugby');
    }
  }, [usuario]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUsuario={setUsuario} />} />
        <Route path="/home" element={<Home usuario={usuario} setUsuario={setUsuario} />} />
      </Routes>
    </Router>
  );
}

export default App;