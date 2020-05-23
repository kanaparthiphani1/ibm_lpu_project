package com.example.demo.service;

import java.util.List;

import com.example.demo.model.RoleEntity;

public interface RoleEntityService {
	
	public RoleEntity createRoleEntity(RoleEntity RoleEntity);
	
	public List<RoleEntity> displayRoleEntitys();
	
	public RoleEntity getRoleEntity(Integer id);
	
	public RoleEntity deleteRoleEntity(Integer id);

}
