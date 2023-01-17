package com.example.blex;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class BlexApplicationTests {

	@Test
	void contextLoads() {
	}
	@Autowired
	private UserRepository userRepository;



	/*public void addTestUsers(){
		User user = new User("johhnyboy", "John Doe", "john.doe@email.com","strong-password");
		User user2 = new User("zohla", "Mia Long", "long@email.com","encrypted-password");
		User user3 = new User("bola", "Benny Short", "bola@email.com","weak-password");
		userRepository.save(user);
		userRepository.save(user2);
		userRepository.save(user3);

	}*/
	@Test
	@Order(1)
	public void testSaveUser() {
		User user = new User("BlexFan", "Sing Song", "sing@email.com","password");
		userRepository.save(user);
		User foundUser1 = userRepository.findByUserName("BlexFan");
		Assertions.assertEquals("Sing Song", foundUser1.getName());
	}

	@Test
	@Order(2)
	public void testGetUserById(){
		User user = userRepository.findByUserName("BlexFan");
		Long userId = user.getUserId();
		User foundUser = userRepository.findById(userId).get();
		Assertions.assertEquals("Sing Song", foundUser.getName());
	}

	@Test
	@Order(3)
	public void testGetAllUsers(){
		Assertions.assertEquals(2, userRepository.findAll().size());
		Assertions.assertNotNull(userRepository.findAll());
	}

	@Test
	@Order(4)
	public void deleteUser() {
		User user = userRepository.findByUserName("BlexFan");
		Long userId = user.getUserId();
		User userToDelete = userRepository.findById(userId).get();
		userRepository.delete(userToDelete);
		Assertions.assertEquals(1, userRepository.findAll().size());
	}
}
