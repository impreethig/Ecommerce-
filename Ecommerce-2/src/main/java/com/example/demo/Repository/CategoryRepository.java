package com.example.demo.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Entity.Category;
import com.example.demo.Entity.CategoryType;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Long> {

	List<Category> findAll();

	Optional<Category> findAllById(CategoryType categoryType);
}