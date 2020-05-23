package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.RegisteredEmployeeDao;
import com.example.demo.model.RegisteredEmployee;

@Service
@EnableTransactionManagement
public class RegisteredEmployeeServiceImplement implements RegisteredEmployeeService{

	@Autowired
	private RegisteredEmployeeDao registeredEmployeeDao;
	
	@Override
	@Transactional
	public RegisteredEmployee createEmployee(RegisteredEmployee regEmployee) {
		registeredEmployeeDao.save(regEmployee);
		return regEmployee;
	}

	@Override
	public List<RegisteredEmployee> displayEmployees() {
		List<RegisteredEmployee> list = new ArrayList<RegisteredEmployee>();
	
		registeredEmployeeDao.findAll().forEach(
				emp ->{
						list.add(
								new RegisteredEmployee(emp.getId(),emp.getFirstName(),emp.getLastName(),emp.getAge(),emp.getGender(),
								emp.getEmail(),emp.getPhone(),emp.getRole(),emp.getSpecialization())
								);
					  }
				);
		return list;
	}

	
	
	@Override
	public RegisteredEmployee getEmployee(Integer id) {
		
		return registeredEmployeeDao.findById(id).get();
	}

	
	@Override
	@Transactional
	public RegisteredEmployee deleteEmployee(Integer id) {
		
		RegisteredEmployee emp = registeredEmployeeDao.findById(id).get();
		registeredEmployeeDao.delete(emp);
		return emp;

	}

	
}
