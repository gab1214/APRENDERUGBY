import { useState } from 'react';
import '../components/Home.css';

export default function ChatGlobal({ usuario, mensajes, setMensajes }) {
  const [nuevoMensaje, setNuevoMensaje] = useState("");

  const enviarMensaje = (e) => {
    e.preventDefault();
    if (!nuevoMensaje.trim()) return;
    
    const mensajeNuevo = {
      id: mensajes.length + 1,
      user: usuario || "Invitado",
      text: nuevoMensaje
    };
    setMensajes([...mensajes, mensajeNuevo]);
    setNuevoMensaje("");
  };

  return (
    <div className="chat-container">
      <h2>💬 Chat Global de la Comunidad</h2>
      <div className="chat-box">
        {mensajes.map((m) => (
          <div key={m.id} className={`chat-message ${m.user === usuario ? 'my-message' : ''}`}>
            <strong>{m.user}:</strong> <span>{m.text}</span>
          </div>
        ))}
      </div>
      <form onSubmit={enviarMensaje} className="chat-form">
        <input 
          type="text" 
          placeholder={usuario ? "Escribe un mensaje al equipo..." : "Inicia sesión para chatear"} 
          value={nuevoMensaje}
          onChange={(e) => setNuevoMensaje(e.target.value)}
          disabled={!usuario} // Bloqueado para invitados externos
        />
        <button type="submit" disabled={!usuario}>Enviar</button>
      </form>
    </div>
  );
}