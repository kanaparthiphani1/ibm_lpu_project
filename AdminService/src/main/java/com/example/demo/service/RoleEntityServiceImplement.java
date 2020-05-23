package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.RoleEntityDao;
import com.example.demo.model.RoleEntity;

@Service
@EnableTransactionManagement
public class RoleEntityServiceImplement implements RoleEntityService{
	
	
	@Autowired
	private RoleEntityDao roleEntityDao;


	@Override
	@Transactional
	public RoleEntity createRoleEntity(RoleEntity roleEntity){
		roleEntityDao.save(roleEntity);
		return roleEntity;
	}

	
	@Override
	public List<RoleEntity> displayRoleEntitys() {
		List<RoleEntity> list = new ArrayList<RoleEntity>();
		roleEntityDao.findAll().forEach(
				role->{
					list.add(new RoleEntity(role.getRoleId(),role.getRoleName()));
				}
				);
		return list;
	}

	
	@Override
	public RoleEntity getRoleEntity(Integer id) {
		RoleEntity role = roleEntityDao.findById(id).get();
		return role;
	}
	
	

	@Override
	public RoleEntity deleteRoleEntity(Integer id) {
		RoleEntity role = roleEntityDao.findById(id).get();
		roleEntityDao.delete(role);
		return role;
	}

}
