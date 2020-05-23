package com.example.demo.service;

import java.util.List;

import com.example.demo.model.Appointment;

public interface AppointmentService {

	public Appointment createAppointment(Appointment appointment);
	
	public List<Appointment> displayAppointments();
	
	public Appointment getAppointment(Integer id);
	
	public Appointment deleteAppointment(Integer id);
	
	public Iterable<Appointment> findByDoctorName(String doctorName);
	
	public Iterable<Appointment> findByDoctorNameAndIsApproved(String doctorName,String approved);
	
	public List<Appointment> findByEmail(String email);
	
	public Iterable<Appointment> findByApproved(String approved);
	
	public Appointment approveAppointment(Integer id);

	public Appointment rejectAppointment(Integer id);

}
