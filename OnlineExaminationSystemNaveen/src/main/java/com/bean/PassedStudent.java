package com.bean;


public class PassedStudent {
	
private String firstname;
private String sname;
private int score;
private String status;
private String testname;
private int noofquestions;
public String getFirstname() {
	return firstname;
}
public void setFirstname(String firstname) {
	this.firstname = firstname;
}
public String getSname() {
	return sname;
}
public void setSname(String sname) {
	this.sname = sname;
}
public int getScore() {
	return score;
}
public void setScore(int score) {
	this.score = score;
}
public String getStatus() {
	return status;
}
public void setStatus(String status) {
	this.status = status;
}
public String getTestname() {
	return testname;
}
public void setTestname(String testname) {
	this.testname = testname;
}
public int getNoofquestions() {
	return noofquestions;
}
public void setNoofquestions(int noofquestions) {
	this.noofquestions = noofquestions;
}
@Override
public String toString() {
	return "PassedStudent [firstname=" + firstname + ", sname=" + sname + ", score=" + score + ", status=" + status
			+ ", testname=" + testname + ", noofquestions=" + noofquestions + "]";
}



}
