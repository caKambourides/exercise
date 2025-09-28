package com.example.spring_boot;

import jakarta.persistence.*;

@Entity
@Table(name = "Sales")
public class Sale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "SKU", nullable = false)
    private Product product;

    @Column(nullable = false)
    private Integer quarter;

    @Column(nullable = false)
    private Integer year;

    private Integer america;
    private Integer europe;
    private Integer asia;
    private Integer australia;

    // Constructors
    public Sale() {
    }

    public Sale(Product product, Integer quarter, Integer year, Integer america, Integer europe, Integer asia,
            Integer australia) {
        this.product = product;
        this.quarter = quarter;
        this.year = year;
        this.america = america;
        this.europe = europe;
        this.asia = asia;
        this.australia = australia;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuarter() {
        return quarter;
    }

    public void setQuarter(Integer quarter) {
        this.quarter = quarter;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public Integer getAmerica() {
        return america;
    }

    public void setAmerica(Integer america) {
        this.america = america;
    }

    public Integer getEurope() {
        return europe;
    }

    public void setEurope(Integer europe) {
        this.europe = europe;
    }

    public Integer getAsia() {
        return asia;
    }

    public void setAsia(Integer asia) {
        this.asia = asia;
    }

    public Integer getAustralia() {
        return australia;
    }

    public void setAustralia(Integer australia) {
        this.australia = australia;
    }
}
