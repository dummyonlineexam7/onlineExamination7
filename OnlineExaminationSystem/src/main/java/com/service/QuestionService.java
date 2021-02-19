package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Question;
import com.repository.QuestionRepository;

@Service
public class QuestionService {

	@Autowired
	QuestionRepository qc;
	
	public List<Question> getAllQuestion(){
		return qc.findAll();
	}
	
	public String storeQuestion(Question qq) {
		boolean s= qc.existsById(qq.getQid());
		if(s==true) {
		return "Details cannot be stored";
		}
		else {
			Question q=qc.save(qq);
				return "Details stored";
			
		}
	}
	
	public String updateQuestion(Question qq) {
		boolean n=qc.existsById(qq.getQid());
		if(n) {
			Question q= qc.getOne(qq.getQid());
			q.setQuestion(qq.getQuestion());
			qc.saveAndFlush(q);
		return "Question is updated";
		}
		else {
			return "Cannot be updated";
		}
		
	}
	
	public String deleteQuestion(int id) {
		boolean n=qc.existsById(id);
		if(n) {
			qc.deleteById(id);
			return "Question is deleted";	
			}
		else {
			return "Question doesn't exists";
		}
	}
}
