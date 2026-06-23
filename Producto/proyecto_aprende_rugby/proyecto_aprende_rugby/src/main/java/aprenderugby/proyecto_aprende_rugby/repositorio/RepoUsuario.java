package aprenderugby.proyecto_aprende_rugby.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;

import aprenderugby.proyecto_aprende_rugby.entidad.Usuario;

public interface RepoUsuario extends JpaRepository<Usuario, Long> {
    Usuario findByEmail(String email);
}