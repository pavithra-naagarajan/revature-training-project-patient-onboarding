package com.revature.training.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.revature.training.model.Patient;

import com.revature.training.repository.PatientRepository;


@Service
public class PatientServiceImpl implements PatientService {

	@Autowired
	PatientRepository patientRepository;
	
	@Override
	public boolean addPatient(Patient patient) {
		
		patientRepository.save(patient);
		return true;	
		}

	@Override
	public boolean deletePatient(int patientId) {
		patientRepository.deleteById(patientId);
		return true;
	}

	@Override
	public boolean updatePatient(Patient patient) {
		patientRepository.save(patient);
		return true;
	}

	@Override
	public Patient getPatientById(int patientId) {
		Optional<Patient> patientData = patientRepository.findById(patientId);
		Patient patient = patientData.get();
		return patient;
	}

	@Override
	public List<Patient> getAllPatients() {
		List<Patient> patientList = (List<Patient>) patientRepository.findAll();
		return patientList;
	}

	@Override
	public boolean isPatientExists(int patientId) {
		Optional<Patient> patientData = patientRepository.findById(patientId);
		return patientData.isPresent();
	}

}
