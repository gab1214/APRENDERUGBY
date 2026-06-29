package aprenderugby.proyecto_aprende_rugby.testing;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;
import static org.mockito.ArgumentMatchers.any;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import aprenderugby.proyecto_aprende_rugby.entidad.Usuario;
import aprenderugby.proyecto_aprende_rugby.repositorio.RepoUsuario;
import aprenderugby.proyecto_aprende_rugby.services.UsuarioServices;

class UsuarioServiceTest {

    @Mock
    private RepoUsuario usuarioRepositorio;

    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    @InjectMocks      
    private UsuarioServices usuarioService;

    public UsuarioServiceTest() {
        MockitoAnnotations.openMocks(this);
    }

    @Test
    void registrarUsuarioEncriptaPassword() {
        Usuario usuario = new Usuario();
        usuario.setNombre("Nicolas");
        usuario.setEmail("nicolas@test.com");
        usuario.setPassword("1234");

        when(passwordEncoder.encode("1234")).thenReturn("hashed1234");
        when(usuarioRepositorio.save(any(Usuario.class))).thenAnswer(invocation -> invocation.getArgument(0));

        Usuario guardado = usuarioService.registrar(usuario);

        assertEquals("hashed1234", guardado.getPassword());
        verify(usuarioRepositorio, times(1)).save(usuario);
    }
}