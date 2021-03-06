package com.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bean.Subject;

@Repository
public interface Subjectrepository extends JpaRepository<Subject, Integer>  {

	
}
