package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Subject;
import com.service.Subjectservice;

@RestController
@RequestMapping(value="subject")
public class Subjectcontroller {
	
	Subject s=new Subject();
	@Autowired
	Subjectservice ss;
	
	
	@GetMapping(value="getsubject", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<Subject> getAllSubjects()
	{
		return ss.getAllSubject();
	}
	
	@PostMapping(value="storesubject", consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeSubject(@RequestBody Subject s) 
	{
		return ss.storeSubject(s);
	}
	
	@DeleteMapping(value="deletesubject/{sid}")
	public String deleteSubject(@PathVariable("sid") int sid) 
	{
		return ss.deleteSubject(sid);
	}
	
	@PutMapping(value="updatesubject",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String updateSubject(@RequestBody Subject s) 
	{
		return ss.updateSubject(s);
	}

}
