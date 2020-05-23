package com.example.demo.fallback;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Component;

import com.example.demo.dto.EmployeeDto;
import com.example.demo.feign.DoctorClient;

@Component
public class DoctorFallback implements DoctorClient{

	@Override
	public List<EmployeeDto> displayEmployeeDtoSpec(Integer id) {
		// TODO Auto-generated method stub
		return new ArrayList<EmployeeDto>();
	}

	@Override
	public List<EmployeeDto> displayEmployeeDtos() {
		// TODO Auto-generated method stub
		return null;
	}

}
