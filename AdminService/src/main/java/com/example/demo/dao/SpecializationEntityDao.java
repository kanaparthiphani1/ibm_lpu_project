package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.SpecializationEntity;

@Repository
public interface SpecializationEntityDao extends JpaRepository<SpecializationEntity, Integer>{

}
