package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.bean.Login;
import com.service.GenericLoginAndSignUpService;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiParam;

@RestController
@Api(value="Login Resource Details")
@CrossOrigin
public class LoginController {
	@Autowired
	GenericLoginAndSignUpService ls;
	
	@RequestMapping(value="genericlogin", method=RequestMethod.POST)
	public String checkLogin(@RequestBody Login login)
	{
		return ls.checkLoginService(login);
	}
	@RequestMapping(value="signup", method=RequestMethod.POST)
	public String signUp(@ApiParam(value= "Send login Object")@RequestBody Login login)
	{
		return ls.signUpService(login);
	}
	
	@RequestMapping(value="allregistered", method=RequestMethod.GET)
	public List<Login> getAllRegisteredDetails()
	{
		return ls.registeredDetails();
	}
}
