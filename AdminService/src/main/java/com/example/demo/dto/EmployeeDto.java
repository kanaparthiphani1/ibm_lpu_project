package com.example.demo.dto;


import com.example.demo.enums.Gender;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class EmployeeDto {
	
	String firstName;
	String lastName;
	Integer age;
	Gender gender;
	String email;
	Long phone;

}
