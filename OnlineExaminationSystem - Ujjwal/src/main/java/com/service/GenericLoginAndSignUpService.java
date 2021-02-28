package com.service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Login;
import com.repository.LoginAndSignUpDao;
import com.repository.LoginAndSignUpRepository;

@Service
public class GenericLoginAndSignUpService{
	@Autowired
	LoginAndSignUpRepository ls;
	@Autowired
	LoginAndSignUpDao lsd;
	
	/*public String checkLoginService(String username,String password)
	{
	
		List<Login> list=ls.findAll();
		
		List<String> user=list.stream().filter(v->v.getUsername().length()>4).map(m->m.getUsername()).collect(Collectors.toList());
		List<String> pass=list.stream().filter(v->v.getPassword().length()>4).map(m->m.getPassword()).collect(Collectors.toList());
		System.out.println(user);
		//System.out.println(pass);
		//Optional<Object> op=ls.
		List<String> user1=list.stream().flatMap(e->Stream.of(e.getUsername(),e.getPassword())).collect(Collectors.toList());
		//if(user1.forEach(u->u.contains(username)&&u.contains(password) System.out.println("login success")));
		if(user1.contains(username) && user1.contains(password))
		{
			return "Login Succesfull";
		}
		else {
			return "Failed try again";
		}
	}*/
	
	public String checkLoginService(String username,String password)
	{
		
		if(lsd.checkLogin(username, password)>0)
		{
			return "Login Succesfull";
		}
		else {
			return "Failed try again";
		}
	}
	public String signUpService(Login l)
	{
		if(ls.existsById(l.getLogid()))
		{
			return "Already Account Exists";
		}
		else {
			ls.save(l);
			return "Account Registered";
		}
	}
	
	public List<Login> registeredDetails()
	{
		return lsd.getAllRegisteredDetails();
	}
}
