import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
  
  const [usuario, setUsuario] = useState(null);

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