package com.realestate.demo.service;

import com.realestate.demo.entity.Property;
import com.realestate.demo.repositories.RealEstateRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
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

        propertyList = this.realEstateRepository.findAll();

        for (Property property1:
             propertyList) {
            if(property1.getPropertyId() == propertyId) {

                this.property.setPropertyId(propertyId);
                this.property.setPropertyPrice(property.getPropertyPrice());
                this.property.setPropertyAddress(property.getPropertyAddress());
                this.property.setAreaSquareFeet(property.getAreaSquareFeet());
                this.property.setNumberOfBathrooms(property.getNumberOfBathrooms());
                this.property.setNumberOfBedrooms(property.getNumberOfBedrooms());
                break;
            }
        }

        this.realEstateRepository.save(this.property);
        propertyList = null;
        return this.property;
    }

    @Override
    public String deleteProperty(int id) {
        this.realEstateRepository.deleteById(id);
        return "Deleted Successfully";
    }

    @Override
    public double getAveragePriceOfProperties() {

        double average = 0;
        int totalProperties = 0;
        propertyList = this.realEstateRepository.findAll();

        for (Property property1:
             propertyList) {

            average += property1.getPropertyPrice();
            totalProperties++;
        }
        propertyList = null;

        return average/totalProperties;
    }

    @Override
    public List<Property> getPropertiesWithCertainBedroomsandBathrooms(int minBedrooms, int minBathrroms) {

        propertyList = this.realEstateRepository.findAll();

        List<Property> propertyListWithRequiredBedroomsAndBathrooms = new ArrayList<>();

        for (Property property1:
             propertyList) {

            if(property1.getNumberOfBedrooms() >= minBedrooms && property1.getNumberOfBathrooms() >= minBathrroms) {

                propertyListWithRequiredBedroomsAndBathrooms.add(property1);
            }

        }

        propertyList = null;

        return propertyListWithRequiredBedroomsAndBathrooms;
    }

    @Override
    public List<Property> getPropertiesWithinPriceRange(double maxBudget) {

        propertyList = this.realEstateRepository.findAll();

        List<Property> propertyListWithinGivenBudget = new ArrayList<>();

        for (Property property1:
             propertyList) {

            if(property1.getPropertyPrice() <= maxBudget) {

                propertyListWithinGivenBudget.add(property1);
            }
        }

        propertyList = null;

        return propertyListWithinGivenBudget;
    }
}
