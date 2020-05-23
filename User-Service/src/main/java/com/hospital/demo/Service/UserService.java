package com.hospital.demo.Service;

import java.util.List;

import com.hospital.demo.model.User;

public interface UserService {

	public List<User> listAll();
	
	public void createUser(User user);
	
	public void deleteUser(User user);
	
	public User showById(int id);
	
	public User showByEmail(String email);
 }
