package com.example.blex.repositories;

import com.example.blex.entities.Role;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository {
    Optional<Role> findOptionalByRole(String role);
}
