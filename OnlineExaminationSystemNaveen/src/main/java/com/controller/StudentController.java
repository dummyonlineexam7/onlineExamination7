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

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping(value="student")
@Api(value="Student Resource Details")
public class StudentController {
@Autowired
StudentService studentservice;


	@GetMapping(value="display")
	public List<Student> getStudentDetails(){
		return studentservice.getStudents();
	}
	
	@PostMapping(value="insert")
	public String insertStudentDetails(@ApiParam(value= "Send Student Object")@RequestBody Student student){
		return studentservice.insertStudent(student);
	}
	
	@PutMapping(value="update")
	public String updateStudentDetails(@ApiParam(value= "Send Student Object")@RequestBody Student student){
		return studentservice.updateStudent(student);
	}
	
	@DeleteMapping(value="delete/{stuid}")
	public String deleteStudentDetails(@ApiParam(value= "Send Student Id")@PathVariable ("stuid") int stuid){
		return studentservice.deleteStudent(stuid);
	}
}
