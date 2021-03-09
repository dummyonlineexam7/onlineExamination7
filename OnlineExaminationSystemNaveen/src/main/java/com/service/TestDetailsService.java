package com.service;

import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.PassedStudent;
import com.bean.Question;
import com.bean.Student;
import com.bean.Subject;
import com.bean.TestDetails;
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
	StudentRepository sturep;
	@Autowired
	Subjectrepository subrep;
	@Autowired
	QuestionRepository qrep;
	@Autowired
	TableJoinDao tjd;
	
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
