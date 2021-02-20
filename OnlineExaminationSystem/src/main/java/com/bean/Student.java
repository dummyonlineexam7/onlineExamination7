package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="student")
public class Student {
	@Id
private int stuid;
private String sname;
public int getStuid() {
	return stuid;
}
public void setStuid(int stuid) {
	this.stuid = stuid;
}
public String getSname() {
	return sname;
}
public void setSname(String sname) {
	this.sname = sname;
}

public Student() {
	super();
	// TODO Auto-generated constructor stub
}
@Override
public String toString() {
	return "Student [stuid=" + stuid + ", sname=" + sname + "]";
}


}
