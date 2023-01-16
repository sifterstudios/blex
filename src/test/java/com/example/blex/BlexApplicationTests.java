package com.example.blex;

import org.junit.Assert;
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

	//TODO find a way to test without changing db?
	/*@BeforeAll
	public void addTestUsers(){
		User user = new User("johhnyboy", "John Doe", "john.doe@email.com","strong-password");
		User user2 = new User("zohla", "Mia Long", "long@email.com","encrypted-password");
		User user3 = new User("bola", "Benny Short", "bola@email.com","weak-password");
		userRepository.save(user);
		userRepository.save(user2);
		userRepository.save(user3);

	}*/
		/*@Test
		public void testSaveUser() {
			User user = new User("BlexFan", "Sing Song", "sing@email.com","password");
			userRepository.save(user);
			User foundUser1 = userRepository.findByUserName("BlexFan");
			Assert.assertEquals("Sing Song", foundUser1.getName());
		}*/

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
