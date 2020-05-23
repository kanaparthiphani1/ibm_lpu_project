package com.hospital.demo.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PasswordChange {
	
	private String email;
	private String old_password;
	private String new_password;
	private String re_password;

}
