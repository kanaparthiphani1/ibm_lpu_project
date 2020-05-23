package com.example.demo.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Employee;

@Repository
public interface EmployeeDao extends JpaRepository<Employee, Integer>{
	
	@Query
	public List<Employee> findByRole_RoleId(Integer id);

	@Query
	public List<Employee> findBySpecialization_SpecId(Integer id);

	@Query
	public Employee findByUserIdAndPassword(Long userId, String password);
	
	@Query
	public Employee findByEmail(String email);
	

}