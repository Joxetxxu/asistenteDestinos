package com.tfg.controller;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;

class UserControllerTest {

    private UserController controller;

    @BeforeEach
    void setUp() {
        controller = new UserController();
    }

    @AfterEach
    void tearDown() {
        SecurityContextHolder.clearContext();
    }

    @Test
    void getOrganismos_returnsFirstAuthority() {
        User principal = new User("u", "p", List.of(new SimpleGrantedAuthority("ROLE_ADMIN")));
        UsernamePasswordAuthenticationToken auth = new UsernamePasswordAuthenticationToken(principal, "p", principal.getAuthorities());
        SecurityContextHolder.getContext().setAuthentication(auth);

        String result = controller.getOrganismos();

        assertEquals("ROLE_ADMIN", result);
    }
}
