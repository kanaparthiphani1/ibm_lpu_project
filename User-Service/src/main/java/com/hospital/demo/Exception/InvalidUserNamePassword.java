package com.hospital.demo.Exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class InvalidUserNamePassword extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	
	private String message;
	
	
	
}
