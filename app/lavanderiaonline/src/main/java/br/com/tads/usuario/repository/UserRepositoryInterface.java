package br.com.tads.usuario.repository;

import br.com.tads.usuario.entity.UserEntity;

import java.util.List;

public interface UserRepositoryInterface {

    Long createUser(UserEntity user);

    int updateEmployee(UserEntity user);

    UserEntity findById(Long id);

    UserEntity findByEmail(String email);

    List<UserEntity> findEmployees();

    int deleteById(Long id);
}
