package com.realestate.demo;

import com.realestate.demo.entity.Property;
import com.realestate.demo.repositories.RealEstateRepository;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.List;

@SpringBootTest
public class RealEstateRepositoryTest {
    @Autowired
    private RealEstateRepository realEstateRepository;

    @Test
    public void testSaveProperty() {

        Property property = new Property();

        property.setPropertyAddress("Balewadi");
        property.setPropertyPrice(40000);
        property.setNumberOfBedrooms(3);
        property.setNumberOfBathrooms(2);
        property.setAreaSquareFeet(3000);

        this.realEstateRepository.save(property);

        Assertions.assertThat(property.getPropertyId()).isGreaterThan(0);
    }

    @Test
    public void getPropertyById() {

        Property property = this.realEstateRepository.findById(52).get();

        Assertions.assertThat(property.getPropertyId()).isEqualTo(52);
    }

    @Test
    public void testUpdateMethod() {

        Property property = realEstateRepository.findById(152).get();

        property.setPropertyAddress("Kothrud");

        Property updatedProperty = realEstateRepository.save(property);

        Assertions.assertThat(updatedProperty.getPropertyAddress()).isEqualTo("Kothrud");
    }

    @Test
    public void testDeleteMethod() {

        realEstateRepository.deleteAll();

        List<Property> propertyList = realEstateRepository.findAll();

        Assertions.assertThat(propertyList.size()).isEqualTo(0);
    }
}
