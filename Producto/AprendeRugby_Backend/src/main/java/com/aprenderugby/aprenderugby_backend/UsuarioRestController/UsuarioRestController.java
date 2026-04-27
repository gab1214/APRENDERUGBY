package com.aprenderugby.aprenderugby_backend.UsuarioRestController;
import java.util.List;

import com.aprenderugby.aprenderugby_backend.Entidades.Usuario;
import com.aprenderugby.aprenderugby_backend.Repositorios.UsuarioRepositorio;
import com.aprenderugby.aprenderugby_backend.Services.UsuarioServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;




//http://localhost:8080/api/usuarios


@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/usuarios")
public class UsuarioRestController {

    @Autowired
    private UsuarioServices usuarioServices;

    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Autowired
    private PasswordEncoder encode;

    @PostMapping
    public ResponseEntity<?> resgistrarUsuario(@RequestBody Usuario usuario) {
        //Verificacion si ya esta registrado el correo
        if (usuarioRepositorio.findbyEmail(usuario.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("El correo ya esta registrado");
        }
        //Encriptar contraseña
        usuario.setPassword(encode.encode(usuario.getPassword()));

        //Guardar usuario
        Usuario nuevo = usuarioRepositorio.save(usuario);
        return ResponseEntity.ok(nuevo);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Usuario> obtenerUsuarioPorId(@PathVariable Long id) {
        Usuario usuario = usuarioServices.obtenerIdUsuario(id);
        return ResponseEntity.ok(usuario);
    }
    @GetMapping
    public ResponseEntity<List<Usuario>> listarUsuario() {
        List<Usuario> usuarios = usuarioServices.listarTodasUsuarios();
        return ResponseEntity.ok(usuarios);
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminarUsuario(@PathVariable Long id) {
        usuarioServices.eliminar(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> actualizarUsuario(@PathVariable Long id, @RequestBody Usuario usuarioActualizado) {
        Usuario usuario = usuarioServices.actualizarUsuario(id, usuarioActualizado);
        return ResponseEntity.ok(usuario);
    }

}