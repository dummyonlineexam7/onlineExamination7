package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Question;
import com.bean.Student;
import com.bean.Taketest;
import com.repository.QuestionRepository;
import com.repository.Subjectrepository;
import com.repository.TableJoinDao;

@Service
public class QuestionService {

	@Autowired
	QuestionRepository qc;
	
	@Autowired
	Subjectrepository sr;
	@Autowired
	TableJoinDao tjd;
	
	public List<Question> getAllQuestion(){
		return qc.findAll();
	}
	
	public String storeQuestion(Question qq) {
	boolean s= qc.existsById(qq.getQid());
	   if(qq.getQid()<=0) {
		   return "Enter Details";
	   }
	   else if(s==true) {
			return "Question Already exists with this ID";
		}
		else {	
			boolean n = sr.existsById(qq.getSid());
			    if(n) {
				  Question q=qc.save(qq);
		           return "Question Details are stored";
		             }
		     else {
			   return "Question cannot be store as there is no subject with this Sid";
			}
		}
	}
	
	public String updateQuestion(Question qq) {
		//boolean n=qc.existsById(qq.getQid());
		Optional<Question> qo= qc.findById(qq.getQid());
		if(qo.isPresent()) {
			Question q= qc.getOne(qq.getQid());
			//System.out.println(qq.getQuestion());
			q.setQuestion(qq.getQuestion());
			q.setOptionA(qq.getOptionA());
			q.setOptionB(qq.getOptionB());
			q.setOptionC(qq.getOptionC());
		    q.setOptionD(qq.getOptionD());
			q.setAnswer(qq.getAnswer());
			
			qc.saveAndFlush(q);
		return "Question is updated!!!";
		}
		else {
			return "Cannot be updated,Question ID is invalid !!!";
		}
		
	}
	
	public String deleteQuestion(int id) {
		boolean n=qc.existsById(id);
		if(n) {
			qc.deleteById(id);
			return "Question is deleted";	
			}
		else {
			return "Question ID doesn't exists";
		}
	}
	
	public List<Taketest> getQuestionBasedOnLevel(String sname, String level)
	{
		return tjd.getQuestionBasedOnLevel(sname, level);
	}
	
	public List<Question> getNoOfQuestionByLevel(String sname, String level)
	{
		return tjd.getNoOfQuestionByLevel(sname, level);
	}
}
