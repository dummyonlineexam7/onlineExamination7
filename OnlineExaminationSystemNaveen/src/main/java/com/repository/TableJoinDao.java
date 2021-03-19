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
import com.bean.Taketest;
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
		manager.close();
		return list;
	}
	
	public List<Object[]> getQuestionCount(int sbid) {
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select subject.sname ,count(question.sid) as num from subject left join question on subject.sid=question.sid where subject.sid=? group by question.sid");
		qry.setParameter(1,sbid);
		List<Object[]> list=qry.getResultList();
		manager.close();
		return list;
	}
	List<PassedStudent> list1=new ArrayList<>();
	public List<PassedStudent> getTestdetails(){
		list1.clear();
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery(" select t.testid,t.testname,l.firstname,s.sname,s.level,t.noofquestions,t.score,t.status from testdetails t,login l,subject s where t.email=l.email and s.sid=t.sid");
		List<?> list=qry.getResultList();
		Iterator<?> it=list.iterator();
		while(it.hasNext()) {
			Object obj[]=(Object[])it.next();
			PassedStudent ps=new PassedStudent();
			ps.setTestid((int) obj[0]);
			ps.setTestname((String) obj[1]);
			ps.setFirstname((String) obj[2]);
			ps.setSname((String) obj[3]);
			ps.setLevel((String) obj[4]);
			ps.setNoofquestions((int) obj[5]);
			ps.setScore((int) obj[6]);
			ps.setStatus((String) obj[7]);
			list1.add(ps);	
		}
		manager.close();
		return list1;
	}
	public List<PassedStudent> getPassedStudentBasedOnSubjectDao(String sname,String level){
		list1.clear();
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select t.testid,t.testname,l.firstname,s.sname,s.level,t.noofquestions,t.score,t.status from testdetails t,login l,subject s where t.email=l.email and s.sid=t.sid and sname=? and level=? and score>50 order by(score) desc");
		qry.setParameter(1, sname);
		qry.setParameter(2, level);
		List<?> list=qry.getResultList();
		Iterator<?> it=list.iterator();
		while(it.hasNext()) {
			Object obj[]=(Object[])it.next();
			PassedStudent ps=new PassedStudent();
			ps.setTestid((int) obj[0]);
			ps.setTestname((String) obj[1]);
			ps.setFirstname((String) obj[2]);
			ps.setSname((String) obj[3]);
			ps.setLevel((String) obj[4]);
			ps.setNoofquestions((int) obj[5]);
			ps.setScore((int) obj[6]);
			ps.setStatus((String) obj[7]);
			list1.add(ps);	
		}
		//System.out.println(list1);
		manager.close();
		return list1;
	}
	
	
	public List<PassedStudent> getFailedStudentBasedOnSubjectDao(String sname,String level){
		list1.clear();
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select t.testid,t.testname,l.firstname,s.sname,s.level,t.noofquestions,t.score,t.status from testdetails t,login l,subject s where t.email=l.email and s.sid=t.sid and sname=? and level=? and score<50 order by(score) desc");
		qry.setParameter(1, sname);
		qry.setParameter(2, level);
		List<?> list=qry.getResultList();
		Iterator<?> it=list.iterator();
		while(it.hasNext()) {
			Object obj[]=(Object[])it.next();
			PassedStudent ps=new PassedStudent();
			ps.setTestid((int) obj[0]);
			ps.setTestname((String) obj[1]);
			ps.setFirstname((String) obj[2]);
			ps.setSname((String) obj[3]);
			ps.setLevel((String) obj[4]);
			ps.setNoofquestions((int) obj[5]);
			ps.setScore((int) obj[6]);
			ps.setStatus((String) obj[7]);
			list1.add(ps);	
		}
		//System.out.println(list1);
		manager.close();
		return list1;
	}
	
	public List<TestDetails> getTestNotAttempedStudent(){
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select * from login where email not in(select email from testdetails);");
		List<TestDetails> list=qry.getResultList();
		manager.close();
		return list;
	}
	
	List<Taketest> list11=new ArrayList<>();
	
	
	public List<Taketest> getQuestionBasedOnLevel(String sname, String level){
		list11.clear();
		EntityManager manager=emf.createEntityManager();
		
		Query qry=manager.createNativeQuery("select question,optionA,optionB,optionC,optionD,answer from question where sid=(select sid from subject where sname=? and level=?)");
		qry.setParameter(1, sname);
		qry.setParameter(2, level);
		List<?> list=qry.getResultList();
		
		Iterator<?> it=list.iterator();
		while(it.hasNext()) {
			Object obj[]=(Object[])it.next();
			
			Taketest tt= new Taketest();
			
			tt.setQuestion((String)obj[0]);
			tt.setOptionA((String)obj[1]);
			tt.setOptionB((String)obj[2]);
			tt.setOptionC((String)obj[3]);
			tt.setOptionD((String)obj[4]);
			tt.setAnswer((String)obj[5]);
			list11.add(tt);
		}
		manager.close();
		return list11;
	}
	
	public List<Question> getNoOfQuestionByLevel(String sname, String level) {
		EntityManager manager=emf.createEntityManager();
		Query qry=manager.createNativeQuery("select count(question) as noOfQuestion from question where sid=(select sid from subject where sname=? and level=?)");
		qry.setParameter(1, sname);
		qry.setParameter(2, level);
		manager.close();
		return qry.getResultList();
	}

}
