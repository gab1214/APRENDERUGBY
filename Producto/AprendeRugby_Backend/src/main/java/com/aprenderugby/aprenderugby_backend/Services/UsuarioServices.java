package com.aprenderugby.aprenderugby_backend.Services;
import com.aprenderugby.aprenderugby_backend.Entidades.Usuario;

import java.util.List;

public interface UsuarioServices {
    Usuario guardarUsuario(Usuario usuario);
    Usuario crearUsuario(Usuario usuario);
    Usuario obtenerIdUsuario(Long id);
    List<Usuario> listarTodasUsuarios();
    void eliminar(Long id);
    Usuario actualizarUsuario(Long id, Usuario usuarioActualizado);
}
