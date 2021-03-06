package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Question;
import com.service.QuestionService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;

@RestController
@RequestMapping(value="question")
@Api(value= "Question Resource Details")
public class QuestionController {

	@Autowired
	QuestionService qs;
	
	@GetMapping(value="getQuestion", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Question> getQuestion(){
		List<Question> listOfQue = qs.getAllQuestion();
		return listOfQue;
	}
	
	@PostMapping(value="addQuestion",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeQuestion(@ApiParam(value= "Send Question Object") @RequestBody Question question) {
		return qs.storeQuestion(question);
	}
	
	@PutMapping(value="updateQuestion" ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public String updateQuestion(@ApiParam(value= "Send Question Object") @RequestBody Question question) {
		return qs.updateQuestion(question);
	}
	@DeleteMapping(value="deleteQuestion/{qid}")
	public String deleteQuestion(@ApiParam(value= "Send Question Id")@PathVariable("qid") int questionid) {
		return qs.deleteQuestion(questionid);
	}
	
	@GetMapping(value="getQuestionBylevel/{sname}/{level}")
	public ResponseEntity<List<Question>> getQuestionByLevel(@ApiParam(value = "send subject name and level") @PathVariable("sname") String sname,@PathVariable("level") String level)
	{
		List<Question> list=qs.getQuestionBasedOnLevel(sname,level);
		return ResponseEntity.status(200).body(list);
	}
	
	@GetMapping(value="getNoOfQuestionBylevel/{sname}/{level}")
	public ResponseEntity<List<Question>> getNoOfQuestionByLevel(@ApiParam(value = "send subject name and level") @PathVariable("sname") String sname,@PathVariable("level") String level)
	{
		List<Question> list=qs.getNoOfQuestionByLevel(sname,level);
		return ResponseEntity.status(200).body(list);
	}
}
