package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.http.MediaType;
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

@RestController
@RequestMapping(value="question")
public class QuestionController {

	@Autowired
	QuestionService qs;
	
	@GetMapping(value="getQuestion", produces=MediaType.APPLICATION_JSON_VALUE)
	public List<Question> getQuestion(){
		List<Question> listOfQue = qs.getAllQuestion();
		return listOfQue;
	}
	
	@PostMapping(value="addQuestion",consumes=MediaType.APPLICATION_JSON_VALUE)
	public String storeQuestion(@RequestBody Question qq) {
		return qs.storeQuestion(qq);
	}
	
	@PutMapping(value="updateQuestion" ,consumes=MediaType.APPLICATION_JSON_VALUE)
	public String updateQuestion(@RequestBody Question qq) {
		return qs.updateQuestion(qq);
	}
	@DeleteMapping(value="deleteQuestion/{qid}")
	public String deleteQuestion(@PathVariable("qid") int id) {
		return qs.deleteQuestion(id);
	}
}
