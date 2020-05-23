package com.hospital.demo.Controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hospital.demo.Exception.EmailAlreadytakenException;
import com.hospital.demo.Exception.InvalidUserNamePassword;
import com.hospital.demo.Exception.PasswordGivenWrong;
import com.hospital.demo.Service.EmailService;
import com.hospital.demo.Service.UserService;
import com.hospital.demo.model.AuthRequest;
import com.hospital.demo.model.MailRequest;
import com.hospital.demo.model.MailResponse;
import com.hospital.demo.model.PasswordChange;
import com.hospital.demo.model.User;
import com.hospital.demo.util.JwtUtil;


@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	
	private UserService userService;


	@Autowired
	private BCryptPasswordEncoder passwordEncoder;
	
	 @Autowired
	    private JwtUtil jwtUtil;
	    @Autowired
	    private AuthenticationManager authenticationManager;

	    @GetMapping("/")
	    public String welcome() {
	        return "Welcome to javatechie !!";
	    }

	    @PostMapping("/authenticate")
	    public String generateToken(@RequestBody AuthRequest authRequest) throws Exception {
	        try {
	            authenticationManager.authenticate(
	                    new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword())
	            );
	        } catch (Exception ex) {
	            throw new InvalidUserNamePassword("inavalid username/password");
	        }
	        return jwtUtil.generateToken(authRequest.getUsername());
	    }
	
	
	    @GetMapping("/useremail/{email}")
	    public User getbyEmail(@PathVariable String email)
	    {
	    	return userService.showByEmail(email);
	    }
	
	
	@Autowired
	public UserController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	

	@GetMapping("/user/show/{id}")
	public int show(@PathVariable int id)
	{
		return id;
	}


	
	
	@SuppressWarnings({ "static-access", "rawtypes" })
	@GetMapping("/users")
	public ResponseEntity<List<User>> listAll()
	{
		return new ResponseEntity(HttpStatus.FOUND).ok(userService.listAll());
	}
	
	@PostMapping("/createusers")
	public int createUser(@RequestBody User user) throws EmailAlreadytakenException
	{
		
		
		
			
			String email=user.getEmail();
			if(userService.showByEmail(email)!=null)
			{
				return 2;
			}
			else {
			System.out.println("Hi");
			user.setPassword(passwordEncoder.encode(user.getPassword()));
			System.out.println(user.getPassword());
			userService.createUser(user);
			return 1;}
	
	}
	
	@SuppressWarnings({ "static-access", "rawtypes" })
	@GetMapping("/user/{id}")
	public ResponseEntity<User> listbyId(@PathVariable int id)
	{
		return new ResponseEntity(HttpStatus.FOUND).ok(userService.showById(id));
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@DeleteMapping("/userdelete/{id}")
	public ResponseEntity<HttpStatus> deletebyId(@PathVariable int id)
	{
		userService.deleteUser(userService.showById(id));
		return new ResponseEntity(HttpStatus.OK);
	}
	 
	
	 @PutMapping("/userUpdate/{id}")
	    public ResponseEntity<HttpStatus> updateUser(@PathVariable int id ,
	         @RequestBody User user) {
	        User user1 = userService.showById(id);
	        user1.setFirst_name(user.getFirst_name());
	        user1.setLast_name(user.getLast_name());
	        user1.setAge(user.getAge());
	        user1.setEmail(user.getEmail());
	        user1.setMobile_number(user.getMobile_number());
	      
	        userService.createUser(user1);
	        return new ResponseEntity(HttpStatus.OK);
	    }
	 
	 @PutMapping("/updateuser")
	 public User update(@RequestBody User user)
	 {
		 System.out.println("Hii");
		 User us1 = userService.showByEmail(user.getEmail());
		 us1.setFirst_name(user.getFirst_name());
		 us1.setLast_name(user.getLast_name());
		 us1.setAge(user.getAge());
		 us1.setMobile_number(user.getMobile_number());
		 userService.createUser(us1);
		 return us1;
	 }
	
	 
	 @PutMapping("/updatepassword")
	 public String updatePassword(@RequestBody PasswordChange passwordChange) throws PasswordGivenWrong
	 {
		 
		 System.out.println("HIIII");
		 User us1 = userService.showByEmail(passwordChange.getEmail());
		 if(passwordEncoder.matches(passwordChange.getOld_password(), us1.getPassword()))
		 {
			 
			 us1.setPassword(passwordEncoder.encode(passwordChange.getNew_password()));
			 
			 userService.createUser(us1);
			 System.out.println(us1.getPassword());
			 return "Success";
		 }
		 
		 else {
			 throw new PasswordGivenWrong("Your PassWord doesn't match");
		 }
	 }
	 
	 @PutMapping("/updatepass")
	 public String updatePass(@RequestBody PasswordChange passwordChange) 
	 {
		 
		
		 System.out.println(passwordChange.getEmail());
		 int lastindex=passwordChange.getEmail().length()-1;
		 
		 String email =passwordChange.getEmail().substring(1,lastindex);
		 
		 System.out.println(email);

		 User us1 = userService.showByEmail(email);
		 System.out.println(us1.getEmail());
		 us1.setPassword(passwordEncoder.encode(passwordChange.getNew_password()));
		 System.out.println("Came");
		 userService.createUser(us1);
		 System.out.println("Success");
		 return "Success";
	 }
	 
	 
	 
	 
	    @Autowired
		private EmailService service;

		@PostMapping("/sendingEmail")
		public MailResponse sendEmail(@RequestBody MailRequest request) {
			Map<String, Object> model = new HashMap<>();
			model.put("Name", request.getName());
			model.put("location", "Bangalore,India");
			return service.sendEmail(request, model);

		}
		@PostMapping("/sendingEmail1")
		public MailResponse sendEmail1(@RequestBody MailRequest request) {
			Map<String, Object> model = new HashMap<>();
			model.put("Name", request.getName());
			model.put("location", "Bangalore,India");
			return service.sendEmail1(request, model);

		}
	 

	 @ExceptionHandler
	 public String showException(InvalidUserNamePassword in)
	 {
		 return in.getMessage();
	 }

	 @ExceptionHandler
	 public String showEmailException(EmailAlreadytakenException in)
	 {
		 return in.getMessage();
	 }
	 
	 
	 
	 @ExceptionHandler
	 public String showPassWordException(PasswordGivenWrong in)
	 {
		 System.out.println(in.getMessage());
		 return in.getMessage();
	 }

	 
	 @GetMapping("search/{email}")
	 public String validateEmail(@PathVariable String email)
	 {
		 if(userService.showByEmail(email)!=null)
		 {
			 return "stop";
		 }
		 else
		 {
			 return "continue";
		 }
	 }
	 
	 
	
	 
	 
}
