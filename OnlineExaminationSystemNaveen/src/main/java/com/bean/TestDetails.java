package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="testdetails")
public class TestDetails {

	@Id
	private int testid;
	private int score;
	private int sid;
	private int qid;
	private String status;
	private int noofquestions;
	private String email;
	private String testname;
	public int getTestid() {
		return testid;
	}
	public void setTestid(int testid) {
		this.testid = testid;
	}
	public int getScore() {
		return score;
	}
	public void setScore(int score) {
		this.score = score;
	}
	public int getSid() {
		return sid;
	}
	public void setSid(int sid) {
		this.sid = sid;
	}
	public int getQid() {
		return qid;
	}
	public void setQid(int qid) {
		this.qid = qid;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public int getNoofquestions() {
		return noofquestions;
	}
	public void setNoofquestions(int noofquestions) {
		this.noofquestions = noofquestions;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getTestname() {
		return testname;
	}
	public void setTestname(String testname) {
		this.testname = testname;
	}
	@Override
	public String toString() {
		return "TestDetails [testid=" + testid + ", score=" + score + ", sid=" + sid + ", qid=" + qid + ", status="
				+ status + ", noofquestions=" + noofquestions + ", email=" + email + ", testname=" + testname + "]";
	}
	
	
	
	
	
}
