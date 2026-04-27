package com.aprenderugby.aprenderugby_backend.Services;

import com.aprenderugby.aprenderugby_backend.Entidades.Usuario;
import com.aprenderugby.aprenderugby_backend.Repositorios.UsuarioRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



import java.util.List;

@Service
class UsuarioService implements UsuarioServices {
    @Autowired
    private UsuarioRepositorio usuarioRepositorio;

    @Override
    public Usuario guardarUsuario(Usuario usuario) {
        return null;
    }

    @Override
    public Usuario crearUsuario(Usuario usuario) {
        return null;
    }

    @Override
    public Usuario obtenerIdUsuario(Long id) {
        return null;
    }

    @Override
    public List<Usuario> listarTodasUsuarios() {
        return List.of();
    }

    @Override
    public void eliminar(Long id) {

    }

    @Override
    public Usuario actualizarUsuario(Long id, Usuario usuarioActualizado) {
        return null;
    }
}

