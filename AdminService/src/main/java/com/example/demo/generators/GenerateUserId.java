package com.example.demo.generators;

import java.util.Calendar;
import java.util.Random;

public class GenerateUserId {
	
	public static String generateId(int length) {

		  String numbers = "1234567890";
	      String combinedChars = numbers;
	      Random random = new Random();
	         
	      char[] id = new char[length];

	      id[0] = numbers.charAt(random.nextInt(numbers.length()));

	      for(int i = 0; i< length ; i++) {
	         id[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
	      }
	      int lastTwoDigits = Calendar.getInstance().get(Calendar.YEAR) % 100;
	      
	      String str = new String(id);
	      return lastTwoDigits+str;
	}

}
