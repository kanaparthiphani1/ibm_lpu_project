package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Medication;

@Repository
public interface MedicationDao  extends JpaRepository<Medication, Integer>{
	
	@Query
	public Medication findByPatientEmail(String email);

}
