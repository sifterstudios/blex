package com.example.blex;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.context.ApplicationContext;
import static org.assertj.core.api.Assertions.assertThat;


@SpringBootTest
@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class BlexApplicationTests {

	@Test
	void contextLoads(ApplicationContext context) {
		assertThat(context).isNotNull();
	}
//	@Autowired
//	private UserRepository userRepository;



	/*public void addTestUsers(){
		User user = new User("johhnyboy", "John Doe", "john.doe@email.com","strong-password");
		User user2 = new User("zohla", "Mia Long", "long@email.com","encrypted-password");
		User user3 = new User("bola", "Benny Short", "bola@email.com","weak-password");
		userRepository.save(user);
		userRepository.save(user2);
		userRepository.save(user3);

	}*/
//	@Test
//	@Order(1)
//	public void testSaveUser() {
//		User user = new User("BlexFan", "password123", "sing@email.com");
//		userRepository.save(user);
//		User foundUser1 = userRepository.findByUsername("BlexFan");
//		Assertions.assertEquals("password123", foundUser1.getPassword());
//	}
//
//	@Test
//	@Order(2)
//	public void testGetUserById(){
//		User user = userRepository.findByUsername("BlexFan");
//		Long id = user.getId();
//		User foundUser = userRepository.findById(id).get();
//		Assertions.assertEquals("BlexFan", foundUser.getUsername());
//	}
//
//	@Test
//	@Order(3)
//	public void testGetAllUsers(){
//		Assertions.assertEquals(2, userRepository.findAll().size());
//		Assertions.assertNotNull(userRepository.findAll());
//	}
//
//	@Test
//	@Order(4)
//	public void deleteUser() {
//		User user = userRepository.findByUsername("BlexFan");
//		Long userId = user.getId();
//		User userToDelete = userRepository.findById(userId).get();
//		userRepository.delete(userToDelete);
//		Assertions.assertEquals(0, userRepository.findAll().size());
//	}
}
