package com.service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Login;
import com.bean.PassedStudent;
import com.bean.Question;
import com.bean.Student;
import com.bean.Subject;
import com.bean.TestDetails;
import com.repository.LoginAndSignUpRepository;
import com.repository.QuestionRepository;
import com.repository.StudentRepository;
import com.repository.Subjectrepository;
import com.repository.TableJoinDao;
import com.repository.TestDetailsRepository;

@Service
public class TestDetailsService {
	
	
	@Autowired
	TestDetailsRepository tdr;
	@Autowired
	LoginAndSignUpRepository lr;
	@Autowired
	Subjectrepository subrep;
	@Autowired
	QuestionRepository qrep;
	@Autowired
	TableJoinDao tjd;
	
	public List<PassedStudent> getAllDetails(){
		return tjd.getTestdetails();
	}
	
	public String storeDetails(TestDetails td) {
		
		//id=id+1;
		//td.setTestid(id);
		//System.out.println("id:"+id+"testid "+td.getTestid());
		Optional<TestDetails> op=tdr.findById(td.getTestid());
		if(op.isPresent())
		{
			return "Recored Already Present";
		}
		else
		{
			Optional<Login> lrop=lr.findById(td.getEmail());
			Optional<Subject> subop=subrep.findById(td.getSid());
			Optional<Question> qop=qrep.findById(td.getQid());
			
			if(lrop.isEmpty())
			{
				return "Candidate id not present";
			}
			else if(subop.isEmpty())
			{
				return "subject id not present";
			}
			else if(qop.isEmpty())
			{
				return "question is not present";
			}
			else
			{
				if(td.getScore()>60)
				{
					td.setStatus("Passed");
				}
				else {
					td.setStatus("Failed");
				}
				TestDetails t=tdr.save(td);
				if(t!=null)
				{
					return "Recored stored successfully";
				}
				else
				{
					return "Recored didn't stored";
				}
			}
			
			
		}
	}
	
	
	public String deleteDetails(int testId) {
		if(tdr.existsById(testId))
		{
			tdr.deleteById(testId);
			return "Recored Deleted Successfully";
		}
		else 
		{
			return "Recored not present";
		}
	}
	
	
	public String updateDetails(TestDetails td) {
		Optional<TestDetails> op=tdr.findById(td.getTestid());
		if(op.isPresent())
		{
			TestDetails t=op.get();
			t.setScore(td.getScore());
			t.setNoofquestions(td.getNoofquestions());
			t.setStatus(td.getStatus());
			t.setTestname(td.getTestname());
			tdr.saveAndFlush(t);
			return "Recored updated Successfully";
		}
		else
		{
			return "Recored not present";
		}
	}
	
	public List<PassedStudent> getPassedStudentBasedOnSubjectService(String sname,String level){
		return tjd.getPassedStudentBasedOnSubjectDao(sname,level);
		//return tjd.getPassedStudentBasedOnSubject(sname).stream().sorted((s1,s2)->s1.getScore()-s2.getScore()).collect(Collectors.toList());
	}
	
	public List<PassedStudent> getFailedStudentBasedOnSubjectService(String sname,String level){
		return tjd.getFailedStudentBasedOnSubjectDao(sname,level);
		//return tjd.getFailedStudentBasedOnSubject(sname).stream().sorted((s1,s2)->s1.getScore()-s2.getScore()).collect(Collectors.toList());
	}
	
	public List<TestDetails> getTestNotAttempedStudent(){
		return tjd.getTestNotAttempedStudent().stream().collect(Collectors.toList());
	}

}
