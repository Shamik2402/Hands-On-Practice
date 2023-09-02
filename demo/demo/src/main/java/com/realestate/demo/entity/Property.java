package com.realestate.demo.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import org.springframework.stereotype.Component;

@Entity
@Component
@Table(name = "Property Details")
public class Property {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private int propertyId;
    @Column(name = "Address")
    @NotNull
    private String propertyAddress;
    @Column(name = "Price")
    @Min(0)
    private double propertyPrice;
    @Column(name = "Total Bedrooms")
    @Min(value = 1, message = "Enter atleast 1 bedroom")
    private int numberOfBedrooms;
    @Column(name = "Total Bathrooms")
    @Min(1)
    private int numberOfBathrooms;
    @Column(name = "Area")
    @Min(0)
    private double areaSquareFeet;

    public int getPropertyId() {
        return propertyId;
    }

    public void setPropertyId(int propertyId) {
        this.propertyId = propertyId;
    }

    public String getPropertyAddress() {
        return propertyAddress;
    }

    public void setPropertyAddress(String propertyAddress) {
        this.propertyAddress = propertyAddress;
    }

    public double getPropertyPrice() {
        return propertyPrice;
    }

    public void setPropertyPrice(double propertyPrice) {
        this.propertyPrice = propertyPrice;
    }

    public int getNumberOfBedrooms() {
        return numberOfBedrooms;
    }

    public void setNumberOfBedrooms(int numberOfBedrooms) {
        this.numberOfBedrooms = numberOfBedrooms;
    }

    public int getNumberOfBathrooms() {
        return numberOfBathrooms;
    }

    public void setNumberOfBathrooms(int numberOfBathrooms) {
        this.numberOfBathrooms = numberOfBathrooms;
    }

    public double getAreaSquareFeet() {
        return areaSquareFeet;
    }

    public void setAreaSquareFeet(double areaSquareFeet) {
        this.areaSquareFeet = areaSquareFeet;
    }
}
