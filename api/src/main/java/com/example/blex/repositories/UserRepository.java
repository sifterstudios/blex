package com.example.blex.repositories;

import com.example.blex.entities.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);

    User findByUsernameAndPassword(String username, String password);

    Optional<User> findOptionalByUsername(String username);

    Boolean existsByUsername(String username);
    Boolean existsByEmail(String email);
}