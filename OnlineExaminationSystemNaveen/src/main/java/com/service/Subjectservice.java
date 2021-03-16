package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Subject;
import com.repository.Subjectrepository;

@Service
public class Subjectservice {

	@Autowired
	Subjectrepository sr;
	
	
	public List<Subject> getAllSubject(){
		return sr.findAll();
	}
	
	
	public String storeSubject(Subject ss) {
		Optional<Subject> op= sr.findById(ss.getSid());
		if(op.isPresent()) 
		{
			return "Recored Already Present";
		}
		else 
		{
			Subject s=sr.save(ss);
			if(s!=null) 
			{
				return "Recored Stored Sucessfully";
			}else 
			{
				return "Recored didn't stored";
			}
		}
	}
	
	public String deleteSubject(int sid) {
		if(sr.existsById(sid)) {
			sr.deleteById(sid);
			return "Record Deleted Successfully";
		}else {
			return "Record not present";
		}
	}
	
	public String updateSubject(Subject s) {
			Optional<Subject> op=sr.findById(s.getSid());
			if(op.isPresent()) 
			{
				Subject ss=op.get();
				ss.setSname(s.getSname());
				ss.setLevel(s.getLevel());
				sr.saveAndFlush(ss);
				return "Recored Updated Successfully";
			}
			else 
			{
				return "Record not present";
			}
			
	}
	
	
	
}
