package com.example.demo.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.SpecializationEntityDao;
import com.example.demo.model.SpecializationEntity;

@Service
@EnableTransactionManagement
public class SpecializationEntityServiceImplement implements SpecializationEntityService{

	
	@Autowired
	private SpecializationEntityDao specializationEntityDao;

	
	@Override
	@Transactional
	public SpecializationEntity createSpecializationEntity(SpecializationEntity specializationEntity) {
		specializationEntityDao.save(specializationEntity);
		return specializationEntity;
	}

	@Override
	public List<SpecializationEntity> displaySpecializationEntitys() {
		List<SpecializationEntity> list = new ArrayList<SpecializationEntity>();
		
		
		specializationEntityDao.findAll().forEach(spec ->
		{
			list.add(new SpecializationEntity(spec.getSpecId(),spec.getSpecName()));
		});
		return list;
	}

	
	@Override
	public SpecializationEntity getSpecializationEntity(Integer id) {
		
		SpecializationEntity spec =	specializationEntityDao.findById(id).get();
		return spec;
	
	}

	@Override
	@Transactional
	public SpecializationEntity deleteSpecializationEntity(Integer id) {
		SpecializationEntity spec =	specializationEntityDao.findById(id).get();
		specializationEntityDao.delete(spec);
		return spec;
	}

	
}
