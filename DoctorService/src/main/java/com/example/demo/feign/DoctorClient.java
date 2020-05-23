package com.example.demo.feign;

import java.util.List;

import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.fallback.DoctorFallback;

@FeignClient(value ="admin-service", fallback = DoctorFallback.class)
public interface DoctorClient {
	
	@GetMapping("api/employeedto/spec/{id}")	
	List<EmployeeDto> displayEmployeeDtoSpec(@PathVariable Integer id);
	
	
	@GetMapping("api/employeedto")
	public List<EmployeeDto> displayEmployeeDtos();
	

}
