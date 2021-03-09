package com.bean;


public class PassedStudent {
	
private String sname;
private String name;
private int score;
private String status;

public String getSname() {
	return sname;
}
public void setSname(String sname) {
	this.sname = sname;
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
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
public PassedStudent() {
	super();
	// TODO Auto-generated constructor stub
}
@Override
public String toString() {
	return "PassedStudent [sname=" + sname + ", name=" + name + ", score=" + score + ", status=" + status + "]";
}

}
