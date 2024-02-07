package com.fullstack.project;

import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "type_user")
public class TypeUser {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	@Column(name = "type")
	private String type;

	public TypeUser() {
		
	}

	public TypeUser(Integer id, String type) {
		this.id = id;
		this.type = type;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}

	@Override
	public String toString() {
		return "TypeUser [id=" + id + ", type=" + type + "]";
	}
	
	
}
