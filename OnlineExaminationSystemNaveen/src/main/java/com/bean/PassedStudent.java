package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class PassedStudent {
	@Id
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

}
