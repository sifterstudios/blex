package com.example.blex;

import org.junit.Assert;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Optional;

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureMockMvc
class BlexApplicationTests {

	@Test
	void contextLoads() {
	}
		@Autowired
		private UserRepository userRepository;

	@Autowired
	MockMvc mvc;

		@Test
		public void testSaveUser() {
			User user = new User("johhnyboy", "John Doe", "john.doe@email.com","strong-password");
			userRepository.save(user);
			userRepository.findById(1L)
					.map(newUser -> {
						Assert.assertEquals("John Doe", newUser.getName());
						return true;
					});
		}

		@Test
		public void testGetUserById(){
			Optional<User> user = userRepository.findById(1L);
			Assert.assertEquals("johhnyboy", user.get().getName());
		}

		@Test
		public void testGetAllUsers(){
			Assert.assertEquals(2,userRepository.findAll().size());
			Assert.assertNotNull(userRepository.findAll());
		}

		@Test
		public void deleteUser() {
		User user1 = userRepository.findById(1L).get();
		userRepository.delete(user1);
		Assert.assertTrue(userRepository.findAll().isEmpty());
	}



}
