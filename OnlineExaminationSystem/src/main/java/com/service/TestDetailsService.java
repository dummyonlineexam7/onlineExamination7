package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Question;
import com.bean.Student;
import com.bean.Subject;
import com.bean.TestDetails;
import com.repository.QuestionRepository;
import com.repository.StudentRepository;
import com.repository.Subjectrepository;
import com.repository.TestDetailsRepository;

@Service
public class TestDetailsService {
	
	
	@Autowired
	TestDetailsRepository tdr;
	
	@Autowired
	StudentRepository sturep;
	@Autowired
	Subjectrepository subrep;
	@Autowired
	QuestionRepository qrep;
	
	public List<TestDetails> getAllDetails(){
		return tdr.findAll();
	}
	
	public String storeDetails(TestDetails td) {
		Optional<TestDetails> op=tdr.findById(td.getTestid());
		if(op.isPresent())
		{
			return "Recored Already Present";
		}
		else
		{
			Optional<Student> stuop=sturep.findById(td.getStuid());
			Optional<Subject> subop=subrep.findById(td.getSid());
			Optional<Question> qop=qrep.findById(td.getQid());
			
			if(stuop.isEmpty())
			{
				return "Student id not present";
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
			tdr.saveAndFlush(t);
			return "Recored updated Successfully";
		}
		else
		{
			return "Recored not present";
		}
	}
	

}
