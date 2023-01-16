package com.example.blex.controllers;

import com.example.blex.User;
import com.example.blex.UserRepository;
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

    @PutMapping("user/{id}")
    public User updateUser(@RequestBody User newUser, @PathVariable(value = "id") Long id){
        return this.userRepository.findById(id)
                .map(user -> {
                    user.setName(newUser.getName());
                    user.setUserName(newUser.getUserName());
                    user.setEmail(newUser.getEmail());
                    user.setPassword(newUser.getPassword());
                    return this.userRepository.save(user);
                })
                .orElseGet(()->{
                    newUser.setUserId(id);
                    return this.userRepository.save(newUser);
                });
    }

    @DeleteMapping("user/{id}")
    public ResponseEntity<Void> removeUser(@PathVariable(value = "id") Long id){
        User user =this.userRepository.findById(id).orElseThrow(
                ()-> new ResourceNotFoundException("User not found"+id));
        this.userRepository.delete(user);
        return ResponseEntity.ok().build();
    }

}
