package com.example.demo.service;

import java.util.List;

import com.example.demo.model.SpecializationEntity;

public interface SpecializationEntityService {
	
	public SpecializationEntity createSpecializationEntity(SpecializationEntity SpecializationEntity);
	
	public List<SpecializationEntity> displaySpecializationEntitys();
	
	public SpecializationEntity getSpecializationEntity(Integer id);
	
	public SpecializationEntity deleteSpecializationEntity(Integer id);

}
