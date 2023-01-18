package com.example.blex.exceptions;

public class ResourceNotFoundException extends RuntimeException{
    public  ResourceNotFoundException(String message){
            super(message);
    }
}
