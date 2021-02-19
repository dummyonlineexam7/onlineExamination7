package com.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MessageController {

	@GetMapping(value="/**")
	public ResponseEntity<Object> message()
	{
		return ResponseEntity.status(404).body(" URL Not Found");
	}
}
