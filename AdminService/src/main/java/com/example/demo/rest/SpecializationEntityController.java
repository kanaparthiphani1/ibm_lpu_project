package com.example.demo.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.SpecializationEntity;
import com.example.demo.service.SpecializationEntityService;

@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api")
public class SpecializationEntityController {
	
	
	@Autowired
	private SpecializationEntityService specializationEntityService;
	
	
	@PostMapping(value = "/specs",consumes={"application/json"})
	public SpecializationEntity createSpecializationEntity(@RequestBody SpecializationEntity specializationEntity)
	{
		return specializationEntityService.createSpecializationEntity(specializationEntity);
	}
	
	@GetMapping("/specs")
	public List<SpecializationEntity> displaySpecializationEntitys()
	{
		return specializationEntityService.displaySpecializationEntitys();
	}
	
	@GetMapping("/specs/{id}")	
	public SpecializationEntity getSpecializationEntity(Integer id)
	{
		return specializationEntityService.getSpecializationEntity(id);
	}
	
	@DeleteMapping("/specs/{id}")
	public SpecializationEntity deleteSpecializationEntity(Integer id)
	{
		return specializationEntityService.deleteSpecializationEntity(id);
	}


}
