package com.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.TestDetails;
import com.repository.TestDetailsRepository;

@Service
public class TestDetailsService {
	
	
	@Autowired
	TestDetailsRepository tdr;
	
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
