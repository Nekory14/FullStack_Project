package com.fullstack.project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.fullstack.project.dao.TypeUserDAO;
import com.fullstack.project.dao.UserDAO;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MainController {

	@Autowired
	private UserDAO userDAO;
	
	@Autowired
	private TypeUserDAO typeUserDAO;
	
	@GetMapping("/userList")
	public @ResponseBody List<User> getAllUsers(){
		return userDAO.findAll();
	}
	
	@PostMapping("/userList")
	public ResponseEntity<?> addUser(@RequestBody User user) {
		try {
			userDAO.save(user);
			return ResponseEntity.ok().build();
		} catch (IllegalArgumentException e) {
			return ResponseEntity.badRequest().body(e.getMessage());
		}
	}
	
	@GetMapping("/userList/{id}")
	public ResponseEntity<User> getUserById(@PathVariable Integer id) {
	    User user = userDAO.findById(id);

	    if (user != null) {
	        return ResponseEntity.ok(user);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	
	@DeleteMapping("/userList/{id}")
	void deleteUser(@PathVariable Integer id) {
		userDAO.delete(id);
	}
	
	@GetMapping("/typeUserList")
	public @ResponseBody Iterable<TypeUser> getAllTypeUsers(){
		return typeUserDAO.findAll();
	}
	
	@PostMapping("/typeUserList")
	void addTypeUser(@RequestBody TypeUser typeUser) {
		typeUserDAO.save(typeUser);
	}
	
	@GetMapping("/typeUserList/exists/{type}")
	public ResponseEntity<Boolean> checkIfTypeUserExists(@PathVariable String type) {
	    boolean exists = typeUserDAO.existsByType(type);
	    return ResponseEntity.ok(exists);
	}
	
	@GetMapping("/userList/exists/{email}")
	public ResponseEntity<Boolean> checkIfEmailExists(@PathVariable String email) {
	    boolean exists = userDAO.existsByEmail(email);
	    return ResponseEntity.ok(exists);
	}
	
	@GetMapping("/typeUserList/{id}")
	public ResponseEntity<TypeUser> getTypeUserById(@PathVariable Integer id) {
	    TypeUser typeUser = typeUserDAO.findById(id);

	    if (typeUser != null) {
	        return ResponseEntity.ok(typeUser);
	    } else {
	        return ResponseEntity.notFound().build();
	    }
	}
	
	@DeleteMapping("/typeUserList/{id}")
	void deleteTypeUser(@PathVariable Integer id) {
		typeUserDAO.delete(id);
	}

}
