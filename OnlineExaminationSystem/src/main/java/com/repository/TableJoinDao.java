package com.repository;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class TableJoinDao {
	@Autowired
	EntityManagerFactory emf;
	
	public List<Object[]> getJoinStudentWithTestDetailSubject()
	{
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select stu.name,s.sname,td.score from student stu,subject s,testdetails td where stu.stuid=td.stuid and s.sid=td.sid");
		List<Object[]> list=qry.getResultList();
		return list;
	}
	
	public List<Object[]> getQuestionCount(int sbid) {
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select subject.sname ,count(question.sid) as num from subject left join question on subject.sid=question.sid where subject.sid=? group by question.sid");
		qry.setParameter(1,sbid);
		List<Object[]> list=qry.getResultList();
		return list;
	}

}
