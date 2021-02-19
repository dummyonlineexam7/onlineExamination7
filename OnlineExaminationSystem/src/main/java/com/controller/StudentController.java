package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Student;
import com.service.StudentService;

@RestController
@RequestMapping(value="student")
public class StudentController {
@Autowired
StudentService studentservice;


	@GetMapping(value="display")
	public List<Student> getStudentDetails(){
		return studentservice.getStudents();
	}
	
	@PostMapping(value="insert")
	public String insertStudentDetails(@RequestBody Student s){
		return studentservice.insertStudent(s);
	}
	
	@PutMapping(value="update")
	public String updateStudentDetails(@RequestBody Student s){
		return studentservice.updateStudent(s);
	}
	
	@DeleteMapping(value="delete/{sid}")
	public String deleteStudentDetails(@PathVariable ("sid") int sid){
		return studentservice.deleteStudent(sid);
	}
}
