package com.example.demo.feign;


import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

import com.example.demo.dto.Appointment;
import com.example.demo.fallback.AppointmentFallback;

@FeignClient(value ="appointment-service", fallback = AppointmentFallback.class)
public interface AppointmentClient {


	@GetMapping("/appointments/doctor/{doctorName}/{approved}")
	public Iterable<Appointment> findByDoctorNameAndIsApproved(@PathVariable String doctorName,@PathVariable String approved);
	
}
