package com.webshop.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.webshop.service.ProductService;

@RestController()
@RequestMapping("/api/v1/products")
public class ProductController {

    @Autowired
    private ProductService productService;

    //@GetMapping("")

}
