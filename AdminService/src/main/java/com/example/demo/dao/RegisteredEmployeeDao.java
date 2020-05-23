package com.example.demo.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.RegisteredEmployee;

@Repository
public interface RegisteredEmployeeDao extends JpaRepository<RegisteredEmployee, Integer> {

}
