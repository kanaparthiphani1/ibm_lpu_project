package com.example.demo.service;

import org.springframework.web.bind.annotation.RequestBody;

import com.example.demo.model.Medication;

public interface MedicationService {
	
	public Medication createMedication(@RequestBody Medication medication);
	
	public Iterable<Medication> getMedications();
	
	public Medication getMedicationById(Integer id);
	
	public Medication deleteMedication(Integer id);
	
	public Medication findByEmail(String email);
	

}
