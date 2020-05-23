package com.hospital.demo.Exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class PasswordGivenWrong extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	private String message;
	
}
