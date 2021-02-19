package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Student;
import com.repository.StudentRepository;

@Service
public class StudentService {
@Autowired
StudentRepository studentrepository;

public List<Student> getStudents()
{
	return studentrepository.findAll();
}


public String insertStudent(Student s)
{
	boolean res=studentrepository.existsById(s.getSid());
	if(res==true)
	{
		return "Already Record Is Present";
	}
	else
	{
		Student ss=studentrepository.save(s);
		if(ss!=null) {
		return "Record Inserted Successfully";
		}
		else {
			return "Record Not Inserted";
		}
	}
}


public String deleteStudent(int id)
{
	boolean res=studentrepository.existsById(id);
	if(res==true)
	{
		studentrepository.deleteById(id);
		boolean res1=studentrepository.existsById(id);
		if(res1==false)
		{
		return "Record Deleted Successfully";
		}
		else 
		{
			return "Record Not Deleted";
		}
	}
	else
	{
		return "Record Not Found";
	}
}

public String updateStudent(Student s)
{
	boolean res=studentrepository.existsById(s.getSid());
	if(res==true)
	{
		Student ss=studentrepository.getOne(s.getSid());
		ss.setScore(s.getScore());
		studentrepository.saveAndFlush(ss);
		return "Record Updated Successfully";
	}
	else
	{
		return "Record Not Found";
	}
}

}
