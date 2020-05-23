package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.solr.SolrAutoConfiguration;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication(exclude = { SolrAutoConfiguration.class })
@EnableDiscoveryClient
public class AdminServiceApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(AdminServiceApplication.class, args);
		
	}

}
