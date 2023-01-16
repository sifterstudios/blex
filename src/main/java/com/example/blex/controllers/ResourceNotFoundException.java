package com.example.blex.controllers;

public class ResourceNotFoundException extends RuntimeException{
    public  ResourceNotFoundException(String message){
            super(message);
    }
}
