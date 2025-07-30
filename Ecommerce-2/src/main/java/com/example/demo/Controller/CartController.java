package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.Cart;
import com.example.demo.Entity.CartItem;
import com.example.demo.Service.CartService;

@RestController
@RequestMapping("/api/carts")
public class CartController {

    @Autowired
    private CartService cartService;

    @GetMapping("/{customerId}")
    public Cart getCartByCustomerId(@PathVariable Long customerId) {
        return cartService.getCartByCustomerId(customerId);
    }

    @PostMapping("/{customerId}/add")
    public Cart addItemToCart(@PathVariable Long customerId, @RequestBody CartItem cartItem) {
        return cartService.addItemToCart(customerId, cartItem.getProduct().getId(), cartItem.getQuantity());
    }
}
