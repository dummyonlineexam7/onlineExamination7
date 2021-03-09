package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.PassedStudent;
import com.bean.TestDetails;
import com.service.TestDetailsService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping(value="test")
@Api(value="TestDetails Resource")
@CrossOrigin
public class TestDetailsController {

	
	@Autowired
	TestDetailsService tds;
	
	@GetMapping(value="gettest", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<TestDetails> getAllDetails()
	{
		return tds.getAllDetails();
	}
	
	@PostMapping(value="storetest", consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeDetails(@ApiParam(value= "Send TestDetails Object")@RequestBody TestDetails testdetails) 
	{
		return tds.storeDetails(testdetails);
	}
	
	@DeleteMapping(value="deletetest/{testid}")
	public String deleteDetails(@ApiParam(value= "Send TestDetails Id")@PathVariable("testid") int testid) 
	{
		return tds.deleteDetails(testid);
	}
	
	@PutMapping(value="updatetest",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String updateDetails(@ApiParam(value= "Send TestDetails Object")@RequestBody TestDetails testdetails) 
	{
		return tds.updateDetails(testdetails);
	}
	
	@GetMapping(value="passedStudentList/{sname}/{level}", produces = MediaType.APPLICATION_JSON_VALUE)
	public  ResponseEntity<List<PassedStudent>> getPassedStudentBasedOnSubject(@ApiParam(value = "send subject name") @PathVariable("sname") String sname, @PathVariable("level") String level)
	{
		List<PassedStudent> list=tds.getPassedStudentBasedOnSubjectService(sname,level);
		return ResponseEntity.status(200).body(list);
	}
	
	@GetMapping(value="failedStudentList/{sname}/{level}")
	public ResponseEntity<List<PassedStudent>> getFailedStudentBasedOnSubject(@ApiParam(value = "send subject name") @PathVariable("sname") String sname,@PathVariable("level") String level)
	{
		List<PassedStudent> list=tds.getFailedStudentBasedOnSubjectService(sname,level);
		return ResponseEntity.status(200).body(list);
	}
	
	@GetMapping(value="testNotAttemped")
	public ResponseEntity<List<TestDetails>> getTestNotAttempedStudent(){
		List <TestDetails> list= tds.getTestNotAttempedStudent();
		return ResponseEntity.status(200).body(list);
	}
	
}
