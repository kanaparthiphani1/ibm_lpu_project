package com.example.demo.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.EmployeeDao;
import com.example.demo.dto.EmployeeDto;
import com.example.demo.enums.Specialization;
import com.example.demo.model.Employee;
import com.example.demo.model.SpecializationEntity;

@Service
@EnableTransactionManagement
public class EmployeeServiceImplement implements EmployeeService{

	
	@Autowired
	private EmployeeDao employeeDao;
	
	@Override
	@Transactional
	public Employee createEmployee(Employee employee) {
		employeeDao.save(employee);
		return employee;
	}

	@Override
	public List<Employee> displayEmployees() {
		List<Employee> list = new ArrayList<Employee>();
		
		employeeDao.findAll().forEach(
				emp ->{
						list.add(
								new Employee(emp.getId(),emp.getFirstName(),emp.getLastName(),emp.getAge(),emp.getGender(),
								emp.getEmail(),emp.getPhone(),emp.getSpecialization(),emp.getRole(),emp.getUserId(),emp.getPassword())
								);
					  }
				);
		return list;
	}

	@Override
	public Employee getEmployee(Integer id) {

		return employeeDao.findById(id).get();
	}

	@Override
	@Transactional
	public Employee deleteEmployee(Integer id) {
		Employee emp = employeeDao.findById(id).get();
		employeeDao.delete(emp);
		return emp;
	}

	@Override
	public List<Employee> findBySpecialization(Integer id) {
		return employeeDao.findBySpecialization_SpecId(id);
	}

	@Override
	public List<Employee> findByRole(Integer id) {
		return employeeDao.findByRole_RoleId(id);
	}


	@Override
	public List<EmployeeDto> displayEmployeeDtoByRole(Integer id) {
		
		List<EmployeeDto> list1 = new ArrayList<EmployeeDto>();
		
		List <Employee> list =employeeDao.findByRole_RoleId(id);
		
		Iterator<Employee> iter = list.iterator();
		while(iter.hasNext())
		{
			Employee emp = iter.next();
			list1.add(new EmployeeDto(emp.getFirstName(),emp.getLastName(),emp.getAge(),emp.getGender(),
					emp.getEmail(),emp.getPhone()));
		}
		
		return list1;
	}

	@Override
	public List<EmployeeDto> displayEmployeeDtoSpec(Integer id) {
		List<EmployeeDto> list1 = new ArrayList<EmployeeDto>();
		
		List <Employee> list =employeeDao.findBySpecialization_SpecId(id);
		
		Iterator<Employee> iter = list.iterator();
		while(iter.hasNext())
		{
			Employee emp = iter.next();
			list1.add(new EmployeeDto(emp.getFirstName(),emp.getLastName(),emp.getAge(),emp.getGender(),
					emp.getEmail(),emp.getPhone()));
		}
		
		return list1;
	}

	@Override
	public List<EmployeeDto> displayEmployeeDtos() {
		
		List<EmployeeDto> list1 = new ArrayList<EmployeeDto>();
		
		List <Employee> list =employeeDao.findAll();
		
		Iterator<Employee> iter = list.iterator();
		while(iter.hasNext())
		{
			Employee emp = iter.next();
			list1.add(new EmployeeDto(emp.getFirstName(),emp.getLastName(),emp.getAge(),emp.getGender(),
					emp.getEmail(),emp.getPhone()));
		}
		
		return list1;
	}

	@Override
	public Employee findByUserIdAndPassword(Long userId, String password) {
		
		return employeeDao.findByUserIdAndPassword(userId, password);
	}

	@Override
	public EmployeeDto displayByEmail(String email) {
		
		Employee emp =  employeeDao.findByEmail(email);
		EmployeeDto emp1 =  new EmployeeDto(emp.getFirstName(),emp.getLastName(),emp.getAge(),emp.getGender(),
				emp.getEmail(),emp.getPhone());
	return emp1;
		
	}

	@Override
	public int totalEmployees() {
		// TODO Auto-generated method stub
		Iterator<Employee> it= employeeDao.findAll().iterator();
		List<Employee> li = new ArrayList<Employee>();
		int sum=0;
		while(it.hasNext())
		{
			it.next();
			sum=sum+1;
			
		}
		
		return sum;
	}

	@Override
	public int totalDoctors() {
		// TODO Auto-generated method stub
		Iterator<Employee> it= employeeDao.findByRole_RoleId(1).iterator();
		List<Employee> li = new ArrayList<Employee>();
		int sum=0;
		while(it.hasNext())
		{
			it.next();
			sum=sum+1;
			
		}
		
		return sum;
	}
}
