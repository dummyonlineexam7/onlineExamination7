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

import com.bean.TestDetails;
import com.service.TestDetailsService;

@RestController
@RequestMapping(value="test")
public class TestDetailsController {

	
	@Autowired
	TestDetailsService tds;
	
	@GetMapping(value="gettest", produces = MediaType.APPLICATION_JSON_VALUE)
	public List<TestDetails> getAllDetails()
	{
		return tds.getAllDetails();
	}
	
	@PostMapping(value="storetest", consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeDetails(@RequestBody TestDetails td) 
	{
		return tds.storeDetails(td);
	}
	
	@DeleteMapping(value="deletetest/{testid}")
	public String deleteDetails(@PathVariable("testid") int testid) 
	{
		return tds.deleteDetails(testid);
	}
	
	@PutMapping(value="updatetest",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String updateDetails(@RequestBody TestDetails td) 
	{
		return tds.updateDetails(td);
	}
	
}
