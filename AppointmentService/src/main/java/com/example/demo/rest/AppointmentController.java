package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Appointment;
import com.example.demo.service.AppointmentService;

@RestController
@CrossOrigin(origins ="*")
@RequestMapping("/api")
public class AppointmentController {

	@Autowired
	private AppointmentService appointmentService;
	
	@PostMapping("/appointments")
	public Appointment createAppointment(@RequestBody Appointment appointment)
	{
		return appointmentService.createAppointment(appointment);
	}
	
	@GetMapping("/appointments")
	public List<Appointment> displayAppointments()
	{
		return appointmentService.displayAppointments();
	}
	
	@GetMapping("/appointments/{id}")
	public Appointment getAppointment(@PathVariable Integer id)
	{
		return appointmentService.getAppointment(id);
	}
	
	@DeleteMapping("/appointments/{id}")	
	public Appointment deleteAppointment(@PathVariable Integer id)
	{
		return appointmentService.deleteAppointment(id);
	}
	
	@GetMapping("/appointments/doctor/{doctorName}")
	public Iterable<Appointment> findByDoctorName(@PathVariable String doctorName)
	{
		return appointmentService.findByDoctorName(doctorName);
	}
	
	@GetMapping("/appointments/doctor/{doctorName}/{approved}")
	public Iterable<Appointment> findByDoctorNameAndIsApproved(@PathVariable String doctorName,@PathVariable String approved)
	{
		return appointmentService.findByDoctorNameAndIsApproved(doctorName,approved);
	}
	
	@GetMapping("/appoint/{email}")
	public List<Appointment> getAppointment(@PathVariable String email)
	{
		return appointmentService.findByEmail(email);		
	}
	
	@GetMapping("/appointments/approved/{approved}")
	public Iterable<Appointment> findByApproved(@PathVariable String approved)
	{
		return appointmentService.findByApproved(approved);
	}
	
	@GetMapping("/appointments/approve/{id}")
	public Appointment approveAppointment(@PathVariable Integer id)
	{
		return appointmentService.approveAppointment(id);
	}

	@GetMapping("/appointments/reject/{id}")
	public Appointment rejectAppointment(@PathVariable Integer id)
	{
		return appointmentService.rejectAppointment(id);
	}

	

	
}
