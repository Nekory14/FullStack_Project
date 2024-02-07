package com.fullstack.project.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.fullstack.project.TypeUser;
import com.fullstack.project.User;

import jakarta.persistence.EntityManager;
import jakarta.persistence.Query;
import jakarta.transaction.Transactional;

@Repository
public class TypeUserDAOImpl implements TypeUserDAO {
	
	private EntityManager entityManager;
	

	public TypeUserDAOImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	
	@Override
	@Transactional
	public void save(TypeUser theTypeUser) {
		if(theTypeUser.getId() == null) {
			entityManager.persist(theTypeUser);
		} else {
			entityManager.merge(theTypeUser);
		}
	}

	@Override
	public List<TypeUser> findAll() {
		Query query = entityManager.createQuery("SELECT t FROM TypeUser t");
		return query.getResultList();
	}

	@Override
	public TypeUser findById(Integer id) {
		return entityManager.find(TypeUser.class, id);
	}

	@Override
	@Transactional
	public void delete(Integer id) {
		TypeUser typeUser = entityManager.find(TypeUser.class, id);
		entityManager.remove(typeUser);
	}

	@Override
	public boolean existsByType(String type) {
	    Query query = entityManager.createQuery("SELECT COUNT(t) FROM TypeUser t WHERE t.type = :type");
	    query.setParameter("type", type);
	    Long count = (Long) query.getSingleResult();
	    return count > 0;
	}

}
