package com.hospital.demo;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.boot.autoconfigure.solr.SolrAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.hospital.demo.Dao.UserDao;
import com.hospital.demo.model.User;

import lombok.AllArgsConstructor;

@SpringBootApplication(exclude = { SolrAutoConfiguration.class })
@AllArgsConstructor
@EnableDiscoveryClient
public class UserServiceApplication {

	private UserDao userDao;
	
	public static void main(String[] args) {
		SpringApplication.run(UserServiceApplication.class, args);
	}

	 @Bean
	    public WebMvcConfigurer corsConfigurer() {
	        return new WebMvcConfigurer() {
			
	            @Override
	            public void addCorsMappings(CorsRegistry registry) {
	                registry.addMapping("/*").allowedHeaders("*").allowedMethods("*").allowedOrigins("*");
	            }
	        };
	    }

}
