package com.example.demo.service;

import java.util.List;

import com.example.demo.model.RegisteredEmployee;

public interface RegisteredEmployeeService {
		
	public RegisteredEmployee createEmployee(RegisteredEmployee regEmployee);
	
	public List<RegisteredEmployee> displayEmployees();
	
	public RegisteredEmployee getEmployee(Integer id);
	
	public RegisteredEmployee deleteEmployee(Integer id);

}
