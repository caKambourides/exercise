package com.example.spring_boot;

import org.springframework.data.repository.CrudRepository;
import com.example.spring_boot.Product;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete

public interface SaleRepository extends CrudRepository<Sale, Integer> {

}