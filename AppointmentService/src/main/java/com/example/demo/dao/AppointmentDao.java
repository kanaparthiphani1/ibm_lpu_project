package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Appointment;

@Repository
public interface AppointmentDao extends JpaRepository<Appointment, Integer>{

	@Query
	public Iterable<Appointment> findByDoctorName(String doctorName);
	
	@Query
	public Iterable<Appointment> findByDoctorNameAndApproved(String doctorName,String approved);
	
	@Query
	public Iterable<Appointment> findByEmail(String email);
	
	@Query
	public Iterable<Appointment> findByApproved(String approved);
	
	
	
}
