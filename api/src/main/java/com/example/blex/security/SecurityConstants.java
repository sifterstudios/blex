package com.example.blex.security;

public class SecurityConstants {

    public static final long JWT_EXPIRATION = 120_000; //in milliseconds


    //TODO: find alternative to hardcoded secret key
    public static final String JWT_SECRET = "verysecretsecret";
}
