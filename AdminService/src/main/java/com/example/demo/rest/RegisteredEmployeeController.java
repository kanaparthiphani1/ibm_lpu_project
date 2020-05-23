package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.RegisteredEmployee;
import com.example.demo.service.RegisteredEmployeeService;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api/register")
public class RegisteredEmployeeController {

	@Autowired
	private RegisteredEmployeeService registeredEmployeeService;
	
	
	@PostMapping("/employees")
	public RegisteredEmployee createEmployee(@RequestBody RegisteredEmployee regEmployee)
	{
		return registeredEmployeeService.createEmployee(regEmployee);
	}
	
	
	@GetMapping("/employees")
	public List<RegisteredEmployee> displayEmployees()
	{
		return registeredEmployeeService.displayEmployees();
	}
	
	
	@GetMapping("/employees/{id}")
	public RegisteredEmployee getEmployee(@PathVariable Integer id)
	{
		return registeredEmployeeService.getEmployee(id);
	}
	
	@DeleteMapping("/employees/{id}")
	public RegisteredEmployee deleteEmployee(@PathVariable Integer id)
	{
		return registeredEmployeeService.deleteEmployee(id);	
	}
	
	
}
