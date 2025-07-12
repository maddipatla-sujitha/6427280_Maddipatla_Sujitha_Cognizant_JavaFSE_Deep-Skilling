package com.example.jwtauthservice.controller;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.SignatureAlgorithm;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {

    private static final Logger LOGGER = LoggerFactory.getLogger(AuthenticationController.class);

    // Secret key must be 32 bytes for HS256
    private static final String SECRET_KEY = "my-very-secret-key-1234567890123456";

    @GetMapping("/authenticate")
    public Map<String, String> authenticate(@RequestHeader("Authorization") String authHeader) {
        LOGGER.info("START authenticate");
        LOGGER.debug("Authorization Header: {}", authHeader);

        String user = getUser(authHeader);
        LOGGER.debug("Extracted User: {}", user);

        String token = generateJwt(user);
        Map<String, String> map = new HashMap<>();
        map.put("token", token);

        LOGGER.info("END authenticate");
        return map;
    }

    private String getUser(String authHeader) {
        LOGGER.debug("START getUser");

        // Remove "Basic " prefix and decode
        String encodedCredentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(encodedCredentials);
        String decodedCredentials = new String(decodedBytes);
        LOGGER.debug("Decoded credentials: {}", decodedCredentials);

        // Extract username (before colon)
        String username = decodedCredentials.split(":")[0];

        LOGGER.debug("END getUser");
        return username;
    }

    private String generateJwt(String user) {
        LOGGER.debug("START generateJwt");

        // Generate signing key
        Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes());

        String token = Jwts.builder()
                .setSubject(user)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + 20 * 60 * 1000)) // 20 minutes
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();

        LOGGER.debug("Generated Token: {}", token);
        LOGGER.debug("END generateJwt");

        return token;
    }
}
