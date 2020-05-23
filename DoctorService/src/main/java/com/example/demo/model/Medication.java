package com.example.demo.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table
public class Medication {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="medicationid")
	int medicationId;
	
	@Column(name="doctorname")
	String doctorName;
	
	@Column(name="doctorid")
	long doctorId;
	
	@Column(name="patientname")	
	String patientName;
	
	@Column(name="patientemail")
	String patientEmail;
	@Column(name="patientgender")
	String patientGender;
	
	String medication;

}
