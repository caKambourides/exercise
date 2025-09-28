package com.example.spring_boot;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Products")
public class Product {

    @Id
    private Integer sku;

    private String product;

    public Product() {
    }

    public Product(Integer sku, String product) {
        this.sku = sku;
        this.product = product;
    }

    public Integer getSku() {
        return sku;
    }

    public void setSku(Integer sku) {
        this.sku = sku;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }
}
