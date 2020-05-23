package com.example.demo.fallback;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.dto.Appointment;
import com.example.demo.feign.AppointmentClient;

@Component
public class AppointmentFallback implements AppointmentClient{

	@Override
	public Iterable<Appointment> findByDoctorNameAndIsApproved(String doctorName, String approved) {
		// TODO Auto-generated method stub
		return null;
	}

	
}
