package com.realestate.demo;

import com.realestate.demo.entity.Property;
import com.realestate.demo.repositories.RealEstateRepository;
import com.realestate.demo.service.RealEstateService;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class RealEstateServiceTest {

    @Autowired
    private RealEstateService realEstateService;

    @InjectMocks
    private Property property;

    @Test
    public void addNewProperty() {

        property.setPropertyAddress("Baner");
        property.setPropertyPrice(20000);
        property.setAreaSquareFeet(3000);
        property.setNumberOfBedrooms(0);
        property.setNumberOfBathrooms(3);

        String message = this.realEstateService.addNewProperty(property);

        Assertions.assertThat(message).isEqualTo("New property is added successfully");
    }

    @Test
    public void getPropertyById() {
        Property property1 = this.realEstateService.getPropertyById(952).get();

        Assertions.assertThat(property1.getPropertyId()).isEqualTo(952);
    }

    @Test
    public void updatePropertyDetails() {
        this.property.setPropertyAddress("Kothrud");
        this.property.setPropertyPrice(30000);
        this.property.setNumberOfBedrooms(3);
        this.property.setNumberOfBathrooms(4);
        this.property.setAreaSquareFeet(3000);

        System.out.println(this.property);

        Property updatedProperty = this.realEstateService.updatePropertyDetails(this.property,952);

        Assertions.assertThat(updatedProperty.getPropertyAddress()).isEqualTo("Kothrud");
    }

    @Test
    public void deleteProperty() {

        String message = this.realEstateService.deleteProperty(1052);

        Assertions.assertThat(message).isEqualTo("Deleted Successfully");
    }

    @Test
    public void getAveragePriceOfProperties() {

        double averagePrice = this.realEstateService.getAveragePriceOfProperties();

        Assertions.assertThat(averagePrice).isEqualTo(25000.00);
    }

    @Test
    public void getPropertiesWithCertainBedroomsandBathrooms() {

        List<Property> propertyList = this.realEstateService.getPropertiesWithCertainBedroomsandBathrooms(2,4);

        Assertions.assertThat(propertyList.size()).isEqualTo(1);
    }

    @Test
    public void getPropertiesWithinPriceRange() {

        List<Property> propertyList = this.realEstateService.getPropertiesWithinPriceRange(50000 );

        Assertions.assertThat(propertyList.size()).isEqualTo(2);
    }
}
