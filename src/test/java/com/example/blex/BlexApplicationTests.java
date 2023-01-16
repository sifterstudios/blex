package com.example.blex;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Optional;

@SpringBootTest
class BlexApplicationTests {

	@Test
	void contextLoads() {
	}
		@Autowired
		private UserRepository userRepository;

		@Test
		public void testSaveUser() {
			User user = new User("johhnyboy", "John Doe", "john.doe@email.com","strong-password");
			userRepository.save(user);
			userRepository.findById(1L)
					.map(newUser -> {
						Assertions.assertEquals("John", newUser.getName());
						return true;
					});
		}

		@Test
		public void testGetUserById(){
			Optional<User> user = userRepository.findById(1L);
			user.ifPresent(value -> Assertions.assertEquals("johhnyboy", value.getName()));
		}

		@Test
		public void testGetAllUsers(){
			Assertions.assertEquals(2, userRepository.findAll().size());
			Assertions.assertNotNull(userRepository.findAll());
		}

		@Test
		public void deleteUser() {
		User user1 = userRepository.findById(1L).get();
		User user2 = userRepository.findById(2L).get();
		userRepository.delete(user1);
		userRepository.delete(user2);
		Assertions.assertTrue(userRepository.findAll().isEmpty());
	}








}
