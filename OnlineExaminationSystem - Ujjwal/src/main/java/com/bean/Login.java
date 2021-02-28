package com.bean;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="login")
public class Login {
	@Id
private int logid;
private String firstname;
private String lastname;
private String gender;
private int age;
private long phnnumber;
private String username;
private String password;


public int getLogid() {
	return logid;
}


public void setLogid(int logid) {
	this.logid = logid;
}


public String getFirstname() {
	return firstname;
}


public void setFirstname(String firstname) {
	this.firstname = firstname;
}


public String getLastname() {
	return lastname;
}


public void setLastname(String lastname) {
	this.lastname = lastname;
}


public String getGender() {
	return gender;
}


public void setGender(String gender) {
	this.gender = gender;
}


public int getAge() {
	return age;
}


public void setAge(int age) {
	this.age = age;
}


public long getPhnnumber() {
	return phnnumber;
}


public void setPhnnumber(long phnnumber) {
	this.phnnumber = phnnumber;
}


public String getUsername() {
	return username;
}


public void setUsername(String username) {
	this.username = username;
}


public String getPassword() {
	return password;
}


public void setPassword(String password) {
	this.password = password;
}


@Override
public String toString() {
	return "Login [logid=" + logid + ", firstname=" + firstname + ", lastname=" + lastname + ", gender=" + gender
			+ ", age=" + age + ", phnnumber=" + phnnumber + ", username=" + username + ", password=" + password + "]";
}



}
