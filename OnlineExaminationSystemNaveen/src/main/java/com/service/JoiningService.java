package com.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bean.Subject;
import com.repository.TableJoinDao;

@Service
public class JoiningService {
@Autowired
TableJoinDao tablejoindao;

public List<Object[]> getJoinStudentWithTables()
{
	return tablejoindao.getJoinStudentWithTestDetailSubject();
}

public List<Object[]> getJoinStudentAndQuestion(int sbid){
	return tablejoindao.getQuestionCount(sbid);
}
}
