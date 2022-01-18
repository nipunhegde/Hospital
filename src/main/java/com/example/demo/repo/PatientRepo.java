package com.example.demo.repo;





import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.model.Patient1;
@Repository
public interface PatientRepo  extends JpaRepository<Patient1, Integer> {

}
