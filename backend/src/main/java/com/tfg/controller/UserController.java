package com.tfg.controller;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @GetMapping("/perfil")
    public String getOrganismos() {
        User x = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return x.getAuthorities().stream().findFirst().get().getAuthority();
    }

}
