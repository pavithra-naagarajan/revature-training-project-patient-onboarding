package com.revature.training.repository;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;


import com.revature.training.model.Patient;


@EnableJpaRepositories
public interface PatientRepository extends CrudRepository<Patient, Integer> {

}
