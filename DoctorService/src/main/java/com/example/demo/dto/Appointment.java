package com.example.demo.dto;

import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@NoArgsConstructor
@Getter
@Setter
public class Appointment {
	
	private int appointmentId;
	private String firstName;
	private String lastName;
	private String email;
	private long mobileNumber;
	private int age;
	private String gender;
	private String description;
	private String regularity;
	private String doctorName;
	boolean isDiabetic;

}
