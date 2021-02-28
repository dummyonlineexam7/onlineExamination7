package com.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
public class LoginController {
	@Autowired
	GenericLoginAndSignUpService ls;
	
	@RequestMapping(value="genericlogin/{username}/{password}", method=RequestMethod.GET)
	public String checkLogin(@PathVariable ("password")String password,@PathVariable ("username") String username)
	{
		return ls.checkLoginService(username, password);
	}
	@RequestMapping(value="signup", method=RequestMethod.POST)
	public String signUp(@ApiParam(value= "Send login Object")@RequestBody Login login)
	{
		return ls.signUpService(login);
	}
}
