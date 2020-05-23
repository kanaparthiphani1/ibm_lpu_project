package com.example.demo.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table
@Data
@NoArgsConstructor
@Getter
@Setter
public class Appointment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="appointmentid")
	private int appointmentId;
	@Column(name="firstname")
	private String firstName;

	@Column(name="lastname")
	private String lastName;
	private String email;
	private Date date;
	@Column(name="mobilenumber")
	private long mobileNumber;
	private int age;
	private String gender;
	private String description;
	
	@Column(name="doctorname")
	private String doctorName;
	String diabetic;
	String approved = "In Progress";
	
	
	public Appointment(int appointmentId,String firstName, String lastName, String email,Date date,long mobileNumber, int age, String gender,
			String description,  String doctorName, String diabetic,String approved) {
		super();
		this.appointmentId = appointmentId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.date= date;
		this.mobileNumber = mobileNumber;
		this.age = age;
		this.gender = gender;
		this.description = description;
		this.doctorName = doctorName;
		this.diabetic = diabetic;
		this.approved= approved;
	}
	
	

}
