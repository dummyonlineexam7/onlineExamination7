package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.service.JoiningService;

import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping(value="joining")
public class JoininigTableController {

	@Autowired
	JoiningService joiningservice;
	@GetMapping(value="details")
	public ResponseEntity<List<Object[]>> getTableJoiningDetails()
	{
		List<Object[]> details=joiningservice.getJoinStudentWithTables();
		
			return ResponseEntity.status(200).body(details);
		
	}
	@GetMapping(value="subQuesCount/{sid}")
	public ResponseEntity<List<Object[]>> getSubjectAndQuestionCount(@ApiParam(value= "Send Subject sid")@PathVariable("sid") int sbid){
		List<Object[]> list= joiningservice.getJoinStudentAndQuestion(sbid);
		return  ResponseEntity.status(200).body(list);
	}
}
