package com.realestate.demo.controller;

import com.realestate.demo.entity.Property;
import com.realestate.demo.service.RealEstateService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RealEstateController {
    @Autowired
    private RealEstateService realEstateService;

    @PostMapping("/add")
    public String addNewProperty(@Valid @RequestBody Property property) {
        return this.realEstateService.addNewProperty(property);
    }
    @GetMapping("/find/{id}")
    public Optional<Property> getPropertyById(@PathVariable String id) {
        return this.realEstateService.getPropertyById(Integer.parseInt(id));
    }
    @PutMapping("/update/{id}")
    public Property updatePropertyDetails(@Valid @RequestBody Property property, @PathVariable String id) {
        return this.realEstateService.updatePropertyDetails(property, Integer.parseInt(id));
    }
    @DeleteMapping("/delete/{id}")
    public String deleteProperty(@PathVariable String id) {
        return this.realEstateService.deleteProperty(Integer.parseInt(id));
    }
    @GetMapping("/average")
    public double getAveragePriceOfProperties() {
        return this.realEstateService.getAveragePriceOfProperties();
    }
    @GetMapping("/find")
    public List<Property> getPropertiesWithCertainBedroomsandBathrooms(@RequestParam int minBedrroms, @RequestParam int minBathrooms) {
        return this.realEstateService.getPropertiesWithCertainBedroomsandBathrooms(minBedrroms, minBathrooms);
    }

    @GetMapping("/search")
    public List<Property> getPropertiesWithinPriceRange(@RequestParam double maxBudget) {
        return this.realEstateService.getPropertiesWithinPriceRange(maxBudget);
    }
}
