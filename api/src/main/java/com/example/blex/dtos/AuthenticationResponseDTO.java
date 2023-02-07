package com.example.blex.dtos;

public class AuthenticationResponseDTO {
    public AuthenticationResponseDTO(String accessToken) {
        this.accessToken = accessToken;
    }
    private String accessToken;
    private String tokenType = "Bearer ";


    public String getAccessToken() {
        return accessToken;
    }

    public void setAccessToken(String accessToken) {
        this.accessToken = accessToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public void setTokenType(String tokenType) {
        this.tokenType = tokenType;
    }
}
