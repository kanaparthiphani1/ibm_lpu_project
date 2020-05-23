package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.dto.Appointment;
import com.example.demo.dto.EmployeeDto;
import com.example.demo.feign.AppointmentClient;
import com.example.demo.feign.DoctorClient;

@RestController
@EnableAutoConfiguration
@RequestMapping("/api")
public class DoctorController {
	
	@Autowired
	private DoctorClient doctorClient;
	
	@Autowired
	private AppointmentClient appointmentClient;

	@SuppressWarnings({ "rawtypes", "static-access" })
	@GetMapping("/doctors/{id}")
	public ResponseEntity<List<EmployeeDto>> displaydoctors(@PathVariable Integer id)
	{
		return new ResponseEntity(HttpStatus.FOUND).ok(doctorClient.displayEmployeeDtoSpec(id));
	}
	
	
	@GetMapping("/appointments/doctor/{doctorName}")
	public Iterable<Appointment> findByDoctorNameAndIsApproved(@PathVariable String doctorName,@PathVariable String approved)
	{
		return appointmentClient.findByDoctorNameAndIsApproved(doctorName, approved);
	}
	
	
	@GetMapping("/doctors")
	public List<EmployeeDto> displayEmployeeDtos()
	{
		return doctorClient.displayEmployeeDtos();
	}
	

}
