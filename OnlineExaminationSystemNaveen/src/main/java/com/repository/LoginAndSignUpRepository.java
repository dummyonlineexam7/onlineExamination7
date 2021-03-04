package com.repository;

import java.util.List;

import org.springframework.boot.autoconfigure.data.web.SpringDataWebProperties.Pageable;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.bean.Login;

public interface LoginAndSignUpRepository extends JpaRepository<Login, String> {

	@Query(value = "SELECT firstname,lastname,gender,age,phnnumber FROM Login l")
	List<Login> registeredDetails();
}
