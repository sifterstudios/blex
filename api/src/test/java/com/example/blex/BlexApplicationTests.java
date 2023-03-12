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


}
