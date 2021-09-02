package com.revature.training.service;

import java.util.List;

import com.revature.training.model.Patient;

public interface PatientService {
	
	public boolean addPatient(Patient patient);
	public boolean deletePatient(int patientId);
	public boolean updatePatient(Patient patient);
	public Patient getPatientById(int patientId);
	//public List<Patient> getPatientByName(String patientName);
	public List<Patient> getAllPatients();
	public boolean isPatientExists(int patientId);


}
