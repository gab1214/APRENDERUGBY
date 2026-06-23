package aprenderugby.proyecto_aprende_rugby.controller;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import aprenderugby.proyecto_aprende_rugby.entidad.Usuario;
import aprenderugby.proyecto_aprende_rugby.services.UsuarioServices;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {


    private final UsuarioServices usuarioService;

    public UsuarioController(UsuarioServices usuarioService) {
        this.usuarioService = usuarioService;
    }
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerPorId(@PathVariable Long id) {
        return usuarioService.buscarPorId(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }


    @PostMapping
    public Usuario registrar(@RequestBody Usuario usuario) {
        return usuarioService.registrar(usuario);
    }

    @GetMapping
    public List<Usuario> listar() {
        return usuarioService.listar();
    }
    @PostMapping("/login")
public ResponseEntity<String> login(@RequestBody Map<String, String> datos) {
    String email = datos.get("email");
    String password = datos.get("password");

    boolean valido = usuarioService.validarLogin(email, password);

    if (valido) {
        return ResponseEntity.ok("Login exitoso");
    } else {
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Credenciales inválidas");
    }
}

}