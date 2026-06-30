package aprenderugby.proyecto_aprende_rugby.controller;

import java.util.List;
import java.util.Map;
import java.util.HashMap;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
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
// Permitimos que tu Vercel acceda de forma segura a este controlador
@CrossOrigin(origins = "https://aprenderugby-k1hy.vercel.app") 
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
    public ResponseEntity<Map<String, String>> login(@RequestBody Map<String, String> datos) {
        String email = datos.get("email");
        String password = datos.get("password");

        boolean valido = usuarioService.validarLogin(email, password);

        if (valido) {
          
            Map<String, String> respuesta = new HashMap<>();
            respuesta.put("status", "success");
            respuesta.put("email", email);
            return ResponseEntity.ok(respuesta);
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }
}