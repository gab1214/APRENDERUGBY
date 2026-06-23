package aprenderugby.proyecto_aprende_rugby.services;
import java.util.List;
import java.util.Optional;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import aprenderugby.proyecto_aprende_rugby.entidad.Usuario;
import aprenderugby.proyecto_aprende_rugby.repositorio.RepoUsuario;

@Service
public class UsuarioServices {

    private final RepoUsuario usuarioRepositorio;
    private final PasswordEncoder passwordEncoder;

    public UsuarioServices(RepoUsuario usuarioRepositorio, PasswordEncoder passwordEncoder) {
        this.usuarioRepositorio = usuarioRepositorio;
        this.passwordEncoder = passwordEncoder;
    }

    public Usuario registrar(Usuario usuario) {
        usuario.setPassword(passwordEncoder.encode(usuario.getPassword()));
        return usuarioRepositorio.save(usuario);
    }

    public List<Usuario> listar() {
        return usuarioRepositorio.findAll();
    }
    public Optional<Usuario> buscarPorId(Long id) {
    return usuarioRepositorio.findById(id);
}

    public boolean validarLogin(String email, String passwordPlano) {
        Usuario usuario = usuarioRepositorio.findByEmail(email);
        if (usuario == null) {
            return false;
        }
        return passwordEncoder.matches(passwordPlano, usuario.getPassword());
    }
}