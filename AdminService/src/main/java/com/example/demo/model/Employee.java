package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;


import com.example.demo.enums.Gender;
import com.example.demo.generators.GeneratePassword;
import com.example.demo.generators.GenerateUserId;
import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Employee")
public class Employee {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Integer id;
	
	@Column(name="firstname")
	String firstName;

	@Column(name="lastname")
	String lastName;
	
	
	Integer age;
	
	
	@Enumerated(EnumType.STRING)
	Gender gender;
	
	String email;
	
	
	Long phone;
	
	@ManyToOne
	@JoinColumn(name = "specid", nullable=false)
	@JsonProperty("specialization")
	private SpecializationEntity specialization;
	
	@ManyToOne
	@JsonProperty("role")
	@JoinColumn(name = "roleid", nullable = false)
	private RoleEntity role;
	
	@Column(name="userid")
	Long userId=Long.parseLong(GenerateUserId.generateId(5));
	
	@Column(name="password")
	String password =  GeneratePassword.generatePassword(8);

	

	
	
	
}
