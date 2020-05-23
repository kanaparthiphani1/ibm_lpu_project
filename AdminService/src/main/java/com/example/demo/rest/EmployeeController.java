package com.example.demo.rest;

import java.util.List;

import java.util.HashMap;
import java.util.Map;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.dto.MailRequest;
import com.example.demo.dto.MailResponse;
import com.example.demo.enums.Specialization;
import com.example.demo.model.Employee;
import com.example.demo.model.SpecializationEntity;
import com.example.demo.service.EmailService;
import com.example.demo.service.EmployeeService;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api")
public class EmployeeController {
	
	
	@Autowired
	private EmployeeService employeeService;
	
	@Autowired
	private EmailService service;

	@PostMapping("/sendingEmail")
	public MailResponse sendEmail(@RequestBody MailRequest request) {
		Map<String, Object> model = new HashMap<>();
		model.put("Name", request.getName());
		model.put("location", "Bangalore,India");
		System.out.println(request.getUserId());
		model.put("userId",request.getUserId());
		model.put("password", request.getPassword());
		return service.sendEmail(request, model);

	}
	
	
	
	
	
	@PostMapping(value = "/employees",consumes={"application/json"})
	public Employee createEmployee(@RequestBody Employee employee)
	{
		return employeeService.createEmployee(employee);
	}
	@GetMapping("/employees")
	public List<Employee> displayEmployees()
	{
		return employeeService.displayEmployees();
	}
	
	@GetMapping("/employees/{id}")
	public Employee getEmployee(Integer id)
	{
		return employeeService.getEmployee(id);
	}
	
	@DeleteMapping("/employees/{id}")
	public Employee deleteEmployee(Integer id)
	{
		return employeeService.deleteEmployee(id);
	}
	
	@GetMapping("/employees/spec/{id}")
	List<Employee> findBySpecialization(@PathVariable Integer id)
	{
		return employeeService.findBySpecialization(id);
	}
	
	@GetMapping("/employees/role/{id}")
	List<Employee> findByRole(@PathVariable Integer id)
	{
		return employeeService.findByRole(id);
	}
	
	@GetMapping("/employeedto/role/{id}")	
	List<EmployeeDto> displayEmployeeDtoByRole(@PathVariable Integer id)
	{
		return employeeService.displayEmployeeDtoByRole(id);
	}
	
	@GetMapping("/employeedto/spec/{id}")	
	List<EmployeeDto> displayEmployeeDtoSpec(@PathVariable Integer id)
	{
		return employeeService.displayEmployeeDtoSpec(id);
	}

	@GetMapping("/employeedto")
	public List<EmployeeDto> displayEmployeeDtos()
	{
		return employeeService.displayEmployeeDtos();
	}
	
	
	@GetMapping("/employees/login/{userId}/{password}")
	public Employee findByUserIdAndPassword(@PathVariable Long userId,@PathVariable String password)
	{
		return employeeService.findByUserIdAndPassword(userId, password);
	}
	
	@GetMapping("employeedtoemail/{email}")
 	public EmployeeDto displayByEmail(@PathVariable String email)
	{
		return employeeService.displayByEmail(email);
	}
	
	@GetMapping("doctor/count")
	public int countDoctor()
	{
		return employeeService.totalDoctors();
	}
	
	@GetMapping("employee/count")
	public int countEmp()
	{
		return employeeService.totalEmployees();
	}


}
