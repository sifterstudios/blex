package com.example.blex.controllers;

import com.example.blex.entities.User;
import com.example.blex.repositories.UserRepository;
import com.example.blex.exceptions.ResourceNotFoundException;
import com.example.blex.exceptions.UserAlreadyExistsException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostMapping("/user/save")
    public User saveUser(@RequestBody User user){
        List<User> users= userRepository.findAll();
        for (User value : users) {
            if (user.getEmail() == value.getEmail()) {
                throw new UserAlreadyExistsException("Email is already in use");
            } else if (user.getUsername() == value.getUsername()) {
                throw new UserAlreadyExistsException("Username is taken");
            }
        }
                return this.userRepository.save(user);
        }

    @GetMapping("/user/all")
    public ResponseEntity<List<User>> getUsers(){
        return ResponseEntity.ok(
                this.userRepository.findAll()
        );
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable(value = "id" ) Long id){
        User user = this.userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found"));
        return  ResponseEntity.ok().body(user);
    }

    @GetMapping("/user/name/{username}")
    public ResponseEntity<User> getUserByName(@PathVariable(value = "username" ) String username){
        User user = this.userRepository.findByUsername(username);
        return  ResponseEntity.ok().body(user);
    }

    @PutMapping("user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable(value = "id") Long id) {
        return this.userRepository.findById(id)
                .map(user -> {
                    user.setUsername(newUser.getUsername());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return this.userRepository.save(user);
                })
                .orElseGet(() -> {
                    newUser.setId(id);
                    return this.userRepository.save(newUser);
                });
    }

    @DeleteMapping("user/{id}")
    public ResponseEntity<Void> removeUser(@PathVariable(value = "id") Long id){
        User user = this.userRepository
                .findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("User not found"+id));
        this.userRepository.delete(user);
        return ResponseEntity.ok().build();
    }
}