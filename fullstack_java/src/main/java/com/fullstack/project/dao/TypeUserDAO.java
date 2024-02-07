package com.fullstack.project.dao;

import java.util.List;

import com.fullstack.project.TypeUser;

public interface TypeUserDAO {
	
	void save(TypeUser theTypeUser);
	
	List<TypeUser> findAll();
	
	TypeUser findById(Integer id);
	
	void delete(Integer id);
	
	boolean existsByType(String type);

}
