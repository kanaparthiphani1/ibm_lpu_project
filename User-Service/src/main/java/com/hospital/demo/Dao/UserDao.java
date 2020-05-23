package com.hospital.demo.Dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.hospital.demo.model.User;

@Repository
public interface UserDao extends CrudRepository<User, Integer> {

	@Query
	User findByEmail(String username);

}
