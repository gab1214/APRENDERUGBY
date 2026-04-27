package com.aprenderugby.aprenderugby_backend.Repositorios;

import com.aprenderugby.aprenderugby_backend.Entidades.Usuario;

import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface UsuarioRepositorio extends CrudRepository <Usuario, Long> {
    Optional<Usuario> findbyNombre(String nombre);
    Optional<Usuario> findbyEmail(String email);
}
