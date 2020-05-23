package com.hospital.demo.Service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.hospital.demo.Dao.UserDao;
import com.hospital.demo.model.User;



@Service
@EnableTransactionManagement
@EnableAutoConfiguration
public class UserServiceImpl implements UserService {

	private UserDao userDao;
	
	@Autowired
	public UserServiceImpl(UserDao userDao) {
		super();
		this.userDao = userDao;
	}

	@Override
	public List<User> listAll() {
		// TODO Auto-generated method stub
		Iterator<User> it = userDao.findAll().iterator();
		List<User> li= new ArrayList<User>();
		while(it.hasNext())
		{
			li.add(it.next());
		}
		return li;
	}

	@Override
	public void createUser(User user) {
		// TODO Auto-generated method stub
		userDao.save(user);
	}

	@Override
	public void deleteUser(User user) {
		// TODO Auto-generated method stub
		userDao.delete(user);;
	}

	@Override
	public User showById(int id) {
		// TODO Auto-generated method stub
		return userDao.findById(id).get();
	}

	@Override
	public User showByEmail(String email) {
		// TODO Auto-generated method stub
		return userDao.findByEmail(email);
	}
	
	
	

}
