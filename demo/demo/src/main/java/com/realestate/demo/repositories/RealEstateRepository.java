package com.realestate.demo.repositories;

import com.realestate.demo.entity.Property;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RealEstateRepository extends JpaRepository<Property, Integer> {
}
