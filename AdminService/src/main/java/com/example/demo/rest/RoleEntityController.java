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

import com.example.demo.model.RoleEntity;
import com.example.demo.service.RoleEntityService;



@CrossOrigin(origins ="*")
@RestController
@RequestMapping("/api")
public class RoleEntityController {
	
	
	@Autowired
	private RoleEntityService roleEntityService;
	
	
	@PostMapping(value = "/roles",consumes={"application/json"})
	public RoleEntity createRoleEntity(@RequestBody RoleEntity roleEntity)
	{
		return roleEntityService.createRoleEntity(roleEntity);
	}
	
	
	@GetMapping("/roles")
	public List<RoleEntity> displayRoleEntitys()
	{
		return roleEntityService.displayRoleEntitys();
	}
	
	
	@GetMapping("/roles/{id}")	
	public RoleEntity getRoleEntity(Integer id)
	{
		return roleEntityService.getRoleEntity(id);
	}
	
	@DeleteMapping("/roles/{id}")
	public RoleEntity deleteRoleEntity(Integer id)
	{
		return null;
	}

	

}
