package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.MedicationDao;
import com.example.demo.model.Medication;

@Service
@EnableTransactionManagement
public class MedicationServiceImplement implements MedicationService{

	@Autowired
	private MedicationDao medicationDao;

	@Override
	@Transactional
	public Medication createMedication(Medication medication) {
		
		medicationDao.save(medication);
		return medication;	
	}

	@Override
	public Iterable<Medication> getMedications() {
		return medicationDao.findAll();
	}
	
	

	@Override
	@Transactional
	public Medication deleteMedication(Integer id) {
		Medication medic = medicationDao.findById(id).get();
		medicationDao.delete(medic);
		return medic;
	}

	@Override
	public Medication findByEmail(String email) {
		
		return medicationDao.findByPatientEmail(email);
	}

	@Override
	public Medication getMedicationById(Integer id) {
		
		return medicationDao.findById(id).get();
	}
	
	

}
