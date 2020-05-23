package com.example.demo.service;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.EnableTransactionManagement;
import org.springframework.transaction.annotation.Transactional;

import com.example.demo.dao.AppointmentDao;
import com.example.demo.model.Appointment;

@Service
@EnableTransactionManagement
public class AppointmentServiceImplement implements AppointmentService{

	
	@Autowired
	private AppointmentDao appointmentDao;
	
	@Override
	@Transactional
	public Appointment createAppointment(Appointment appointment) {
		appointmentDao.save(appointment);
		return appointment;
	}

	@Override
	public List<Appointment> displayAppointments() {
	
		List<Appointment> list = new ArrayList<Appointment>();
		appointmentDao.findAll().forEach(appoint ->
		{ 
			list.add(new Appointment(appoint.getAppointmentId(),
					appoint.getFirstName(),appoint.getLastName(),appoint.getEmail(),appoint.getDate(),appoint.getMobileNumber()
					,appoint.getAge(),appoint.getGender(),appoint.getDescription(),appoint.getDoctorName(),appoint.getDiabetic(),appoint.getApproved())
					);
		});
		return list;
	}

	@Override
	public Appointment getAppointment(Integer id) {
		
		return appointmentDao.findById(id).get();
	}

	@Override
	@Transactional
	public Appointment deleteAppointment(Integer id) {
		Appointment ap = appointmentDao.findById(id).get();
		appointmentDao.delete(ap);
		return ap;
	}

	@Override
	public Iterable<Appointment> findByDoctorName(String doctorName) {
		
		return appointmentDao.findByDoctorName(doctorName);
	}

	@Override
	public Iterable<Appointment> findByDoctorNameAndIsApproved(String doctorName, String approved) {
		return appointmentDao.findByDoctorNameAndApproved(doctorName, approved);

	}

	

	@Override
	public Iterable<Appointment> findByApproved(String approved) {
		
		return appointmentDao.findByApproved(approved);
	}

	@Override
	public Appointment approveAppointment(Integer id) {
		Appointment ap = appointmentDao.findById(id).get();
		ap.setApproved("Yes");
		appointmentDao.save(ap);
		return ap;
	}

	@Override
	public Appointment rejectAppointment(Integer id) {
		Appointment ap = appointmentDao.findById(id).get();
		ap.setApproved("No");
		appointmentDao.save(ap);
		return ap;
	}

	@Override
	public List<Appointment> findByEmail(String email) {
		// TODO Auto-generated method stub
		Iterator<Appointment> it = appointmentDao.findByEmail(email).iterator();
		List<Appointment> li = new ArrayList<Appointment>();
		while(it.hasNext())
		{
			li.add(it.next());
		}
		return li;
	}


}
