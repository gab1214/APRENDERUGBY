import { useState } from 'react';
import '../components/Home.css'; 

export default function AdminPanel({ usuario }) {
  // Lista simulada de usuarios en el estado para poder "expulsarlos" visualmente
  const [listaUsuarios, setListaUsuarios] = useState([
    { id: 1, nombre: "Gabriel", rol: "Admin" },
    { id: 2, nombre: "Diego UCH", rol: "Jugador" },
    { id: 3, nombre: "Felipe DB", rol: "Jugador" }
  ]);

  const expulsarJugador = (id, nombre) => {
    if (confirm(`¿Seguro que deseas expulsar a ${nombre} del club?`)) {
      setListaUsuarios(listaUsuarios.filter(u => u.id !== id));
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-header-title">
        <h2>⚙️ Panel de Control del Club</h2>
        <p className="admin-welcome-text">
          Modo Entrenador: Concedido para <strong>{usuario.email}</strong>
        </p>
      </div>

      {/* TARJETAS DE ESTADÍSTICAS (KPIS) */}
      <div className="admin-stats-grid">
        <div className="stat-card">
          <div className="stat-icon">🏃‍♂️</div>
          <div className="stat-info">
            <h3>Jugadores Totales</h3>
            <p className="stat-number">{listaUsuarios.length + 15}</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏉</div>
          <div className="stat-info">
            <h3>Entrenamientos</h3>
            <p className="stat-number">12</p>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🏆</div>
          <div className="stat-info">
            <h3>Próximos Torneos</h3>
            <p className="stat-number">3</p>
          </div>
        </div>
      </div>

      {/* TABLA DE GESTIÓN */}
      <div className="admin-table-section">
        <h3>Lista de Miembros Registrados</h3>
        <table className="admin-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre del Jugador</th>
              <th>Rol en la Academia</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {listaUsuarios.map((u) => (
              <tr key={u.id}>
                <td>#{u.id}</td>
                <td><strong>{u.nombre}</strong></td>
                <td>
                  <span className={`badge-rol ${u.rol.toLowerCase()}`}>
                    {u.rol}
                  </span>
                </td>
                <td>
                  <span className="badge-status activo">Activo</span>
                </td>
                <td>
                  <div className="admin-actions-btns">
                    <button className="btn-table-edit" onClick={() => alert(`Modificando permisos de ${u.nombre}`)}>
                      Editar Rol
                    </button>
                    <button className="btn-table-delete" onClick={() => expulsarJugador(u.id, u.nombre)}>
                      Expulsar
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}