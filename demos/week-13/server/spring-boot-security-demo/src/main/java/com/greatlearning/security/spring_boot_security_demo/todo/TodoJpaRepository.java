package com.greatlearning.security.spring_boot_security_demo.todo;

import java.util.List;

import com.greatlearning.security.spring_boot_security_demo.todo.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TodoJpaRepository extends JpaRepository<Todo, Long>{
    List<Todo> findByUsername(String username);
}