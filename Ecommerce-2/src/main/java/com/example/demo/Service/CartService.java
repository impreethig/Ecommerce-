package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.Entity.Cart;
import com.example.demo.Entity.CartItem;
import com.example.demo.Entity.Product;
import com.example.demo.Exception.ResourceNotFoundException;
import com.example.demo.Repository.CartRepository;
import com.example.demo.Repository.ProductRepository;

@Service
public class CartService {

    @Autowired
    private CartRepository cartRepository;

    @Autowired
    private ProductRepository productRepository;

    public Cart getCartByCustomerId(Long customerId) {
        // Handle optional manually
        Cart cart = cartRepository.findByCustomerId(customerId).orElse(null);
        if (cart == null) {
            throw new ResourceNotFoundException("Cart not found for customer ID: " + customerId);
        }
        return cart;
    }

    @Transactional
    public Cart addItemToCart(Long customerId, Long productId, int quantity) {
        Cart cart = getCartByCustomerId(customerId);
        
        // Handle optional manually
        Cart product = productRepository.findById(productId).orElse(null);
        if (product == null) {
            throw new ResourceNotFoundException("Product not found with ID: " + productId);
        }

        CartItem cartItem = new CartItem();
        cartItem.setProduct(product);
        cartItem.setQuantity(quantity);
        cartItem.setCart(cart);

        cart.getItems().add(cartItem);
        return cartRepository.save(cart);
    }
}
