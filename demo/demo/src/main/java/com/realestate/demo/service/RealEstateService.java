package com.realestate.demo.service;

import com.realestate.demo.entity.Property;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

public interface RealEstateService {

    public String addNewProperty(Property property);

    public Optional<Property> getPropertyById(int id);

    public Property updatePropertyDetails(Property property, int propertyId);

    public String deleteProperty(int id);

    public double getAveragePriceOfProperties();

    public List<Property> getPropertiesWithCertainBedroomsandBathrooms(int minBedrooms, int minBathrroms);

    public List<Property> getPropertiesWithinPriceRange(double maxBudget);
}
