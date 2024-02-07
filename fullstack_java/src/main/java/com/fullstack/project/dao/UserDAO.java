package com.fullstack.project.dao;

import java.util.List;

import com.fullstack.project.User;

public interface UserDAO {
	
	void save(User theUser);
	
	List<User> findAll();

	User findById(Integer id);
	
	void delete(Integer id);
	
	boolean existsByEmail(String email);

}
