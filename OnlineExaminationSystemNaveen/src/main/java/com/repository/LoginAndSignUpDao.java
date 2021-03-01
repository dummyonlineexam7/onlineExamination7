package com.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.Login;

@Repository
public class LoginAndSignUpDao {
	@Autowired
	EntityManagerFactory emf;
	
	public int checkLogin(String username,String password)
	{
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select username,password from login where username=:user1 and password=:pass1");
		qry.setParameter("user1", username);
		qry.setParameter("pass1", password);
		List<String> user=qry.getResultList();
		if(user.isEmpty())
		{
			return 0;
		}
		else
		{
			return 1;
		}
	}

	public List<Login> getAllRegisteredDetails()
	{
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select firstname,lastname,gender,age,phnnumber from login");
		return qry.getResultList();
	}
}

