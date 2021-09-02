package com.revature.training.service;

import java.util.List;


import com.revature.training.model.Doctor;


public interface DoctorService {
	public boolean addDoctor(Doctor doctor);
	public boolean deleteDoctor(int doctorId);
	public boolean updateDoctor(Doctor doctor);
	public Doctor getDoctorById(int doctorId);
	//public List<Patient> getPatientByName(String patientName);
	public List<Doctor> getAllDoctors();
	public boolean isDoctorExists(int doctorId);
}
