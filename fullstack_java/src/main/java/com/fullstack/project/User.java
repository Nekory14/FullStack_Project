package com.fullstack.project;

import jakarta.persistence.*;

@Entity
@Table(name = "user")
public class User {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;
	
	@ManyToOne(cascade = {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
	@JoinColumn(name = "type_user", referencedColumnName = "type")
	private TypeUser typeUser;
	
	@Column(name = "name", nullable = false)
	private String name;
	
	@Column(name = "first_name", nullable = false)
	private String firstName;
	
	@Column(name = "email", nullable = false)
	private String email;
	
	public User() {
		
	}

	public User(Integer id, TypeUser typeUser, String name, String firstName, String email) {
		this.id = id;
		this.typeUser = typeUser;
		this.name = name;
		this.firstName = firstName;
		this.email = email;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public TypeUser getTypeUser() {
		return typeUser;
	}

	public void setTypeUser(TypeUser typeUser) {
		this.typeUser = typeUser;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	@Override
	public String toString() {
		return "User [id=" + id + ", typeUser=" + typeUser + ", name=" + name + ", firstName=" + firstName + ", email=" + email + "]";
	}

}
