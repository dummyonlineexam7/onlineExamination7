package com.controller;

import java.time.ZonedDateTime;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



@RestController
public class MessageController {
	
	
	public ResponseEntity<Object> message()
	{
		return ResponseEntity.status(404).body(" URL Not Found");
	}
	
	class Full{
		private ZonedDateTime currentTime;
		private String status;
		public ZonedDateTime getcurrentTime() {
			return currentTime;
		}
		public void setcurrentTime(ZonedDateTime currentTime) {
			this.currentTime = currentTime;
		}
		public String getStatus() {
			return status;
		}
		public void setStatus(String status) {
			this.status = status;
		}
		@Override
		public String toString() {
			return "full [currentTime=" + currentTime + ", status=" + status + "]";
		}
		
		
		
	}
	class Half{
		private String status;

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		@Override
		public String toString() {
			return "half [status=" + status + "]";
		}
		
	}

	@GetMapping(value = "/healthcheck")
	public Object healthcheck(@RequestParam String format) {
	    
	    if(format.equals("short"))
	    {
	    	Half half=new Half();
	    	half.setStatus("Ok");
	    return half;
	    }
	    else
	    {
	    	Full full=new Full();
	    	full.setStatus("Ok");
	    	full.setcurrentTime(full.getcurrentTime().now());
	        return full;
	    }
		
	}
	
}
