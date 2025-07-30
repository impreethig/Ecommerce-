package com.example.demo.Repository;

import java.util.List;
import java.util.Optional;

import com.example.demo.Entity.Cart;
import com.example.demo.Entity.Product;

public interface ProductRepository {

	Optional<Cart> findById(Long productId);

	void deleteById(Long id);

	Product save(Product product);

	List<Product> findAll();

}
