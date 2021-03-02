package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Login;
import com.bean.Student;
import com.repository.LoginAndSignUpRepository;
import com.repository.StudentRepository;

@Service
public class StudentService {
@Autowired
StudentRepository studentrepository;
@Autowired
LoginAndSignUpRepository lsr;

public List<Student> getStudents()
{
	return studentrepository.findAll();
}


public Optional<Login> getStudentPersonalDetails(int id)
{
	return lsr.findById(id);
}

public String insertStudent(Student s)
{
	boolean res=studentrepository.existsById(s.getStuid());
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
	boolean res=studentrepository.existsById(s.getStuid());
	if(res==true)
	{
		Student ss=studentrepository.getOne(s.getStuid());
		ss.setName(s.getName());
		studentrepository.saveAndFlush(ss);
		return "Record Updated Successfully";
	}
	else
	{
		return "Record Not Found";
	}
}



public String updateStudentProfile(Login l)
{
	
	if(lsr.existsById(l.getLogid()))
	{
		Login ll=lsr.getOne(l.getLogid());
		ll.setFirstname(l.getFirstname());
		ll.setLastname(l.getLastname());
		ll.setGender(l.getGender());
		ll.setAge(l.getAge());
		ll.setPhnnumber(l.getPhnnumber());
		ll.setUsername(l.getUsername());
		ll.setPassword(l.getPassword());
		lsr.saveAndFlush(ll);
		return "Profile Updated Successfully";
	}
	else {
		return "No Match Found";
	}
}
}
