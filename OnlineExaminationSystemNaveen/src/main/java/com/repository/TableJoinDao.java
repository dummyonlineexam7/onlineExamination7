package com.repository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.Query;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.bean.PassedStudent;
import com.bean.Question;
import com.bean.TestDetails;

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
	List<PassedStudent> list1=new ArrayList<>();
	public List<PassedStudent> getPassedStudentBasedOnSubjectDao(String sname,String level){
		list1.clear();
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select subject.sname,student.name,testdetails.score,testdetails.status from student join testdetails on student.stuid=testdetails.stuid join subject on subject.sid=testdetails.sid where subject.sname=? and score>50 and subject.level=?;");
		qry.setParameter(1, sname);
		qry.setParameter(2, level);
		List<?> list=qry.getResultList();
		Iterator<?> it=list.iterator();
		while(it.hasNext()) {
			Object obj[]=(Object[])it.next();
			PassedStudent ps=new PassedStudent();
			ps.setSname((String) obj[0]);
			ps.setName((String) obj[1]);
			ps.setScore((int) obj[2]);
			ps.setStatus((String) obj[3]);
			list1.add(ps);	
		}
		//System.out.println(list1);
		return list1;
	}
	
	
	public List<PassedStudent> getFailedStudentBasedOnSubjectDao(String sname,String level){
		list1.clear();
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select subject.sname,student.name,testdetails.score,testdetails.status from student join testdetails on student.stuid=testdetails.stuid join subject on subject.sid=testdetails.sid where subject.sname=? and score<50 and subject.level=?;");
		qry.setParameter(1, sname);
		qry.setParameter(2, level);
		List<?> list=qry.getResultList();
		Iterator<?> it=list.iterator();
		while(it.hasNext()) {
			Object obj[]=(Object[])it.next();
			PassedStudent ps=new PassedStudent();
			ps.setSname((String) obj[0]);
			ps.setName((String) obj[1]);
			ps.setScore((int) obj[2]);
			ps.setStatus((String) obj[3]);
			list1.add(ps);	
		}
		//System.out.println(list1);
		return list1;
	}
	
	public List<TestDetails> getTestNotAttempedStudent(){
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select * from student where stuid not in(select stuid from testdetails);");
		List<TestDetails> list=qry.getResultList();
		return list;
	}
	
	public List<Question> getQuestionBasedOnLevel(String sname, String level){
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select question from question where sid=(select sid from subject where sname=? and level=?)");
		qry.setParameter(1, sname);
		qry.setParameter(2, level);
		List<Question> list=qry.getResultList();
		return list;
	}
	
	public List<Question> getNoOfQuestionByLevel(String sname, String level) {
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select count(question) as noOfQuestion from question where sid=(select sid from subject where sname=? and level=?)");
		qry.setParameter(1, sname);
		qry.setParameter(2, level);
		return qry.getResultList();
	}

}
