package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.model.Employee;


public interface EmployeeService {
	

	public Employee createEmployee(Employee employee);
	
	public List<Employee> displayEmployees();
	
	public Employee getEmployee(Integer id);
	
	public Employee deleteEmployee(Integer id);
	
	List<Employee> findBySpecialization(Integer id);

	List<Employee> findByRole(Integer id);

	List<EmployeeDto> displayEmployeeDtoByRole(Integer id);

	List<EmployeeDto> displayEmployeeDtoSpec(Integer id);
	
	public List<EmployeeDto> displayEmployeeDtos();
	
	public Employee findByUserIdAndPassword(Long userId, String password);
	
	public EmployeeDto displayByEmail(String email);
	
	public int totalEmployees();
	
	public int totalDoctors();
	

}
