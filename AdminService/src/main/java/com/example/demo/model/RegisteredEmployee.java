package com.example.demo.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import com.example.demo.enums.Gender;
import com.example.demo.enums.Role;
import com.example.demo.enums.Specialization;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name="Register")
public class RegisteredEmployee {
	
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
	
	@Enumerated(EnumType.STRING)
	Role role;
	
	@Enumerated(EnumType.STRING)
	Specialization specialization;	
}
