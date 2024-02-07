package com.fullstack.project.dao;

import java.util.List;

import com.fullstack.project.TypeUser;
import com.fullstack.project.User;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.persistence.TypedQuery;
import jakarta.transaction.Transactional;

public class UserDAOImpl implements UserDAO {
	
	private EntityManager entityManager;
	

	public UserDAOImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	
	@Override
	@Transactional
	public void save(User theUser) {
		if (theUser.getName() == null || theUser.getFirstName() == null || theUser.getEmail() == null) {
	        throw new IllegalArgumentException("Name, first name, and email are required fields.");
	    }

	    if (theUser.getId() == null) {
	        if (!entityManager.contains(theUser.getTypeUser())) {
	            TypeUser managedTypeUser = entityManager.find(TypeUser.class, theUser.getTypeUser().getId());
	            theUser.setTypeUser(managedTypeUser);
	        }
	        entityManager.persist(theUser);
	    } else {
	        entityManager.merge(theUser);
	    }
	}

	@Override
	public List<User> findAll() {
		Query query = entityManager.createQuery("SELECT u FROM User u");
		return query.getResultList();
	}

	@Override
	public User findById(Integer id) {
		return entityManager.find(User.class, id);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		User user = entityManager.find(User.class, id);
		entityManager.remove(user);
	}

	@Override
	public boolean existsByEmail(String email) {
	    Query query = entityManager.createQuery("SELECT COUNT(u) FROM User u WHERE u.email = :email");
	    query.setParameter("email", email);
	    Long count = (Long) query.getSingleResult();
	    return count > 0;
	}
	
}
