package com.fullstack.project;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.fullstack.project.dao.UserDAO;
import com.fullstack.project.dao.UserDAOImpl;

import jakarta.persistence.EntityManager;

@Configuration
public class RepositoryConfig {
	
	@Bean
	public UserDAO userDAO(EntityManager entityManager) {
		return new UserDAOImpl(entityManager);
	}

}
