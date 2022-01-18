package com.example.demo;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


import com.example.demo.model.Doctor;
import com.example.demo.repo.DoctorRepo;
@SpringBootTest
@TestMethodOrder(OrderAnnotation.class)
class ProjectbackendApplicationTests {

	


	@Autowired
	DoctorRepo pRepo;
	
	@Test
	@Order(1)
	public void testCreate () {
		Doctor d = new Doctor();
		d.setAge(10);
		d.setName("ram");
		d.setGender("male");
		d.setAge(34);
		d.setSpecialistfield("psch");
		pRepo.save(d);
		assertNotNull(pRepo.findById(10).get());
	}
		
	private void assertNotNull(Doctor doctor) {
		// TODO Auto-generated method stub
		
	}

	@Test
	@Order(2)
	public void testReadAll () {
		List<Doctor> list = pRepo.findAll();
		assertThat(list).size().isGreaterThan(0);
	}
		
	@Test
	@Order(3)
	public void testRead () {
		Doctor doc = pRepo.findById(10).get();
		assertEquals("ram",doc.getName());
	}
		
	private void assertEquals(String string, String name) {
		// TODO Auto-generated method stub
		
	}

	@Test
	@Order(4)
	public void testUpdate () {
		Doctor p = pRepo.findById(10).get();
		p.setAge(32);
		pRepo.save(p);
		assertNotEquals(30, pRepo.findById(10).get().getAge());
	}
		
	private void assertNotEquals(int i, int age) {
		// TODO Auto-generated method stub
		
	}

	@Test
	@Order(5)
	public void testDelete () {
		pRepo.deleteById(10);
		assertThat(pRepo.existsById(10)).isFalse();
	}
}

