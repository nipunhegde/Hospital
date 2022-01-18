package com.example.demo.controller;

import java.util.List;
import java.util.HashMap;

import java.util.Map;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exeception.ResourceNotFoundException;

import com.example.demo.model.Patient1;
import com.example.demo.repo.PatientRepo;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins="*")
public class Patient1Controller {
	@Autowired
	private PatientRepo patientrepo;
	
	@GetMapping("/patients1")
	public List<Patient1> getallPatient(){
		return patientrepo.findAll();
	}
	
	
	@PostMapping("/patients1")
	public Patient1 createPatient(@RequestBody Patient1 patient) {
		return patientrepo.save(patient);
		
	}
	
	// get employee by id rest api
		@GetMapping("/patients1/{id}")
		public ResponseEntity<Patient1> getPatientById(@PathVariable int id) {
			Patient1 pat = patientrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("patient not exist with id :" + id));
			return ResponseEntity.ok(pat);
		}
		
		// update employee rest api
		
		@PutMapping("/patients/{id}")
		public ResponseEntity<Patient1> updatePatient(@PathVariable int id, @RequestBody Patient1 patDetails){
			Patient1 pat = patientrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("patient not exist with id :" + id));
			
			pat.setFirst_Name(patDetails.getFirst_Name());
			pat.setLast_Name(patDetails.getLast_Name());
			pat.setEmail(patDetails.getEmail());
			pat.setGender(patDetails.getGender());
			pat.setAge(patDetails.getAge());
			
			Patient1 updated =patientrepo.save(pat);
			return ResponseEntity.ok(updated);
		}
		
		// delete employee rest api
		@DeleteMapping("/patients1/{id}")
		public ResponseEntity<Map<String, Boolean>>deletePatient(@PathVariable int id){
			Patient1 pat = patientrepo.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
			
			patientrepo.delete(pat);
			Map<String, Boolean> response = new HashMap<>();
			response.put("deleted", Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
		
		
	}
	