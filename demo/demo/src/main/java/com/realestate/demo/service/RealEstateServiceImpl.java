package com.realestate.demo.service;

import com.realestate.demo.entity.Property;
import com.realestate.demo.repositories.RealEstateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class RealEstateServiceImpl implements RealEstateService{
    @Autowired
    private RealEstateRepository realEstateRepository;
    @Autowired
    private Property property;

    private List<Property> propertyList = new ArrayList<>();

    @Override
    public String addNewProperty(Property property) {
        this.realEstateRepository.save(property);
        return "New property is added successfully";
    }

    @Override
    public Optional<Property> getPropertyById(int id) {
        return this.realEstateRepository.findById(id);
    }

    @Override
    public Property updatePropertyDetails(Property property, int propertyId) {

        Property updatedProperty = this.realEstateRepository.findById(propertyId).get();
        this.realEstateRepository.save(this.property);
        return this.property;
    }

    @Override
    public String deleteProperty(int id) {
        this.realEstateRepository.deleteById(id);
        return "Deleted Successfully";
    }

    @Override
    public double getAveragePriceOfProperties() {

        propertyList = this.realEstateRepository.findAll();

        return propertyList.stream().mapToDouble(Property::getPropertyPrice).average().getAsDouble();
    }

    @Override
    public List<Property> getPropertiesWithCertainBedroomsandBathrooms(int minBedrooms, int minBathrroms) {

        propertyList = this.realEstateRepository.findAll();

        List<Property> propertyListWithRequiredBedroomsAndBathrooms = propertyList.stream()
                .filter(property1 -> property1.getNumberOfBedrooms() >= minBedrooms && property1.getNumberOfBathrooms() >= minBathrroms)
                .collect(Collectors.toList());

        propertyList = null;


        return propertyListWithRequiredBedroomsAndBathrooms;
    }

    @Override
    public List<Property> getPropertiesWithinPriceRange(double maxBudget) {

        propertyList = this.realEstateRepository.findAll();

        List<Property> propertyListWithinGivenBudget = propertyList.stream()
                .filter(property1 -> property1.getPropertyPrice() <= maxBudget)
                .collect(Collectors.toList());

        propertyList = null;

        return propertyListWithinGivenBudget;
    }
}
